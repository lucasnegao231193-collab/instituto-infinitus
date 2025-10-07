'use client'

import React from 'react'
import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Promover transformação social através de projetos educacionais, culturais e de desenvolvimento comunitário, impactando positivamente a vida de pessoas em situação de vulnerabilidade.',
      color: 'text-sage-600',
      bgColor: 'bg-sage-50'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência nacional em projetos de impacto social, reconhecida pela excelência na execução de iniciativas que promovam igualdade de oportunidades e desenvolvimento sustentável.',
      color: 'text-accent-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Comprometimento, transparência, respeito à diversidade, inovação social, trabalho em equipe e foco no desenvolvimento humano integral.',
      color: 'text-accent-orange',
      bgColor: 'bg-orange-50'
    }
  ]

  const principles = [
    {
      icon: Users,
      title: 'Inclusão Social',
      description: 'Acreditamos no potencial de cada indivíduo'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos soluções criativas para problemas sociais'
    },
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Prestamos contas de todas as nossas ações'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
            Nossos Pilares
          </h2>
          <p className="text-lg text-corporate-light max-w-2xl mx-auto">
            Conheça os valores e princípios que guiam nossas ações e projetos
          </p>
        </div>

        {/* Main Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card 
                key={index} 
                hover 
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`${value.color}`} size={32} />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-corporate-light leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Principles */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-corporate-dark text-center mb-8">
            Nossos Princípios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-sage-600" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-corporate-dark mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-corporate-light text-sm">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
