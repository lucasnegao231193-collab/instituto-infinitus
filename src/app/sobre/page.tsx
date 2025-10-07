import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

export default function SobrePage() {
  const stats = [
    { icon: Users, label: 'Vidas Impactadas', value: '500+' },
    { icon: Award, label: 'Projetos Realizados', value: '50+' },
    { icon: Globe, label: 'Comunidades Atendidas', value: '15+' },
    { icon: Heart, label: 'Voluntários Ativos', value: '100+' }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o Instituto Infinitus
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Somos uma organização dedicada à transformação social através de projetos 
              educacionais, culturais e de desenvolvimento comunitário. Nossa missão é 
              promover igualdade de oportunidades e construir um futuro melhor para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-sage-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-corporate-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-corporate-light">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Nossos Pilares
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-sage-600" size={32} />
                </div>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-corporate-light">
                  Promover transformação social através de projetos educacionais, 
                  culturais e de desenvolvimento comunitário.
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-accent-green" size={32} />
                </div>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-corporate-light">
                  Ser referência nacional em projetos de impacto social, 
                  reconhecida pela excelência e transparência.
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent-orange" size={32} />
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-corporate-light">
                  Comprometimento, transparência, respeito à diversidade, 
                  inovação social e desenvolvimento humano integral.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Conheça Mais Sobre Nós
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Explore nossa história, conheça nossa equipe e descubra como fazemos a diferença
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Nossa História
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Conheça a Equipe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
