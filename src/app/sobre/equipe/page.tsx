import React from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Mail, Instagram, Phone, MapPin } from 'lucide-react'

export default function EquipePage() {
  const diretoria = [
    {
      id: 1,
      nome: 'Janio Vieira',
      cargo: 'Presidente',
      bio: 'Diretor comercial da Clinica de Especialidades Médicas Unitá Class Saúde e Relações Publicas.',
      email: 'maria.silva@institutoinfinitus.org',
      phone: '(13) 97411-7251',
      instagram: 'https://instagram.com/mariasilva',
      foto: '/equipe/janio-vieira.png',
      cor: 'from-sage-500 to-sage-600'
    },
    {
      id: 2,
      nome: 'Paulo Rogério Damin',
      cargo: 'Vice-Presidente',
      bio: 'Formado em Administração com ênfase em comércio Exterior pela Universidade UNAERP e formado em Direito pela faculdade Uniesp.',
      email: 'paulodamin@gmail.com',
      phone: '(13) 99773-3434',
      instagram: 'https://instagram.com/joaocosta',
      foto: '/equipe/paulo-damin.png',
      cor: 'from-accent-green to-green-600'
    },
    {
      id: 3,
      nome: 'Lucas Vinicius',
      cargo: 'Secretario Geral',
      bio: 'Empresario, programador, criador de conteudo digital e cursando Inteligência Artificial e Educaçao Fisica pela UNIASSELVI.',
      email: 'lucas.vinicius@institutoinfinitusgja.com',
      phone: '(13) 99136-3128',
      instagram: 'https://instagram.com/thelucas.vinicius',
      foto: '/equipe/lucas-vinicius.png',
      cor: 'from-accent-orange to-orange-600'
    },
    {
      id: 4,
      nome: 'Rosemere Tabarine Damin',
      cargo: 'Assistente Social',
      bio: 'Formada em Serviço Social pela Universidade UNAERP. Cursando Psicologia pela faculdade UNIDON.',
      email: 'rosedamin@gmail.com',
      phone: '(013) 99718-5133.',
      instagram: 'https://instagram.com/carlossantos',
      foto: '/equipe/rosemere-damin.png',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      nome: 'Edirene Ramalho  Cardoso',
      cargo: 'Medica',
      bio: 'Formada em medicina pela universidade de Marília e Residência médica em radiodiagnóstico por imagem pela Santa casa de Santos .',
      email: 'edireneramalho27@icloud.com',
      phone: '(13) 99641-4150',
      instagram: 'https://instagram.com/julianalima',
      foto: '/equipe/edirene-ramalho.png',
      cor: 'from-purple-500 to-purple-600'
    },
    {
      id: 6,
      nome: 'Roberto Alves Souza',
      cargo: 'Diretor Financeiro',
      bio: 'Contador com vasta experiência em gestão financeira e transparência no terceiro setor. CRC ativo, especialista em Controladoria e Auditoria.',
      email: 'roberto.souza@institutoinfinitus.org',
      phone: '(11) 99999-6666',
      instagram: 'https://instagram.com/robertosouza',
      foto: 'RS',
      cor: 'from-sage-600 to-sage-700'
    }
  ]

  const coordenadores = [
    {
      nome: 'Fernanda Costa Silva',
      cargo: 'Coordenadora de Educação',
      local: 'São Paulo, SP',
      foto: 'FC',
      cor: 'from-green-400 to-green-500'
    },
    {
      nome: 'Ricardo Mendes Oliveira',
      cargo: 'Coordenador de Cultura',
      local: 'Rio de Janeiro, RJ',
      foto: 'RM',
      cor: 'from-purple-400 to-purple-500'
    },
    {
      nome: 'Patrícia Santos Lima',
      cargo: 'Coordenadora de Capacitação',
      local: 'Belo Horizonte, MG',
      foto: 'PS',
      cor: 'from-blue-400 to-blue-500'
    },
    {
      nome: 'André Luiz Ferreira',
      cargo: 'Coordenador de Voluntários',
      local: 'Salvador, BA',
      foto: 'AL',
      cor: 'from-orange-400 to-orange-500'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossa Equipe
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conheça os membros da diretoria e coordenadores que lideram o Instituto Infinitus 
              em sua missão de transformação social
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas da Equipe */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">10+</div>
              <div className="text-sm text-corporate-light">Membros da Diretoria</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">50+</div>
              <div className="text-sm text-corporate-light">Colaboradores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">100+</div>
              <div className="text-sm text-corporate-light">Voluntários Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">15+</div>
              <div className="text-sm text-corporate-light">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
              Diretoria
            </span>
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Membros da Diretoria
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Uma equipe dedicada e experiente trabalhando incansavelmente 
              para fazer a diferença na vida das pessoas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diretoria.map((membro, index) => (
              <Card 
                key={membro.id}
                hover
                className="text-center fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  {/* Avatar */}
                  {membro.foto.startsWith('/') ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      <Image
                        src={membro.foto}
                        alt={membro.nome}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-24 h-24 bg-gradient-to-br ${membro.cor} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg`}>
                      {membro.foto}
                    </div>
                  )}

                  {/* Nome e Cargo */}
                  <h3 className="text-xl font-bold text-corporate-dark mb-1">
                    {membro.nome}
                  </h3>
                  <p className="text-sage-600 font-medium mb-4">
                    {membro.cargo}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-corporate-light mb-6 leading-relaxed text-left">
                    {membro.bio}
                  </p>

                  {/* Contatos */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${membro.email}`}
                      className="flex items-center justify-center text-sm text-corporate-light hover:text-sage-600 transition-colors"
                    >
                      <Mail size={16} className="mr-2" />
                      E-mail
                    </a>
                    <a 
                      href={`tel:${membro.phone}`}
                      className="flex items-center justify-center text-sm text-corporate-light hover:text-sage-600 transition-colors"
                    >
                      <Phone size={16} className="mr-2" />
                      {membro.phone}
                    </a>
                    <a 
                      href={membro.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-sm text-corporate-light hover:text-sage-600 transition-colors"
                    >
                      <Instagram size={16} className="mr-2" />
                      Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coordenadores */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
              Coordenação
            </span>
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Coordenadores de Projetos
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Profissionais dedicados que lideram nossos projetos em diferentes regiões do país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordenadores.map((coordenador, index) => (
              <Card 
                key={index}
                hover
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${coordenador.cor} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold`}>
                    {coordenador.foto}
                  </div>
                  <h3 className="font-bold text-corporate-dark mb-1">
                    {coordenador.nome}
                  </h3>
                  <p className="text-sage-600 text-sm font-medium mb-2">
                    {coordenador.cargo}
                  </p>
                  <div className="flex items-center justify-center text-xs text-corporate-light">
                    <MapPin size={12} className="mr-1" />
                    {coordenador.local}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Faça Parte do Nosso Time
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de pessoas comprometidas com a transformação social. 
            Seja voluntário, colaborador ou parceiro e ajude a construir um futuro melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Seja Voluntário
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Trabalhe Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
