'use client'

import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-sage opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 fade-in-up">
            <span className="text-white text-sm font-medium">
              ✨ Transformando vidas desde 2015
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up leading-tight">
            Transformando Vidas,
            <br />
            <span className="text-gradient bg-gradient-to-r from-white to-sage-200 bg-clip-text text-transparent">
              Construindo Futuros
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto fade-in-up">
            O Instituto Infinitus promove transformação social através de projetos educacionais, 
            culturais e de desenvolvimento comunitário. Junte-se a nós nessa jornada!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={20} />}
              className="bg-white text-sage-600 hover:bg-gray-50 hover:scale-105"
            >
              Conheça Nossos Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Play size={20} />}
              className="border-white text-white hover:bg-white/10"
            >
              Assista ao Vídeo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Vidas Impactadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/80">Projetos Ativos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-white/80">Voluntários</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/80">Parceiros</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
