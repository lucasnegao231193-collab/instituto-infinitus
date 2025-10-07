'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react'

const CTASection: React.FC = () => {
  const actions = [
    {
      icon: Heart,
      title: 'Faça uma Doação',
      description: 'Contribua financeiramente para nossos projetos',
      buttonText: 'Doar Agora',
      color: 'accent-red'
    },
    {
      icon: Users,
      title: 'Seja Voluntário',
      description: 'Dedique seu tempo e talento à causa',
      buttonText: 'Quero Participar',
      color: 'accent-green'
    },
    {
      icon: Calendar,
      title: 'Participe de Eventos',
      description: 'Junte-se às nossas atividades e eventos',
      buttonText: 'Ver Eventos',
      color: 'accent-orange'
    }
  ]

  return (
    <section className="section-padding gradient-sage">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Faça Parte dessa Transformação
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Existem diversas formas de contribuir com nossa causa. 
            Escolha a que mais combina com você e junte-se a nós!
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-${action.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`text-${action.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-corporate-dark mb-3">
                  {action.title}
                </h3>
                <p className="text-corporate-light mb-6">
                  {action.description}
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  rightIcon={<ArrowRight size={16} />}
                >
                  {action.buttonText}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/90 mb-4">
            Empresas e organizações também podem ser parceiras!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Saiba Mais sobre Parcerias
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
