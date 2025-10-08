'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'

interface Project {
  slug: string
  title: string
  description: string
  cover: string
}

const projects: Project[] = [
  {
    slug: "escola-de-moda",
    title: "Escola de Moda",
    description: "Um projeto que costurou sonhos e autoestima, ensinando técnicas de corte e costura para mulheres do Guarujá.",
    cover: "/projetos-concluidos/escola-de-moda/escola-de-moda_001.jpg"
  },
  {
    slug: "culinaria-idosos",
    title: "Culinária com a População Idosa",
    description: "Momentos de afeto e sabor, onde a terceira idade compartilhou receitas e histórias em uma troca cheia de carinho.",
    cover: "/projetos-concluidos/culinaria-idosos/culinaria-idosos_001.jpg"
  },
  {
    slug: "meio-ambiente",
    title: "Meio Ambiente, Hortas e Resíduos Sólidos",
    description: "Educação ambiental em ação: hortas, reciclagem e consciência ecológica para um Guarujá mais verde.",
    cover: "/projetos-concluidos/meio-ambiente/meio-ambiente_001.jpg"
  },
  {
    slug: "dia-do-idoso",
    title: "Dia Internacional do Idoso",
    description: "Uma celebração cheia de sorrisos, música e reconhecimento à sabedoria e força da melhor idade.",
    cover: "/projetos-concluidos/dia-do-idoso/dia-do-idoso_001.jpg"
  },
  {
    slug: "cmpi-compede",
    title: "CMPI / COMPEDE",
    description: "Ações conjuntas pela inclusão e acessibilidade, fortalecendo os conselhos e a voz da comunidade.",
    cover: "/projetos-concluidos/cmpi-compede/cmpi-compede_001.jpg"
  }
]

export default function ProjetosConcluidosPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Projetos Concluídos
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Histórias de transformação e impacto social no Guarujá. 
              Conheça as ações que marcaram nossa trajetória.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/projetos-concluidos/${project.slug}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-corporate-dark mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sage-600 font-medium hover:text-sage-700 transition-colors">
                      Ver Projeto
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
