'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'

interface ProjectData {
  title: string
  description: string
  fullDescription: string
  cover: string
  images: string[]
}

// Gerar array com todas as 130 imagens da Escola de Moda
const generateEscolaDeModaImages = () => {
  const images: string[] = []
  for (let i = 1; i <= 130; i++) {
    const num = i.toString().padStart(3, '0')
    images.push(`/projetos-concluidos/escola-de-moda/escola-de-moda_${num}.jpg`)
  }
  return images
}

const projectsData: Record<string, ProjectData> = {
  "escola-de-moda": {
    title: "Escola de Moda",
    description: "Um projeto que costurou sonhos e autoestima, ensinando técnicas de corte e costura para mulheres do Guarujá.",
    fullDescription: "A Escola de Moda foi um projeto transformador que capacitou mulheres da comunidade do Guarujá em técnicas profissionais de corte, costura e modelagem. Mais do que ensinar uma profissão, o projeto promoveu autoestima, autonomia financeira e geração de renda. As alunas aprenderam desde o básico até técnicas avançadas, criando suas próprias peças e descobrindo talentos escondidos. Muitas saíram do curso com suas próprias confecções, transformando hobby em negócio e sonhos em realidade.",
    cover: "/projetos-concluidos/escola-de-moda/escola-de-moda_109.jpg",
    images: generateEscolaDeModaImages()
  }
  // Outros projetos serão adicionados quando as imagens estiverem disponíveis
}

export default function ProjetoConcluidoPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-corporate-dark mb-4">Projeto não encontrado</h1>
          <Link href="/projetos-concluidos">
            <Button variant="primary">← Voltar para Projetos</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero with Cover Image */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/projetos-concluidos">
              <Button
                variant="outline"
                leftIcon={<ArrowLeft size={20} />}
                className="mb-6"
              >
                Voltar para Projetos
              </Button>
            </Link>

            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-corporate-dark mb-8 text-center">
              Galeria de Fotos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Foto ${index + 1}`}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/projetos-concluidos">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                leftIcon={<ArrowLeft size={20} />}
                size="lg"
              >
                Voltar para Projetos Concluídos
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
