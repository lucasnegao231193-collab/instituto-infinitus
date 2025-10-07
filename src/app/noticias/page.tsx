import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'

export default function NoticiasPage() {
  const noticias = [
    {
      id: 1,
      titulo: 'Instituto Infinitus inaugura novo centro de capacitação em São Paulo',
      resumo: 'Nova unidade oferecerá cursos profissionalizantes gratuitos para jovens em situação de vulnerabilidade social.',
      conteudo: 'O Instituto Infinitus inaugurou nesta semana seu mais novo centro de capacitação profissional...',
      autor: 'Juliana Lima',
      data: '2025-10-05',
      categoria: 'Institucional',
      destaque: true,
      imagem: '/news/centro-capacitacao.jpg',
      tags: ['capacitação', 'jovens', 'são paulo']
    },
    {
      id: 2,
      titulo: 'Projeto Educação para Todos alcança marca de 500 beneficiários',
      resumo: 'Programa de reforço escolar celebra importante marco com resultados expressivos na melhoria do desempenho acadêmico.',
      conteudo: 'O projeto Educação para Todos, uma das principais iniciativas do Instituto Infinitus...',
      autor: 'Carlos Santos',
      data: '2025-10-03',
      categoria: 'Projetos',
      destaque: false,
      imagem: '/news/educacao-500.jpg',
      tags: ['educação', 'crianças', 'resultados']
    },
    {
      id: 3,
      titulo: 'Parceria com empresa local gera 50 novas vagas de emprego',
      resumo: 'Acordo firmado com a TechCorp oferece oportunidades de trabalho para formandos dos cursos de capacitação.',
      conteudo: 'Uma nova parceria estratégica entre o Instituto Infinitus e a empresa TechCorp...',
      autor: 'Ana Oliveira',
      data: '2025-09-28',
      categoria: 'Parcerias',
      destaque: false,
      imagem: '/news/parceria-techcorp.jpg',
      tags: ['parceria', 'emprego', 'capacitação']
    },
    {
      id: 4,
      titulo: 'Festival de Arte Comunitária reúne mais de 1000 pessoas',
      resumo: 'Evento cultural promovido pelo instituto celebra talentos locais e arrecada fundos para novos projetos.',
      conteudo: 'O Festival de Arte Comunitária, realizado no último fim de semana...',
      autor: 'Maria Silva',
      data: '2025-09-25',
      categoria: 'Eventos',
      destaque: false,
      imagem: '/news/festival-arte.jpg',
      tags: ['cultura', 'arte', 'comunidade']
    },
    {
      id: 5,
      titulo: 'Instituto recebe prêmio de Responsabilidade Social 2025',
      resumo: 'Reconhecimento destaca o impacto positivo das ações do instituto na transformação de comunidades.',
      conteudo: 'O Instituto Infinitus foi contemplado com o prestigioso Prêmio de Responsabilidade Social 2025...',
      autor: 'Roberto Souza',
      data: '2025-09-20',
      categoria: 'Reconhecimento',
      destaque: true,
      imagem: '/news/premio-2025.jpg',
      tags: ['prêmio', 'reconhecimento', 'responsabilidade social']
    },
    {
      id: 6,
      titulo: 'Campanha de doação de livros arrecada mais de 2000 exemplares',
      resumo: 'Ação solidária fortalece biblioteca comunitária e incentiva o hábito da leitura entre crianças e jovens.',
      conteudo: 'A campanha "Livros que Transformam", promovida pelo Instituto Infinitus...',
      autor: 'Juliana Lima',
      data: '2025-09-15',
      categoria: 'Campanhas',
      destaque: false,
      imagem: '/news/doacao-livros.jpg',
      tags: ['livros', 'doação', 'leitura']
    }
  ]

  const categorias = ['Todas', 'Institucional', 'Projetos', 'Parcerias', 'Eventos', 'Reconhecimento', 'Campanhas']

  const noticiaDestaque = noticias.find(noticia => noticia.destaque)
  const outrasNoticias = noticias.filter(noticia => !noticia.destaque)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notícias e Atualizações
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Fique por dentro das últimas novidades, conquistas e atividades 
              do Instituto Infinitus. Acompanhe nosso impacto na transformação social.
            </p>
          </div>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar notícias..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500/50 focus:border-sage-500"
              />
            </div>

            {/* Filtros de Categoria */}
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    categoria === 'Todas'
                      ? 'bg-sage-600 text-white'
                      : 'bg-gray-100 text-corporate-dark hover:bg-sage-100 hover:text-sage-600'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notícia em Destaque */}
      {noticiaDestaque && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
                Destaque
              </span>
              <h2 className="text-2xl font-bold text-corporate-dark">
                Notícia Principal
              </h2>
            </div>

            <Card hover className="overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                {/* Imagem */}
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    {noticiaDestaque.titulo.charAt(0)}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-sage-100 text-sage-600 text-xs font-medium rounded-full">
                      {noticiaDestaque.categoria}
                    </span>
                    <div className="flex items-center text-sm text-corporate-light">
                      <Calendar size={14} className="mr-1" />
                      {new Date(noticiaDestaque.data).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-corporate-dark mb-4">
                    {noticiaDestaque.titulo}
                  </h3>

                  <p className="text-corporate-light mb-6 leading-relaxed">
                    {noticiaDestaque.resumo}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-corporate-light">
                      <User size={14} className="mr-1" />
                      {noticiaDestaque.autor}
                    </div>
                    <Button variant="primary" size="sm" rightIcon={<ArrowRight size={16} />}>
                      Ler Mais
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Grid de Notícias */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Últimas Notícias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outrasNoticias.map((noticia, index) => (
              <Card 
                key={noticia.id}
                hover
                className="overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagem */}
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 -m-6 mb-6 flex items-center justify-center relative">
                  <span className="text-white text-4xl font-bold opacity-20">
                    {noticia.titulo.charAt(0)}
                  </span>
                  
                  {/* Categoria Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-corporate-dark text-xs font-medium rounded-full">
                      {noticia.categoria}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-sm text-corporate-light">
                      <Calendar size={14} className="mr-1" />
                      {new Date(noticia.data).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <User size={14} className="mr-1" />
                      {noticia.autor}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{noticia.titulo}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-corporate-light text-sm mb-4 leading-relaxed">
                    {noticia.resumo}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {noticia.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Ler Notícia
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Receba Nossas Notícias
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e seja o primeiro a saber sobre 
            nossas conquistas, novos projetos e oportunidades de participação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
