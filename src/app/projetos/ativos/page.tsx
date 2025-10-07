import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Users, MapPin, Calendar, ArrowRight, BookOpen, Palette, Briefcase, Heart, Leaf, Target } from 'lucide-react'

export default function ProjetosAtivosPage() {
  const projetosAtivos = [
    {
      id: 1,
      titulo: 'Educação para Todos',
      descricao: 'Programa de reforço escolar e apoio pedagógico para crianças em situação de vulnerabilidade social, oferecendo aulas de português, matemática e desenvolvimento pessoal.',
      categoria: 'Educação',
      participantes: 120,
      local: 'São Paulo, SP',
      dataInicio: '2023-03-15',
      coordenador: 'Fernanda Costa Silva',
      impacto: '85% de melhoria no desempenho escolar',
      meta: 'Atender 200 crianças até dezembro de 2025',
      atividades: [
        'Aulas de reforço escolar',
        'Oficinas de leitura',
        'Apoio psicopedagógico',
        'Atividades recreativas'
      ],
      cor: 'from-blue-500 to-blue-600',
      icone: BookOpen,
      status: 'Em expansão'
    },
    {
      id: 2,
      titulo: 'Arte e Cultura na Comunidade',
      descricao: 'Oficinas de arte, música e teatro para jovens, promovendo expressão cultural e desenvolvimento de talentos artísticos em comunidades periféricas.',
      categoria: 'Cultura',
      participantes: 80,
      local: 'Rio de Janeiro, RJ',
      dataInicio: '2023-01-20',
      coordenador: 'Ricardo Mendes Oliveira',
      impacto: '200+ apresentações realizadas',
      meta: 'Formar 3 grupos artísticos independentes',
      atividades: [
        'Oficinas de teatro',
        'Aulas de música',
        'Artes visuais',
        'Apresentações públicas'
      ],
      cor: 'from-purple-500 to-purple-600',
      icone: Palette,
      status: 'Estável'
    },
    {
      id: 3,
      titulo: 'Capacitação Profissional Digital',
      descricao: 'Cursos de capacitação em tecnologia e habilidades digitais para inserção no mercado de trabalho moderno.',
      categoria: 'Capacitação',
      participantes: 150,
      local: 'Belo Horizonte, MG',
      dataInicio: '2023-02-10',
      coordenador: 'Patrícia Santos Lima',
      impacto: '70% de empregabilidade',
      meta: 'Certificar 300 pessoas em 2025',
      atividades: [
        'Curso de informática básica',
        'Marketing digital',
        'E-commerce',
        'Soft skills'
      ],
      cor: 'from-green-500 to-green-600',
      icone: Briefcase,
      status: 'Em crescimento'
    },
    {
      id: 4,
      titulo: 'Horta Comunitária Sustentável',
      descricao: 'Projeto de agricultura urbana e educação ambiental para comunidades carentes, promovendo segurança alimentar e consciência ecológica.',
      categoria: 'Meio Ambiente',
      participantes: 45,
      local: 'Curitiba, PR',
      dataInicio: '2023-04-05',
      coordenador: 'André Luiz Ferreira',
      impacto: '500kg de alimentos produzidos/mês',
      meta: 'Criar 5 hortas comunitárias',
      atividades: [
        'Cultivo orgânico',
        'Compostagem',
        'Educação ambiental',
        'Distribuição de alimentos'
      ],
      cor: 'from-sage-500 to-sage-600',
      icone: Leaf,
      status: 'Expandindo'
    },
    {
      id: 5,
      titulo: 'Apoio à Terceira Idade',
      descricao: 'Programa de assistência e atividades para idosos em situação de vulnerabilidade, oferecendo cuidado, companhia e atividades terapêuticas.',
      categoria: 'Assistência Social',
      participantes: 60,
      local: 'Salvador, BA',
      dataInicio: '2023-01-15',
      coordenador: 'Maria Santos',
      impacto: '95% de satisfação dos participantes',
      meta: 'Atender 100 idosos regularmente',
      atividades: [
        'Atividades físicas adaptadas',
        'Oficinas de memória',
        'Acompanhamento médico',
        'Eventos sociais'
      ],
      cor: 'from-orange-500 to-orange-600',
      icone: Heart,
      status: 'Consolidado'
    },
    {
      id: 6,
      titulo: 'Empreendedorismo Social',
      descricao: 'Programa de apoio a microempreendedores de comunidades carentes, oferecendo capacitação em gestão de negócios e microcrédito.',
      categoria: 'Capacitação',
      participantes: 35,
      local: 'Fortaleza, CE',
      dataInicio: '2023-06-01',
      coordenador: 'Carlos Santos',
      impacto: '25 negócios criados',
      meta: 'Apoiar 100 empreendedores',
      atividades: [
        'Curso de gestão',
        'Plano de negócios',
        'Microcrédito',
        'Mentoria empresarial'
      ],
      cor: 'from-indigo-500 to-indigo-600',
      icone: Target,
      status: 'Novo'
    }
  ]

  const categorias = ['Todos', 'Educação', 'Cultura', 'Capacitação', 'Meio Ambiente', 'Assistência Social']

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em expansão':
      case 'Em crescimento':
      case 'Expandindo':
        return 'bg-accent-green text-white'
      case 'Estável':
      case 'Consolidado':
        return 'bg-blue-500 text-white'
      case 'Novo':
        return 'bg-accent-orange text-white'
      default:
        return 'bg-sage-500 text-white'
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos Ativos
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conheça os projetos que estão em andamento e transformando vidas 
              em diversas comunidades pelo Brasil. Cada projeto tem metas claras 
              e resultados mensuráveis de impacto social.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas Gerais */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">6</div>
              <div className="text-sm text-corporate-light">Projetos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">490+</div>
              <div className="text-sm text-corporate-light">Beneficiários Diretos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">6</div>
              <div className="text-sm text-corporate-light">Estados Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">85%</div>
              <div className="text-sm text-corporate-light">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoria === 'Todos'
                    ? 'bg-sage-600 text-white'
                    : 'bg-white text-corporate-dark border border-gray-200 hover:border-sage-500 hover:text-sage-600'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projetosAtivos.map((projeto, index) => {
              const Icon = projeto.icone
              return (
                <Card 
                  key={projeto.id}
                  hover
                  className="overflow-hidden fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header do Card */}
                  <div className={`relative h-32 bg-gradient-to-br ${projeto.cor} -m-6 mb-6`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="text-white opacity-20" size={64} />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(projeto.status)}`}>
                        {projeto.status}
                      </span>
                    </div>
                    
                    {/* Categoria Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-corporate-dark text-xs font-medium rounded-full">
                        {projeto.categoria}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{projeto.titulo}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-corporate-light text-sm mb-4 leading-relaxed">
                      {projeto.descricao}
                    </p>

                    {/* Informações do Projeto */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-corporate-dark">
                        <Users size={16} className="mr-2 text-sage-600" />
                        <span className="font-medium">{projeto.participantes} participantes</span>
                      </div>
                      <div className="flex items-center text-sm text-corporate-light">
                        <MapPin size={16} className="mr-2" />
                        <span>{projeto.local}</span>
                      </div>
                      <div className="flex items-center text-sm text-corporate-light">
                        <Calendar size={16} className="mr-2" />
                        <span>Início: {new Date(projeto.dataInicio).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>

                    {/* Atividades */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-corporate-dark mb-2">Principais Atividades:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {projeto.atividades.slice(0, 4).map((atividade, actIndex) => (
                          <div key={actIndex} className="flex items-center text-xs text-corporate-light">
                            <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mr-2" />
                            {atividade}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impacto e Meta */}
                    <div className="space-y-3">
                      <div className="bg-sage-50 rounded-lg p-3">
                        <p className="text-sage-700 text-sm font-medium">
                          📊 Impacto: {projeto.impacto}
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-blue-700 text-sm font-medium">
                          🎯 Meta 2025: {projeto.meta}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-1"
                    >
                      Participar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impacto Geral */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-corporate-dark mb-6">
              Impacto Coletivo dos Projetos Ativos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-sage-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-sage-600 mb-2">490+</div>
                <div className="text-sm text-corporate-dark font-medium mb-1">Pessoas Atendidas</div>
                <div className="text-xs text-corporate-light">Beneficiários diretos mensais</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-accent-green mb-2">1200+</div>
                <div className="text-sm text-corporate-dark font-medium mb-1">Impacto Indireto</div>
                <div className="text-xs text-corporate-light">Familiares e comunidade</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-corporate-dark font-medium mb-1">Taxa de Sucesso</div>
                <div className="text-xs text-corporate-light">Objetivos alcançados</div>
              </div>
            </div>
            <p className="text-corporate-light leading-relaxed">
              Nossos projetos ativos representam o coração da nossa missão de transformação social. 
              Cada iniciativa é cuidadosamente planejada, executada e monitorada para garantir 
              o máximo impacto positivo na vida dos beneficiários e suas comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Participe dos Nossos Projetos Ativos
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Seja voluntário, faça uma doação ou proponha uma parceria. 
            Há várias formas de contribuir com nossos projetos em andamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Como Participar
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Seja Voluntário
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
