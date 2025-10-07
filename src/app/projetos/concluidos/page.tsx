import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Users, MapPin, Calendar, ArrowRight, CheckCircle, Award, BookOpen, Palette, Briefcase, Heart } from 'lucide-react'

export default function ProjetosConcluídosPage() {
  const projetosConcluidos = [
    {
      id: 1,
      titulo: 'Alfabetização Digital - Primeira Turma',
      descricao: 'Curso pioneiro de informática básica e inclusão digital para jovens e adultos de comunidades periféricas.',
      categoria: 'Educação',
      participantes: 200,
      local: 'Recife, PE',
      dataInicio: '2022-08-01',
      dataConclusao: '2023-07-30',
      duracao: '12 meses',
      impacto: '180 pessoas certificadas (90% de aprovação)',
      resultados: [
        '180 certificados emitidos',
        '120 pessoas conseguiram emprego',
        '50 abriram negócios próprios',
        '95% de satisfação dos participantes'
      ],
      cor: 'from-indigo-500 to-indigo-600',
      icone: BookOpen,
      premio: 'Melhor Projeto de Inclusão Digital 2023'
    },
    {
      id: 2,
      titulo: 'Festival de Talentos Comunitários 2023',
      descricao: 'Evento cultural que celebrou os talentos artísticos desenvolvidos nos projetos do instituto.',
      categoria: 'Cultura',
      participantes: 300,
      local: 'São Paulo, SP',
      dataInicio: '2023-01-15',
      dataConclusao: '2023-12-15',
      duracao: '11 meses',
      impacto: '15 apresentações públicas realizadas',
      resultados: [
        '300 participantes envolvidos',
        '15 apresentações públicas',
        '5000 pessoas no público',
        '3 grupos artísticos formados'
      ],
      cor: 'from-purple-500 to-purple-600',
      icone: Palette,
      premio: 'Reconhecimento da Secretaria de Cultura'
    },
    {
      id: 3,
      titulo: 'Capacitação em Gastronomia Social',
      descricao: 'Curso profissionalizante em culinária para mulheres em situação de vulnerabilidade social.',
      categoria: 'Capacitação',
      participantes: 80,
      local: 'Salvador, BA',
      dataInicio: '2022-03-01',
      dataConclusao: '2022-12-20',
      duracao: '10 meses',
      impacto: '65 mulheres empregadas no setor gastronômico',
      resultados: [
        '80 mulheres capacitadas',
        '65 conseguiram emprego (81%)',
        '15 abriram food trucks',
        '10 criaram negócios de delivery'
      ],
      cor: 'from-green-500 to-green-600',
      icone: Briefcase,
      premio: 'Prêmio Mulher Empreendedora 2023'
    },
    {
      id: 4,
      titulo: 'Projeto Leitura na Praça',
      descricao: 'Iniciativa de incentivo à leitura com bibliotecas móveis em praças públicas.',
      categoria: 'Educação',
      participantes: 500,
      local: 'Belo Horizonte, MG',
      dataInicio: '2021-06-01',
      dataConclusao: '2022-05-30',
      duracao: '12 meses',
      impacto: '2000 livros emprestados, 500 crianças atendidas',
      resultados: [
        '500 crianças cadastradas',
        '2000 livros emprestados',
        '50 eventos de contação de histórias',
        '20 praças atendidas'
      ],
      cor: 'from-blue-500 to-blue-600',
      icone: BookOpen,
      premio: 'Menção Honrosa - Prêmio Leitura SP'
    },
    {
      id: 5,
      titulo: 'Cuidadores de Idosos - Capacitação',
      descricao: 'Formação profissional para cuidadores de idosos com foco em humanização do cuidado.',
      categoria: 'Assistência Social',
      participantes: 60,
      local: 'Rio de Janeiro, RJ',
      dataInicio: '2021-09-01',
      dataConclusao: '2022-03-30',
      duracao: '7 meses',
      impacto: '55 cuidadores certificados e empregados',
      resultados: [
        '60 pessoas capacitadas',
        '55 conseguiram emprego (92%)',
        '200 idosos beneficiados',
        '98% de aprovação no curso'
      ],
      cor: 'from-orange-500 to-orange-600',
      icone: Heart,
      premio: 'Certificação pelo Conselho Regional'
    },
    {
      id: 6,
      titulo: 'Horta Escolar Sustentável',
      descricao: 'Implementação de hortas em escolas públicas com educação ambiental integrada.',
      categoria: 'Meio Ambiente',
      participantes: 150,
      local: 'Curitiba, PR',
      dataInicio: '2021-02-01',
      dataConclusao: '2021-11-30',
      duracao: '10 meses',
      impacto: '10 escolas com hortas funcionais',
      resultados: [
        '10 hortas implementadas',
        '150 alunos envolvidos',
        '500kg de alimentos produzidos',
        '30 professores capacitados'
      ],
      cor: 'from-sage-500 to-sage-600',
      icone: BookOpen,
      premio: 'Projeto Modelo MEC'
    }
  ]

  const anos = ['Todos', '2023', '2022', '2021']
  const categorias = ['Todas', 'Educação', 'Cultura', 'Capacitação', 'Assistência Social', 'Meio Ambiente']

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos Concluídos
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Celebramos os projetos que já cumpriram sua missão e deixaram 
              um legado de transformação. Cada projeto concluído representa 
              vidas transformadas e objetivos alcançados.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas de Sucesso */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">25+</div>
              <div className="text-sm text-corporate-light">Projetos Finalizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">1200+</div>
              <div className="text-sm text-corporate-light">Pessoas Impactadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">92%</div>
              <div className="text-sm text-corporate-light">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">15+</div>
              <div className="text-sm text-corporate-light">Prêmios Recebidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-corporate-dark">Filtrar por ano:</span>
              {anos.map((ano, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    ano === 'Todos'
                      ? 'bg-sage-600 text-white'
                      : 'bg-white text-corporate-dark border border-gray-200 hover:border-sage-500'
                  }`}
                >
                  {ano}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-corporate-dark">Categoria:</span>
              {categorias.slice(0, 4).map((categoria, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    categoria === 'Todas'
                      ? 'bg-accent-green text-white'
                      : 'bg-white text-corporate-dark border border-gray-200 hover:border-accent-green'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Projetos Concluídos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projetosConcluidos.map((projeto, index) => {
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
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center">
                        <CheckCircle size={12} className="mr-1" />
                        Concluído
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
                        <span>
                          {new Date(projeto.dataInicio).toLocaleDateString('pt-BR')} - {' '}
                          {new Date(projeto.dataConclusao).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    {/* Resultados Principais */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-corporate-dark mb-2">Principais Resultados:</h4>
                      <div className="space-y-1">
                        {projeto.resultados.slice(0, 3).map((resultado, resIndex) => (
                          <div key={resIndex} className="flex items-center text-xs text-corporate-light">
                            <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                            {resultado}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impacto e Prêmio */}
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-green-700 text-sm font-medium">
                          📊 {projeto.impacto}
                        </p>
                      </div>
                      {projeto.premio && (
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <p className="text-yellow-700 text-sm font-medium flex items-center">
                            <Award size={14} className="mr-2" />
                            {projeto.premio}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      Relatório Completo
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      Ver Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Legado e Aprendizados */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-corporate-dark mb-6">
              Legado dos Projetos Concluídos
            </h2>
            <p className="text-lg text-corporate-light mb-8 leading-relaxed">
              Cada projeto concluído deixa um legado valioso que vai além dos números. 
              As experiências, aprendizados e metodologias desenvolvidas servem como 
              base para novos projetos e inspiram outras organizações.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-sage-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-sage-700 mb-3">Metodologias Testadas</h3>
                <p className="text-sm text-corporate-light">
                  Desenvolvemos e validamos metodologias que agora são replicadas 
                  em nossos projetos ativos e compartilhadas com outras organizações.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-accent-green mb-3">Rede de Parceiros</h3>
                <p className="text-sm text-corporate-light">
                  Construímos uma sólida rede de parceiros, voluntários e apoiadores 
                  que continuam engajados em nossos novos projetos.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">Impacto Duradouro</h3>
                <p className="text-sm text-corporate-light">
                  Os beneficiários dos projetos concluídos continuam aplicando 
                  os conhecimentos adquiridos, multiplicando o impacto na comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Inspire-se em Nossos Sucessos
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Nossos projetos concluídos provam que a transformação social é possível. 
            Junte-se a nós para criar novos sucessos e impactar ainda mais vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Projetos Ativos
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Como Participar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
