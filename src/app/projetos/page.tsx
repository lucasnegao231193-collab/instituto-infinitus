import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Users, MapPin, Calendar, ArrowRight, BookOpen, Palette, Briefcase, Heart, Leaf, Stethoscope } from 'lucide-react'

export default function ProjetosPage() {
  const categorias = [
    { name: 'Todos', count: 25, active: true },
    { name: 'Educação', count: 8, icon: BookOpen },
    { name: 'Cultura', count: 5, icon: Palette },
    { name: 'Capacitação', count: 6, icon: Briefcase },
    { name: 'Assistência Social', count: 4, icon: Heart },
    { name: 'Meio Ambiente', count: 2, icon: Leaf },
  ]

  const projetos = [
    {
      id: 1,
      titulo: 'Educação para Todos',
      descricao: 'Programa de reforço escolar e apoio pedagógico para crianças em situação de vulnerabilidade social.',
      categoria: 'Educação',
      status: 'Ativo',
      participantes: 120,
      local: 'São Paulo, SP',
      dataInicio: '2023-03-15',
      impacto: '85% de melhoria no desempenho escolar',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      titulo: 'Arte e Cultura na Comunidade',
      descricao: 'Oficinas de arte, música e teatro para jovens, promovendo expressão cultural e desenvolvimento de talentos.',
      categoria: 'Cultura',
      status: 'Ativo',
      participantes: 80,
      local: 'Rio de Janeiro, RJ',
      dataInicio: '2023-01-20',
      impacto: '200+ apresentações realizadas',
      cor: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      titulo: 'Capacitação Profissional',
      descricao: 'Cursos de capacitação e qualificação profissional para inserção no mercado de trabalho.',
      categoria: 'Capacitação',
      status: 'Ativo',
      participantes: 150,
      local: 'Belo Horizonte, MG',
      dataInicio: '2023-02-10',
      impacto: '70% de empregabilidade',
      cor: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      titulo: 'Horta Comunitária Sustentável',
      descricao: 'Projeto de agricultura urbana e educação ambiental para comunidades carentes.',
      categoria: 'Meio Ambiente',
      status: 'Ativo',
      participantes: 45,
      local: 'Curitiba, PR',
      dataInicio: '2023-04-05',
      impacto: '500kg de alimentos produzidos/mês',
      cor: 'from-sage-500 to-sage-600'
    },
    {
      id: 5,
      titulo: 'Apoio à Terceira Idade',
      descricao: 'Programa de assistência e atividades para idosos em situação de vulnerabilidade.',
      categoria: 'Assistência Social',
      status: 'Ativo',
      participantes: 60,
      local: 'Salvador, BA',
      dataInicio: '2023-01-15',
      impacto: '95% de satisfação dos participantes',
      cor: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      titulo: 'Alfabetização Digital',
      descricao: 'Curso de informática básica e inclusão digital para jovens e adultos.',
      categoria: 'Educação',
      status: 'Concluído',
      participantes: 200,
      local: 'Recife, PE',
      dataInicio: '2022-08-01',
      impacto: '180 pessoas certificadas',
      cor: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Projetos
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conheça as iniciativas que estão transformando vidas e comunidades 
              em todo o Brasil através da educação, cultura e desenvolvimento social.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">25+</div>
              <div className="text-sm text-corporate-light">Projetos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">500+</div>
              <div className="text-sm text-corporate-light">Beneficiários</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">15+</div>
              <div className="text-sm text-corporate-light">Cidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">100+</div>
              <div className="text-sm text-corporate-light">Voluntários</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria, index) => {
              const Icon = categoria.icon
              return (
                <button
                  key={index}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    categoria.active
                      ? 'bg-sage-600 text-white'
                      : 'bg-white text-corporate-dark border border-gray-200 hover:border-sage-500 hover:text-sage-600'
                  }`}
                >
                  {Icon && <Icon size={16} className="mr-2" />}
                  {categoria.name}
                  <span className="ml-2 text-xs opacity-75">({categoria.count})</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <Card 
                key={projeto.id}
                hover
                className="overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header do Card */}
                <div className={`relative h-48 bg-gradient-to-br ${projeto.cor} -m-6 mb-6`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-20">
                      {projeto.titulo.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      projeto.status === 'Ativo' 
                        ? 'bg-accent-green text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {projeto.status}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-corporate-dark text-xs font-medium rounded-full">
                      {projeto.categoria}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{projeto.titulo}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-corporate-light text-sm mb-4 leading-relaxed">
                    {projeto.descricao}
                  </p>

                  {/* Informações do Projeto */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-corporate-light">
                      <Users size={16} className="mr-2" />
                      <span>{projeto.participantes} participantes</span>
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <MapPin size={16} className="mr-2" />
                      <span>{projeto.local}</span>
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <Calendar size={16} className="mr-2" />
                      <span>Início: {new Date(projeto.dataInicio).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>

                  {/* Impacto */}
                  <div className="bg-sage-50 rounded-lg p-3">
                    <p className="text-sage-700 text-sm font-medium">
                      📊 {projeto.impacto}
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Faça Parte dos Nossos Projetos
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Seja voluntário, faça uma doação ou proponha uma parceria. 
            Juntos podemos fazer ainda mais pela transformação social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Como Participar
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Seja Voluntário
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
