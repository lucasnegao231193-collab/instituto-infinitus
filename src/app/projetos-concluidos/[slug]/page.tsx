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

const projectsData: Record<string, ProjectData> = {
  "escola-de-moda": {
    title: "Escola de Moda",
    description: "Um projeto que costurou sonhos e autoestima, ensinando técnicas de corte e costura para mulheres do Guarujá.",
    fullDescription: "A Escola de Moda foi um projeto transformador que capacitou mulheres da comunidade do Guarujá em técnicas profissionais de corte, costura e modelagem. Mais do que ensinar uma profissão, o projeto promoveu autoestima, autonomia financeira e geração de renda. As alunas aprenderam desde o básico até técnicas avançadas, criando suas próprias peças e descobrindo talentos escondidos. Muitas saíram do curso com suas próprias confecções, transformando hobby em negócio e sonhos em realidade.",
    cover: "/projetos-concluidos/escola-de-moda/escola-de-moda_001.jpg",
    images: [
      "/projetos-concluidos/escola-de-moda/escola-de-moda_001.jpg",
      "/projetos-concluidos/escola-de-moda/escola-de-moda_002.jpg",
      "/projetos-concluidos/escola-de-moda/escola-de-moda_003.jpg",
      "/projetos-concluidos/escola-de-moda/escola-de-moda_004.jpg",
      "/projetos-concluidos/escola-de-moda/escola-de-moda_005.jpg",
      "/projetos-concluidos/escola-de-moda/escola-de-moda_006.jpg",
    ]
  },
  "culinaria-idosos": {
    title: "Culinária com a População Idosa",
    description: "Momentos de afeto e sabor, onde a terceira idade compartilhou receitas e histórias em uma troca cheia de carinho.",
    fullDescription: "O projeto Culinária com a População Idosa criou um espaço acolhedor onde a terceira idade pôde compartilhar receitas tradicionais, histórias de vida e muito carinho. Mais do que cozinhar, o projeto promoveu integração social, valorização da sabedoria dos mais velhos e combate à solidão. Cada encontro foi recheado de sabores, risos e afeto, fortalecendo laços comunitários e resgatando a importância do convívio intergeracional.",
    cover: "/projetos-concluidos/culinaria-idosos/culinaria-idosos_001.jpg",
    images: [
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_001.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_002.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_003.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_004.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_005.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_006.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_007.jpg",
      "/projetos-concluidos/culinaria-idosos/culinaria-idosos_008.jpg",
    ]
  },
  "meio-ambiente": {
    title: "Meio Ambiente, Hortas e Resíduos Sólidos",
    description: "Educação ambiental em ação: hortas, reciclagem e consciência ecológica para um Guarujá mais verde.",
    fullDescription: "Este projeto trouxe educação ambiental para a prática com a criação de hortas comunitárias, oficinas de reciclagem e conscientização sobre gestão de resíduos sólidos. Crianças, jovens e adultos aprenderam sobre sustentabilidade, cultivo de alimentos orgânicos e a importância de cuidar do meio ambiente. As hortas se tornaram espaços de aprendizado, integração e fonte de alimentos saudáveis para a comunidade, enquanto as ações de reciclagem ajudaram a criar uma consciência coletiva sobre o consumo responsável.",
    cover: "/projetos-concluidos/meio-ambiente/meio-ambiente_001.jpg",
    images: [
      "/projetos-concluidos/meio-ambiente/meio-ambiente_001.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_002.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_003.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_004.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_005.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_006.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_007.jpg",
      "/projetos-concluidos/meio-ambiente/meio-ambiente_008.jpg",
    ]
  },
  "dia-do-idoso": {
    title: "Dia Internacional do Idoso",
    description: "Uma celebração cheia de sorrisos, música e reconhecimento à sabedoria e força da melhor idade.",
    fullDescription: "A celebração do Dia Internacional do Idoso foi um momento especial de reconhecimento, alegria e homenagem à terceira idade. O evento contou com apresentações musicais, atividades recreativas, homenagens emocionantes e muita confraternização. Foi um dia dedicado a valorizar a sabedoria, experiência e contribuição dos nossos idosos para a sociedade, promovendo respeito, dignidade e inclusão. Sorrisos, abraços e lágrimas de emoção marcaram essa celebração inesquecível.",
    cover: "/projetos-concluidos/dia-do-idoso/dia-do-idoso_001.jpg",
    images: [
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_001.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_002.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_003.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_004.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_005.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_006.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_007.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_008.jpg",
      "/projetos-concluidos/dia-do-idoso/dia-do-idoso_009.jpg",
    ]
  },
  "cmpi-compede": {
    title: "CMPI / COMPEDE",
    description: "Ações conjuntas pela inclusão e acessibilidade, fortalecendo os conselhos e a voz da comunidade.",
    fullDescription: "As ações do CMPI (Conselho Municipal da Pessoa Idosa) e COMPEDE (Conselho Municipal da Pessoa com Deficiência) foram fundamentais para fortalecer a voz da comunidade e promover inclusão e acessibilidade no Guarujá. O Instituto Infinitus participou ativamente de reuniões, eventos e articulações políticas para garantir direitos, políticas públicas e espaços mais acessíveis para idosos e pessoas com deficiência. Essas ações reforçam nosso compromisso com a cidadania plena e a justiça social.",
    cover: "/projetos-concluidos/cmpi-compede/cmpi-compede_001.jpg",
    images: [
      "/projetos-concluidos/cmpi-compede/cmpi-compede_001.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_002.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_003.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_004.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_005.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_006.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_007.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_008.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_009.jpg",
      "/projetos-concluidos/cmpi-compede/cmpi-compede_010.jpg",
    ]
  }
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
