# 🔧 Configuração do Supabase

Este documento explica como configurar o Supabase para o projeto Instituto Infinitus.

## 📋 Pré-requisitos

- Conta no [Supabase](https://supabase.com) (gratuita)
- Projeto Next.js já configurado

## 🚀 Passo a Passo

### 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Clique em **"Start your project"**
3. Faça login ou crie uma conta
4. Clique em **"New Project"**
5. Escolha sua organização
6. Preencha os dados:
   - **Name**: `instituto-infinitus`
   - **Database Password**: Crie uma senha forte
   - **Region**: `South America (São Paulo)`
7. Clique em **"Create new project"**

### 2. Configurar Banco de Dados

1. Aguarde o projeto ser criado (pode levar alguns minutos)
2. No painel do Supabase, vá em **"SQL Editor"**
3. Clique em **"New query"**
4. Copie todo o conteúdo do arquivo `supabase/schema.sql`
5. Cole no editor SQL
6. Clique em **"Run"** para executar

### 3. Obter Credenciais

1. No painel do Supabase, vá em **"Settings"** → **"API"**
2. Copie as seguintes informações:
   - **Project URL** (ex: `https://abc123.supabase.co`)
   - **anon public key** (chave longa começando com `eyJ...`)

### 4. Configurar Variáveis de Ambiente

1. No projeto, abra o arquivo `.env.local`
2. Substitua os valores pelas suas credenciais:

```env
NEXT_PUBLIC_SUPABASE_URL=https://sua-url-aqui.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Configurar Autenticação

1. No Supabase, vá em **"Authentication"** → **"Settings"**
2. Configure as seguintes opções:

#### Site URL
```
http://localhost:3000
```

#### Redirect URLs
```
http://localhost:3000/auth/callback
http://localhost:3000/dashboard
```

#### Email Templates (Opcional)
- Personalize os templates de e-mail em **"Email Templates"**
- Configure SMTP personalizado se necessário

### 6. Configurar Políticas de Segurança (RLS)

As políticas já foram criadas no script SQL, mas você pode verificar em:
- **"Authentication"** → **"Policies"**

### 7. Testar Configuração

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse `http://localhost:3000/auth/cadastro`
3. Tente criar uma conta
4. Verifique se o usuário foi criado em **"Authentication"** → **"Users"**
5. Verifique se o perfil foi criado em **"Table Editor"** → **"profiles"**

## 🔍 Verificação

### Tabelas Criadas
- ✅ `profiles` - Perfis dos usuários
- ✅ `projects` - Projetos do instituto
- ✅ `events` - Eventos e atividades
- ✅ `news` - Notícias e atualizações
- ✅ `project_participants` - Participação em projetos
- ✅ `event_registrations` - Inscrições em eventos
- ✅ `donations` - Doações realizadas

### Funcionalidades Ativas
- ✅ Cadastro de usuários
- ✅ Login/Logout
- ✅ Recuperação de senha
- ✅ Perfis de usuário
- ✅ Proteção de rotas
- ✅ Dashboard personalizado

## 🐛 Solução de Problemas

### Erro: "Invalid API Key"
- Verifique se copiou a chave correta
- Certifique-se de usar a **anon public key**, não a service key

### Erro: "Failed to fetch"
- Verifique se a URL está correta
- Certifique-se de incluir `https://`

### Usuário não consegue se cadastrar
- Verifique as políticas RLS
- Confirme se o trigger `handle_new_user` foi criado

### Perfil não é criado automaticamente
- Execute novamente a função `handle_new_user` no SQL Editor
- Verifique se o trigger está ativo

## 📊 Dados de Exemplo

O script SQL já inclui dados de exemplo:
- 3 projetos ativos
- 3 eventos futuros
- 3 notícias publicadas

## 🔐 Segurança

### Políticas Implementadas
- Usuários só podem editar seu próprio perfil
- Todos podem ver projetos e eventos públicos
- Apenas usuários autenticados podem participar de projetos
- Doações são privadas para cada usuário

### Recomendações
- Use senhas fortes para o banco
- Configure SMTP personalizado para produção
- Ative 2FA na conta do Supabase
- Monitore logs de autenticação

## 🚀 Próximos Passos

Após configurar o Supabase:

1. **Testar todas as funcionalidades**
2. **Personalizar templates de e-mail**
3. **Configurar domínio personalizado** (produção)
4. **Implementar backup automático**
5. **Configurar monitoramento**

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no Supabase Dashboard
2. Consulte a [documentação oficial](https://supabase.com/docs)
3. Verifique o console do navegador para erros JavaScript

---

**✅ Configuração Concluída!**

Seu projeto agora está totalmente integrado com Supabase e pronto para uso em produção!
