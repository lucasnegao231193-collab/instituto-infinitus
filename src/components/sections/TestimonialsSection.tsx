'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Quote, Star } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Mãe de Participante',
      avatar: 'MS',
      content: 'O Instituto Infinitus mudou a vida da minha filha. Ela encontrou propósito e hoje está na universidade graças aos projetos educacionais.',
      rating: 5,
      project: 'Educação para Todos'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Voluntário',
      avatar: 'JS',
      content: 'Fazer parte desta família é uma experiência transformadora. Ver o impacto real na vida das pessoas me motiva todos os dias.',
      rating: 5,
      project: 'Voluntariado'
    },
    {
      id: 3,
      name: 'Ana Paula Costa',
      role: 'Beneficiária',
      avatar: 'AC',
      content: 'Através dos cursos de capacitação, consegui meu primeiro emprego. Hoje tenho uma carreira e posso sustentar minha família.',
      rating: 5,
      project: 'Capacitação Profissional'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
            Histórias que Inspiram
          </h2>
          <p className="text-lg text-corporate-light max-w-2xl mx-auto">
            Veja o que dizem as pessoas que fazem parte da nossa jornada de transformação social
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              hover
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-sage-200">
                <Quote size={40} />
              </div>

              <CardContent className="relative z-10">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-corporate-dark mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-corporate-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-corporate-light">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-sage-600 mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-sage-600 mb-2">98%</div>
            <div className="text-sm text-corporate-light">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sage-600 mb-2">500+</div>
            <div className="text-sm text-corporate-light">Depoimentos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sage-600 mb-2">4.9/5</div>
            <div className="text-sm text-corporate-light">Avaliação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sage-600 mb-2">100%</div>
            <div className="text-sm text-corporate-light">Transparência</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
