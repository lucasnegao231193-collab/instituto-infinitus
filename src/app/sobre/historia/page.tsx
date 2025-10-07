import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar, Award, Users, Globe } from 'lucide-react'

export default function HistoriaPage() {
  const timeline = [
    {
      ano: '2015',
      titulo: 'Fundação do Instituto',
      descricao: 'O Instituto Infinitus foi fundado por um grupo de educadores e assistentes sociais com o sonho de transformar vidas através da educação.',
      icone: '🌱'
    },
    {
      ano: '2016',
      titulo: 'Primeiro Projeto Educacional',
      descricao: 'Lançamento do projeto "Educação para Todos", oferecendo reforço escolar gratuito para 50 crianças em São Paulo.',
      icone: '📚'
    },
    {
      ano: '2017',
      titulo: 'Expansão para Cultura',
      descricao: 'Criação dos primeiros projetos culturais, incluindo oficinas de arte, música e teatro para jovens.',
      icone: '🎭'
    },
    {
      ano: '2018',
      titulo: 'Capacitação Profissional',
      descricao: 'Início dos cursos de capacitação profissional, focando na inserção de jovens no mercado de trabalho.',
      icone: '💼'
    },
    {
      ano: '2019',
      titulo: 'Reconhecimento Nacional',
      descricao: 'Recebimento do primeiro prêmio de responsabilidade social, reconhecendo o impacto dos nossos projetos.',
      icone: '🏆'
    },
    {
      ano: '2020',
      titulo: 'Adaptação Digital',
      descricao: 'Durante a pandemia, adaptamos todos os projetos para o formato online, mantendo o atendimento às comunidades.',
      icone: '💻'
    },
    {
      ano: '2021',
      titulo: 'Expansão Nacional',
      descricao: 'Abertura de núcleos em outras cidades: Rio de Janeiro, Belo Horizonte e Salvador.',
      icone: '🌍'
    },
    {
      ano: '2022',
      titulo: 'Parcerias Estratégicas',
      descricao: 'Estabelecimento de parcerias com empresas e outras ONGs, ampliando o alcance dos projetos.',
      icone: '🤝'
    },
    {
      ano: '2023',
      titulo: 'Marco de 500 Beneficiários',
      descricao: 'Alcançamos a marca histórica de 500 pessoas diretamente beneficiadas pelos nossos projetos.',
      icone: '👥'
    },
    {
      ano: '2024',
      titulo: 'Inovação e Sustentabilidade',
      descricao: 'Lançamento de projetos focados em meio ambiente e sustentabilidade, incluindo hortas comunitárias.',
      icone: '🌿'
    },
    {
      ano: '2025',
      titulo: 'Década de Transformação',
      descricao: 'Celebramos 10 anos de impacto social, com mais de 1000 vidas transformadas e 25 projetos ativos.',
      icone: '🎉'
    }
  ]

  const conquistas = [
    { numero: '10', label: 'Anos de História', icone: Calendar },
    { numero: '1000+', label: 'Vidas Transformadas', icone: Users },
    { numero: '25+', label: 'Projetos Realizados', icone: Award },
    { numero: '15+', label: 'Cidades Atendidas', icone: Globe }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Uma década de dedicação à transformação social. Conheça a jornada 
              que nos trouxe até aqui e os marcos que construímos juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {conquistas.map((conquista, index) => {
              const Icon = conquista.icone
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-sage-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-corporate-dark mb-2">
                    {conquista.numero}
                  </div>
                  <div className="text-sm text-corporate-light">
                    {conquista.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Linha do Tempo
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Acompanhe os principais marcos da nossa trajetória de transformação social
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((evento, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-sage-200 hidden md:block" />
                )}
                
                <div className={`flex flex-col md:flex-row items-start gap-6 mb-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Ano e Ícone */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center text-white text-2xl mb-2">
                      {evento.icone}
                    </div>
                    <div className="text-2xl font-bold text-sage-600">
                      {evento.ano}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <Card hover className="flex-1 fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-corporate-dark mb-3">
                        {evento.titulo}
                      </h3>
                      <p className="text-corporate-light leading-relaxed">
                        {evento.descricao}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão Atual */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-corporate-dark mb-6">
              Nossa Missão Hoje
            </h2>
            <p className="text-lg text-corporate-light mb-8 leading-relaxed">
              Após uma década de trabalho dedicado, continuamos firmes em nosso propósito: 
              <strong className="text-corporate-dark"> transformar vidas através da educação, cultura e desenvolvimento comunitário</strong>. 
              Cada projeto, cada pessoa impactada e cada conquista nos motiva a seguir em frente, 
              sempre buscando inovar e ampliar nosso alcance.
            </p>
            
            <div className="bg-sage-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-sage-700 mb-4">
                "Acreditamos que cada pessoa tem potencial infinito para crescer e transformar sua realidade."
              </h3>
              <p className="text-sage-600 italic">
                - Fundadores do Instituto Infinitus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa história continua sendo escrita todos os dias. 
            Junte-se a nós e ajude a construir os próximos capítulos desta jornada de transformação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projetos" className="btn-primary bg-white text-sage-600 hover:bg-gray-50">
              Conheça Nossos Projetos
            </a>
            <a href="/contato" className="btn-outline border-white text-white hover:bg-white/10">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
