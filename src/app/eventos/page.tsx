import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react'

export default function EventosPage() {
  const eventos = [
    {
      id: 1,
      titulo: 'Workshop de Capacitação para Voluntários',
      descricao: 'Treinamento completo para novos voluntários interessados em participar dos nossos projetos sociais.',
      data: '2025-10-15',
      hora: '14:00',
      local: 'Sede do Instituto - São Paulo, SP',
      vagas: 30,
      inscritos: 18,
      categoria: 'Capacitação',
      status: 'Inscrições Abertas',
      preco: 'Gratuito',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      titulo: 'Feira de Artesanato Solidário',
      descricao: 'Exposição e venda de produtos artesanais produzidos pelos beneficiários dos nossos projetos.',
      data: '2025-10-22',
      hora: '09:00',
      local: 'Praça da República - São Paulo, SP',
      vagas: 100,
      inscritos: 45,
      categoria: 'Cultural',
      status: 'Inscrições Abertas',
      preco: 'Gratuito',
      cor: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      titulo: 'Jantar Beneficente Anual',
      descricao: 'Evento de arrecadação de fundos para apoiar nossos projetos educacionais e sociais.',
      data: '2025-11-05',
      hora: '19:30',
      local: 'Hotel Copacabana Palace - Rio de Janeiro, RJ',
      vagas: 200,
      inscritos: 150,
      categoria: 'Arrecadação',
      status: 'Últimas Vagas',
      preco: 'R$ 150,00',
      cor: 'from-sage-500 to-sage-600'
    },
    {
      id: 4,
      titulo: 'Mutirão de Limpeza Ambiental',
      descricao: 'Ação voluntária de limpeza e conscientização ambiental em parceria com a comunidade local.',
      data: '2025-10-28',
      hora: '08:00',
      local: 'Parque Ibirapuera - São Paulo, SP',
      vagas: 80,
      inscritos: 32,
      categoria: 'Meio Ambiente',
      status: 'Inscrições Abertas',
      preco: 'Gratuito',
      cor: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      titulo: 'Palestra: Inovação Social',
      descricao: 'Discussão sobre tendências e práticas inovadoras no terceiro setor com especialistas renomados.',
      data: '2025-11-12',
      hora: '16:00',
      local: 'Auditório FIESP - São Paulo, SP',
      vagas: 150,
      inscritos: 89,
      categoria: 'Educacional',
      status: 'Inscrições Abertas',
      preco: 'Gratuito',
      cor: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      titulo: 'Festival de Talentos da Comunidade',
      descricao: 'Apresentações artísticas dos participantes dos nossos projetos culturais e educacionais.',
      data: '2025-12-10',
      hora: '15:00',
      local: 'Teatro Municipal - Belo Horizonte, MG',
      vagas: 300,
      inscritos: 120,
      categoria: 'Cultural',
      status: 'Inscrições Abertas',
      preco: 'Gratuito',
      cor: 'from-pink-500 to-pink-600'
    }
  ]

  const categorias = ['Todos', 'Capacitação', 'Cultural', 'Arrecadação', 'Meio Ambiente', 'Educacional']

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Inscrições Abertas':
        return 'bg-accent-green text-white'
      case 'Últimas Vagas':
        return 'bg-accent-orange text-white'
      case 'Esgotado':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-sage-500 text-white'
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eventos e Atividades
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Participe dos nossos eventos, workshops e atividades. 
              Oportunidades únicas para aprender, contribuir e fazer parte da nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Eventos - Destaque */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">
              Próximos Eventos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventos.slice(0, 3).map((evento, index) => (
              <Card key={evento.id} hover className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="font-bold text-corporate-dark mb-2">{evento.titulo}</h3>
                  <div className="space-y-1 text-sm text-corporate-light">
                    <div className="flex items-center justify-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(evento.data).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock size={14} className="mr-1" />
                      {evento.hora}
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin size={14} className="mr-1" />
                      {evento.local.split(' - ')[1]}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    categoria === 'Todos'
                      ? 'bg-sage-600 text-white'
                      : 'bg-white text-corporate-dark border border-gray-200 hover:border-sage-500 hover:text-sage-600'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
            
            <Button variant="outline" size="sm" leftIcon={<Filter size={16} />}>
              Filtros Avançados
            </Button>
          </div>
        </div>
      </section>

      {/* Lista de Eventos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventos.map((evento, index) => (
              <Card 
                key={evento.id}
                hover
                className="overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header do Card */}
                <div className={`relative h-32 bg-gradient-to-br ${evento.cor} -m-6 mb-6`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold opacity-20">
                      {evento.categoria.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(evento.status)}`}>
                      {evento.status}
                    </span>
                  </div>
                  
                  {/* Categoria Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-corporate-dark text-xs font-medium rounded-full">
                      {evento.categoria}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{evento.titulo}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-corporate-light text-sm mb-4 leading-relaxed">
                    {evento.descricao}
                  </p>

                  {/* Informações do Evento */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-corporate-dark">
                      <Calendar size={16} className="mr-2 text-sage-600" />
                      <span className="font-medium">
                        {new Date(evento.data).toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <Clock size={16} className="mr-2" />
                      <span>{evento.hora}</span>
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <MapPin size={16} className="mr-2" />
                      <span>{evento.local}</span>
                    </div>
                    <div className="flex items-center text-sm text-corporate-light">
                      <Users size={16} className="mr-2" />
                      <span>{evento.inscritos}/{evento.vagas} inscritos</span>
                    </div>
                  </div>

                  {/* Preço e Vagas */}
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <div>
                      <span className="text-sm text-corporate-light">Investimento:</span>
                      <div className="font-bold text-sage-600">{evento.preco}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-corporate-light">Vagas restantes:</span>
                      <div className="font-bold text-corporate-dark">
                        {evento.vagas - evento.inscritos}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    disabled={evento.status === 'Esgotado'}
                  >
                    {evento.status === 'Esgotado' ? 'Esgotado' : 'Inscrever-se'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Detalhes
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
            Não Perca Nossos Eventos
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e seja o primeiro a saber sobre 
            novos eventos, workshops e oportunidades de participação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Cadastrar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
