-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de perfis dos usuários
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  telefone TEXT,
  data_nascimento DATE,
  cidade TEXT,
  estado TEXT,
  tipo_usuario TEXT CHECK (tipo_usuario IN ('voluntario', 'doador', 'beneficiario', 'parceiro')) DEFAULT 'voluntario',
  aceita_newsletter BOOLEAN DEFAULT false,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de projetos
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT CHECK (status IN ('active', 'completed', 'planned')) DEFAULT 'active',
  participants INTEGER DEFAULT 0,
  location TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  coordinator_id UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de eventos
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  capacity INTEGER DEFAULT 0,
  registered INTEGER DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT NOT NULL,
  status TEXT CHECK (status IN ('open', 'full', 'cancelled', 'completed')) DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de notícias
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  author_id UUID REFERENCES profiles(id),
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de participação em projetos
CREATE TABLE IF NOT EXISTS project_participants (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'volunteer',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);

-- Tabela de inscrições em eventos
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT CHECK (status IN ('confirmed', 'cancelled', 'attended')) DEFAULT 'confirmed',
  UNIQUE(event_id, user_id)
);

-- Tabela de doações
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'BRL',
  payment_method TEXT,
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed', 'cancelled')) DEFAULT 'pending',
  project_id UUID REFERENCES projects(id),
  message TEXT,
  anonymous BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para criar perfil automaticamente quando usuário se registra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nome)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nome', 'Usuário')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Políticas de segurança (RLS - Row Level Security)

-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Usuários podem ver todos os perfis" ON profiles FOR SELECT USING (true);
CREATE POLICY "Usuários podem atualizar seu próprio perfil" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Usuários podem inserir seu próprio perfil" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas para projects
CREATE POLICY "Todos podem ver projetos" ON projects FOR SELECT USING (true);
CREATE POLICY "Apenas coordenadores podem criar projetos" ON projects FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() 
    AND tipo_usuario IN ('voluntario', 'parceiro')
  )
);

-- Políticas para events
CREATE POLICY "Todos podem ver eventos" ON events FOR SELECT USING (true);

-- Políticas para news
CREATE POLICY "Todos podem ver notícias publicadas" ON news FOR SELECT USING (published_at IS NOT NULL);

-- Políticas para project_participants
CREATE POLICY "Usuários podem ver participações em projetos" ON project_participants FOR SELECT USING (true);
CREATE POLICY "Usuários podem se inscrever em projetos" ON project_participants FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Usuários podem cancelar sua participação" ON project_participants FOR DELETE USING (auth.uid() = user_id);

-- Políticas para event_registrations
CREATE POLICY "Usuários podem ver suas inscrições" ON event_registrations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Usuários podem se inscrever em eventos" ON event_registrations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Usuários podem cancelar suas inscrições" ON event_registrations FOR UPDATE USING (auth.uid() = user_id);

-- Políticas para donations
CREATE POLICY "Usuários podem ver suas próprias doações" ON donations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Usuários podem fazer doações" ON donations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Inserir dados de exemplo
INSERT INTO projects (title, description, category, status, participants, location, start_date) VALUES
('Educação para Todos', 'Programa de reforço escolar e apoio pedagógico para crianças em situação de vulnerabilidade social.', 'Educação', 'active', 120, 'São Paulo, SP', '2023-03-15'),
('Arte e Cultura na Comunidade', 'Oficinas de arte, música e teatro para jovens, promovendo expressão cultural e desenvolvimento de talentos.', 'Cultura', 'active', 80, 'Rio de Janeiro, RJ', '2023-01-20'),
('Capacitação Profissional Digital', 'Cursos de capacitação em tecnologia e habilidades digitais para inserção no mercado de trabalho moderno.', 'Capacitação', 'active', 150, 'Belo Horizonte, MG', '2023-02-10');

INSERT INTO events (title, description, event_date, location, capacity, category) VALUES
('Workshop de Capacitação para Voluntários', 'Treinamento completo para novos voluntários interessados em participar dos nossos projetos sociais.', '2025-10-15 14:00:00', 'Sede do Instituto - São Paulo, SP', 30, 'Capacitação'),
('Feira de Artesanato Solidário', 'Exposição e venda de produtos artesanais produzidos pelos beneficiários dos nossos projetos.', '2025-10-22 09:00:00', 'Praça da República - São Paulo, SP', 100, 'Cultural'),
('Jantar Beneficente Anual', 'Evento de arrecadação de fundos para apoiar nossos projetos educacionais e sociais.', '2025-11-05 19:30:00', 'Hotel Copacabana Palace - Rio de Janeiro, RJ', 200, 'Arrecadação');

INSERT INTO news (title, content, summary, category, featured, published_at) VALUES
('Instituto Infinitus inaugura novo centro de capacitação em São Paulo', 'O Instituto Infinitus inaugurou nesta semana seu mais novo centro de capacitação profissional...', 'Nova unidade oferecerá cursos profissionalizantes gratuitos para jovens em situação de vulnerabilidade social.', 'Institucional', true, NOW()),
('Projeto Educação para Todos alcança marca de 500 beneficiários', 'O projeto Educação para Todos, uma das principais iniciativas do Instituto Infinitus...', 'Programa de reforço escolar celebra importante marco com resultados expressivos na melhoria do desempenho acadêmico.', 'Projetos', false, NOW()),
('Parceria com empresa local gera 50 novas vagas de emprego', 'Uma nova parceria estratégica entre o Instituto Infinitus e a empresa TechCorp...', 'Acordo firmado com a TechCorp oferece oportunidades de trabalho para formandos dos cursos de capacitação.', 'Parcerias', false, NOW());
