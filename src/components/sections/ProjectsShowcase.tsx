'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react'

const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Educação para Todos',
      description: 'Programa de reforço escolar e apoio pedagógico para crianças em situação de vulnerabilidade social.',
      image: '/projects/education.jpg',
      category: 'Educação',
      participants: 120,
      location: 'São Paulo, SP',
      status: 'Ativo',
      impact: '85% de melhoria no desempenho escolar'
    },
    {
      id: 2,
      title: 'Arte e Cultura na Comunidade',
      description: 'Oficinas de arte, música e teatro para jovens, promovendo expressão cultural e desenvolvimento de talentos.',
      image: '/projects/culture.jpg',
      category: 'Cultura',
      participants: 80,
      location: 'Rio de Janeiro, RJ',
      status: 'Ativo',
      impact: '200+ apresentações realizadas'
    },
    {
      id: 3,
      title: 'Capacitação Profissional',
      description: 'Cursos de capacitação e qualificação profissional para inserção no mercado de trabalho.',
      image: '/projects/training.jpg',
      category: 'Capacitação',
      participants: 150,
      location: 'Belo Horizonte, MG',
      status: 'Ativo',
      impact: '70% de empregabilidade'
    }
  ]

  const categories = ['Todos', 'Educação', 'Cultura', 'Capacitação', 'Saúde', 'Meio Ambiente']

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
            Nossos Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-corporate-light max-w-2xl mx-auto">
            Conheça algumas das iniciativas que estão transformando vidas em diversas comunidades
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                category === 'Todos'
                  ? 'bg-sage-600 text-white'
                  : 'bg-white text-corporate-dark border border-gray-200 hover:border-sage-500 hover:text-sage-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              hover 
              className="overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-sage-400 to-sage-600 mb-4 -m-6 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent-green text-white text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sage-600 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-corporate-light text-sm mb-4">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-corporate-light">
                    <Users size={16} className="mr-2" />
                    <span>{project.participants} participantes</span>
                  </div>
                  <div className="flex items-center text-sm text-corporate-light">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="bg-sage-50 rounded-lg p-3">
                  <p className="text-sage-700 text-sm font-medium">
                    📊 {project.impact}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            rightIcon={<ArrowRight size={20} />}
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
