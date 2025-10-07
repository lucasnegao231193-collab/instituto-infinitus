import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Target, Eye, Heart, Users, Lightbulb, Shield, Globe, Award, Users2 } from 'lucide-react'

export default function MissaoPage() {
  const pilares = [
    {
      icon: Target,
      titulo: 'Missão',
      subtitulo: 'Nosso Propósito',
      descricao: 'Promover transformação social através de projetos educacionais, culturais e de desenvolvimento comunitário, impactando positivamente a vida de pessoas em situação de vulnerabilidade social.',
      detalhes: [
        'Oferecer educação de qualidade e acessível',
        'Desenvolver projetos culturais inclusivos',
        'Fortalecer comunidades através do desenvolvimento local',
        'Promover igualdade de oportunidades'
      ],
      cor: 'from-sage-500 to-sage-600',
      bgColor: 'bg-sage-50'
    },
    {
      icon: Eye,
      titulo: 'Visão',
      subtitulo: 'Nosso Futuro',
      descricao: 'Ser referência nacional em projetos de impacto social, reconhecida pela excelência na execução de iniciativas que promovam igualdade de oportunidades e desenvolvimento sustentável.',
      detalhes: [
        'Expandir para todas as regiões do Brasil',
        'Ser modelo de gestão transparente no terceiro setor',
        'Influenciar políticas públicas de desenvolvimento social',
        'Criar uma rede nacional de transformação social'
      ],
      cor: 'from-accent-green to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Heart,
      titulo: 'Valores',
      subtitulo: 'Nossos Princípios',
      descricao: 'Comprometimento, transparência, respeito à diversidade, inovação social, trabalho em equipe e foco no desenvolvimento humano integral.',
      detalhes: [
        'Ética e transparência em todas as ações',
        'Respeito à dignidade humana',
        'Compromisso com resultados de impacto',
        'Valorização da diversidade e inclusão'
      ],
      cor: 'from-accent-orange to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const valores = [
    {
      icon: Users,
      titulo: 'Inclusão Social',
      descricao: 'Acreditamos no potencial de cada indivíduo e trabalhamos para eliminar barreiras que impedem o desenvolvimento humano.',
      cor: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      titulo: 'Inovação',
      descricao: 'Buscamos constantemente soluções criativas e inovadoras para os desafios sociais contemporâneos.',
      cor: 'text-yellow-600'
    },
    {
      icon: Shield,
      titulo: 'Transparência',
      descricao: 'Mantemos total transparência em nossas ações, prestando contas à sociedade de todos os recursos e resultados.',
      cor: 'text-green-600'
    },
    {
      icon: Globe,
      titulo: 'Sustentabilidade',
      descricao: 'Desenvolvemos projetos que promovem o desenvolvimento sustentável e a preservação do meio ambiente.',
      cor: 'text-sage-600'
    },
    {
      icon: Users2,
      titulo: 'Colaboração',
      descricao: 'Valorizamos parcerias e trabalho em equipe, acreditando que juntos podemos alcançar resultados maiores.',
      cor: 'text-purple-600'
    },
    {
      icon: Award,
      titulo: 'Excelência',
      descricao: 'Buscamos a excelência em tudo que fazemos, sempre com foco na qualidade e no impacto positivo.',
      cor: 'text-red-600'
    }
  ]

  const principios = [
    {
      titulo: 'Desenvolvimento Humano Integral',
      descricao: 'Focamos no desenvolvimento completo da pessoa: educacional, cultural, profissional e social.'
    },
    {
      titulo: 'Empoderamento Comunitário',
      descricao: 'Capacitamos comunidades para que se tornem protagonistas de sua própria transformação.'
    },
    {
      titulo: 'Impacto Mensurável',
      descricao: 'Todos os nossos projetos têm metas claras e resultados mensuráveis de impacto social.'
    },
    {
      titulo: 'Gestão Participativa',
      descricao: 'Envolvemos beneficiários, voluntários e parceiros nas decisões e planejamento dos projetos.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Missão, Visão e Valores
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conheça os pilares que fundamentam nossa atuação e guiam 
              cada decisão em nossa jornada de transformação social.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares Principais */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Nossos Pilares Fundamentais
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Os três pilares que definem nossa identidade e direcionam todas as nossas ações
            </p>
          </div>

          <div className="space-y-12">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Ícone e Título */}
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className={`w-24 h-24 bg-gradient-to-br ${pilar.cor} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6`}>
                      <Icon className="text-white" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-corporate-dark mb-2">
                      {pilar.titulo}
                    </h3>
                    <p className="text-sage-600 font-medium text-lg">
                      {pilar.subtitulo}
                    </p>
                  </div>

                  {/* Conteúdo */}
                  <Card className="lg:w-2/3" hover>
                    <CardContent className="p-8">
                      <p className="text-corporate-light text-lg mb-6 leading-relaxed">
                        {pilar.descricao}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pilar.detalhes.map((detalhe, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-corporate-dark text-sm">
                              {detalhe}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Nossos Valores em Ação
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Cada valor é vivenciado diariamente em nossos projetos e relacionamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon
              return (
                <Card 
                  key={index}
                  hover
                  className="text-center fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className={valor.cor} size={32} />
                    </div>
                    <CardTitle className="text-xl">{valor.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-corporate-light leading-relaxed">
                      {valor.descricao}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Princípios de Atuação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Princípios de Atuação
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Como colocamos nossos valores em prática no dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {principios.map((principio, index) => (
              <Card key={index} hover className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-corporate-dark mb-3">
                    {principio.titulo}
                  </h3>
                  <p className="text-corporate-light leading-relaxed">
                    {principio.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="section-padding gradient-sage">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Nosso Compromisso
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <p className="text-lg text-white leading-relaxed mb-6">
                Comprometemo-nos a manter estes valores e princípios como guia 
                em todas as nossas ações, decisões e relacionamentos. Acreditamos 
                que é através da coerência entre o que falamos e o que fazemos 
                que construímos confiança e geramos impacto real na sociedade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/80">Transparência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/80">Compromisso</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-white/80">Potencial</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projetos" className="btn-primary bg-white text-sage-600 hover:bg-gray-50">
                Veja Nossos Projetos
              </a>
              <a href="/sobre/equipe" className="btn-outline border-white text-white hover:bg-white/10">
                Conheça Nossa Equipe
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
