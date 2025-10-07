'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useAuthContext } from '@/contexts/AuthContext'
import { User, Heart, Calendar, DollarSign, Award, TrendingUp, Clock, Users } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const { user, profile, loading, isAuthenticated } = useAuthContext()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-600 mx-auto mb-4"></div>
          <p className="text-corporate-light">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !profile) {
    return null
  }

  // Função para gerar avatar com iniciais
  const getInitials = (nome: string) => {
    return nome
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  // Traduzir tipo de usuário
  const getTipoUsuario = (tipo: string) => {
    const tipos = {
      voluntario: 'Voluntário(a)',
      doador: 'Doador(a)',
      beneficiario: 'Beneficiário(a)',
      parceiro: 'Parceiro'
    }
    return tipos[tipo as keyof typeof tipos] || tipo
  }

  const estatisticas = [
    {
      titulo: 'Horas Voluntárias',
      valor: '124h',
      icone: Clock,
      cor: 'text-sage-600',
      bgColor: 'bg-sage-50'
    },
    {
      titulo: 'Projetos Participando',
      valor: '3',
      icone: Heart,
      cor: 'text-accent-green',
      bgColor: 'bg-green-50'
    },
    {
      titulo: 'Eventos Participados',
      valor: '8',
      icone: Calendar,
      cor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      titulo: 'Impacto Gerado',
      valor: '45',
      icone: Users,
      cor: 'text-accent-orange',
      bgColor: 'bg-orange-50'
    }
  ]

  const projetosAtivos = [
    {
      nome: 'Educação para Todos',
      papel: 'Monitora de Matemática',
      proxima_atividade: '2025-10-10',
      status: 'Ativo'
    },
    {
      nome: 'Arte e Cultura',
      papel: 'Auxiliar de Teatro',
      proxima_atividade: '2025-10-12',
      status: 'Ativo'
    },
    {
      nome: 'Capacitação Digital',
      papel: 'Instrutora',
      proxima_atividade: '2025-10-15',
      status: 'Ativo'
    }
  ]

  const proximosEventos = [
    {
      titulo: 'Workshop de Capacitação',
      data: '2025-10-15',
      hora: '14:00',
      local: 'Sede São Paulo'
    },
    {
      titulo: 'Feira de Artesanato',
      data: '2025-10-22',
      hora: '09:00',
      local: 'Praça da República'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 gradient-sage">
        <div className="container-custom">
          <div className="flex items-center justify-between text-white">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Olá, {profile.nome}! 👋
              </h1>
              <p className="text-lg text-white/90">
                Bem-vindo(a) ao seu painel pessoal
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {getInitials(profile.nome)}
              </div>
              <div className="text-right">
                <div className="font-medium">{getTipoUsuario(profile.tipo_usuario)}</div>
                <div className="text-sm text-white/80">
                  Membro desde {new Date(profile.created_at).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-8 -mt-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {estatisticas.map((stat, index) => {
              const Icon = stat.icone
              return (
                <Card key={index} hover className="text-center">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={stat.cor} size={24} />
                    </div>
                    <div className="text-2xl font-bold text-corporate-dark mb-1">
                      {stat.valor}
                    </div>
                    <div className="text-sm text-corporate-light">
                      {stat.titulo}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Projetos Ativos */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 text-sage-600" size={24} />
                    Meus Projetos Ativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projetosAtivos.map((projeto, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-corporate-dark">{projeto.nome}</h3>
                          <p className="text-sm text-corporate-light">{projeto.papel}</p>
                          <p className="text-xs text-sage-600">
                            Próxima atividade: {new Date(projeto.proxima_atividade).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {projeto.status}
                          </span>
                          <Button variant="ghost" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      Ver Todos os Projetos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Próximos Eventos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-600" size={20} />
                    Próximos Eventos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {proximosEventos.map((evento, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-sm text-corporate-dark">{evento.titulo}</h4>
                        <p className="text-xs text-corporate-light">
                          {new Date(evento.data).toLocaleDateString('pt-BR')} às {evento.hora}
                        </p>
                        <p className="text-xs text-sage-600">{evento.local}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    Ver Todos os Eventos
                  </Button>
                </CardContent>
              </Card>

              {/* Conquistas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 text-yellow-600" size={20} />
                    Conquistas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        🏆
                      </div>
                      <div>
                        <p className="text-sm font-medium text-corporate-dark">Voluntária Dedicada</p>
                        <p className="text-xs text-corporate-light">100+ horas de voluntariado</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        🎯
                      </div>
                      <div>
                        <p className="text-sm font-medium text-corporate-dark">Multiplicadora</p>
                        <p className="text-xs text-corporate-light">Impactou 45 pessoas</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        ⭐
                      </div>
                      <div>
                        <p className="text-sm font-medium text-corporate-dark">Participativa</p>
                        <p className="text-xs text-corporate-light">8 eventos participados</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ações Rápidas */}
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <User className="mr-2" size={16} />
                      Editar Perfil
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Calendar className="mr-2" size={16} />
                      Agendar Atividade
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <TrendingUp className="mr-2" size={16} />
                      Ver Relatórios
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-corporate-dark mb-4">
            Continue Fazendo a Diferença
          </h2>
          <p className="text-corporate-light mb-8 max-w-2xl mx-auto">
            Explore novas oportunidades de voluntariado e amplie seu impacto na comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              Explorar Novos Projetos
            </Button>
            <Button variant="outline">
              Convidar Amigos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
