import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Heart, Users, Calendar, DollarSign, Briefcase, GraduationCap, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react'

export default function ComoParticiparPage() {
  const formasParticipacao = [
    {
      id: 1,
      titulo: 'Seja Voluntário',
      descricao: 'Dedique seu tempo e talento para fazer a diferença na vida de outras pessoas.',
      icone: Heart,
      cor: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      compromisso: 'A partir de 4h/semana',
      areas: ['Educação', 'Cultura', 'Capacitação', 'Assistência Social'],
      requisitos: ['Maior de 16 anos', 'Disponibilidade regular', 'Comprometimento'],
      beneficios: ['Certificado de voluntariado', 'Capacitação gratuita', 'Networking', 'Experiência social']
    },
    {
      id: 2,
      titulo: 'Faça uma Doação',
      descricao: 'Contribua financeiramente para manter e expandir nossos projetos sociais.',
      icone: DollarSign,
      cor: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      compromisso: 'Valor livre',
      areas: ['Doação única', 'Doação mensal', 'Apadrinhamento', 'Campanhas específicas'],
      requisitos: ['Qualquer valor', 'Transparência total', 'Relatórios de impacto'],
      beneficios: ['Certificado de doação', 'Relatórios de impacto', 'Dedução no IR', 'Reconhecimento']
    },
    {
      id: 3,
      titulo: 'Participe de Eventos',
      descricao: 'Compareça aos nossos eventos, workshops e atividades comunitárias.',
      icone: Calendar,
      cor: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      compromisso: 'Conforme agenda',
      areas: ['Workshops', 'Palestras', 'Eventos beneficentes', 'Atividades culturais'],
      requisitos: ['Inscrição prévia', 'Pontualidade', 'Participação ativa'],
      beneficios: ['Aprendizado', 'Networking', 'Certificados', 'Experiências únicas']
    },
    {
      id: 4,
      titulo: 'Parcerias Corporativas',
      descricao: 'Sua empresa pode ser parceira através de patrocínios e colaborações.',
      icone: Briefcase,
      cor: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      compromisso: 'Acordo personalizado',
      areas: ['Patrocínio', 'Voluntariado corporativo', 'Doação de produtos', 'Expertise técnica'],
      requisitos: ['Alinhamento de valores', 'Compromisso social', 'Transparência'],
      beneficios: ['Marketing social', 'Engajamento de funcionários', 'Responsabilidade social', 'Networking']
    },
    {
      id: 5,
      titulo: 'Seja um Educador',
      descricao: 'Compartilhe seus conhecimentos ministrando aulas e oficinas.',
      icone: GraduationCap,
      cor: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      compromisso: '2-4h por semana',
      areas: ['Educação formal', 'Capacitação profissional', 'Oficinas culturais', 'Mentoria'],
      requisitos: ['Formação na área', 'Experiência didática', 'Paciência e empatia'],
      beneficios: ['Experiência docente', 'Impacto direto', 'Desenvolvimento pessoal', 'Certificação']
    },
    {
      id: 6,
      titulo: 'Divulgue Nossa Causa',
      descricao: 'Ajude a espalhar nossa missão através das redes sociais e comunidade.',
      icone: Users,
      cor: 'from-sage-500 to-sage-600',
      bgColor: 'bg-sage-50',
      compromisso: 'Flexível',
      areas: ['Redes sociais', 'Boca a boca', 'Eventos comunitários', 'Mídia local'],
      requisitos: ['Acreditar na causa', 'Rede de contatos', 'Comunicação clara'],
      beneficios: ['Ampliação de rede', 'Reconhecimento', 'Satisfação pessoal', 'Impacto multiplicado']
    }
  ]

  const processoCadastro = [
    {
      passo: 1,
      titulo: 'Preencha o Formulário',
      descricao: 'Complete o formulário com suas informações e áreas de interesse.'
    },
    {
      passo: 2,
      titulo: 'Entrevista Inicial',
      descricao: 'Participação em uma conversa para conhecer melhor seu perfil e motivações.'
    },
    {
      passo: 3,
      titulo: 'Capacitação',
      descricao: 'Treinamento específico sobre nossos projetos e metodologias.'
    },
    {
      passo: 4,
      titulo: 'Início das Atividades',
      descricao: 'Começo da participação nos projetos escolhidos.'
    }
  ]

  const depoimentos = [
    {
      nome: 'Ana Carolina',
      tipo: 'Voluntária há 2 anos',
      depoimento: 'Ser voluntária no Instituto mudou minha perspectiva de vida. Ver o impacto real do meu trabalho é gratificante.',
      avatar: 'AC'
    },
    {
      nome: 'Empresa TechCorp',
      tipo: 'Parceiro corporativo',
      depoimento: 'A parceria com o Instituto fortaleceu nossa cultura organizacional e engajou nossos funcionários.',
      avatar: 'TC'
    },
    {
      nome: 'Roberto Silva',
      tipo: 'Doador mensal',
      depoimento: 'Contribuir mensalmente me dá a certeza de que estou fazendo parte de algo maior e transformador.',
      avatar: 'RS'
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
              Como Participar
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Existem diversas formas de fazer parte da nossa missão de transformação social. 
              Descubra como você pode contribuir e fazer a diferença na vida de muitas pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Formas de Participação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Formas de Participação
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Escolha a forma que mais combina com seu perfil, disponibilidade e objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formasParticipacao.map((forma, index) => {
              const Icon = forma.icone
              return (
                <Card 
                  key={forma.id}
                  hover
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 ${forma.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`text-${forma.cor.split('-')[1]}-600`} size={32} />
                    </div>
                    <CardTitle className="text-center text-xl">{forma.titulo}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-corporate-light text-sm mb-4 text-center leading-relaxed">
                      {forma.descricao}
                    </p>

                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center text-sm">
                          <Clock size={14} className="mr-2 text-sage-600" />
                          <span className="font-medium">Compromisso: {forma.compromisso}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-corporate-dark mb-2">Áreas de Atuação:</h4>
                        <div className="space-y-1">
                          {forma.areas.slice(0, 3).map((area, areaIndex) => (
                            <div key={areaIndex} className="flex items-center text-xs text-corporate-light">
                              <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mr-2" />
                              {area}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-corporate-dark mb-2">Principais Benefícios:</h4>
                        <div className="space-y-1">
                          {forma.beneficios.slice(0, 2).map((beneficio, benIndex) => (
                            <div key={benIndex} className="flex items-center text-xs text-corporate-light">
                              <CheckCircle size={12} className="text-green-500 mr-2" />
                              {beneficio}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      Quero Participar
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Processo de Cadastro */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Um processo simples e transparente para você começar a fazer parte da nossa família
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processoCadastro.map((etapa, index) => (
                <div key={index} className="text-center relative">
                  {/* Linha conectora */}
                  {index < processoCadastro.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-sage-200 -translate-x-1/2" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {etapa.passo}
                    </div>
                    <h3 className="text-lg font-bold text-corporate-dark mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-corporate-light">
                      {etapa.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Interesse */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-corporate-dark mb-4">
                Manifeste seu Interesse
              </h2>
              <p className="text-corporate-light">
                Preencha o formulário abaixo e entraremos em contato para iniciar sua jornada conosco
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nome Completo"
                    placeholder="Seu nome completo"
                    required
                  />
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Telefone/WhatsApp"
                    placeholder="(11) 99999-9999"
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Idade
                    </label>
                    <select className="input-field" required>
                      <option value="">Selecione sua faixa etária</option>
                      <option value="16-20">16-20 anos</option>
                      <option value="21-30">21-30 anos</option>
                      <option value="31-40">31-40 anos</option>
                      <option value="41-50">41-50 anos</option>
                      <option value="51+">Acima de 51 anos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-2">
                    Como deseja participar?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Voluntário', 'Doador', 'Educador', 'Eventos', 'Parceria', 'Divulgação'].map((opcao) => (
                      <label key={opcao} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                        />
                        <span className="text-sm text-corporate-dark">{opcao}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-2">
                    Áreas de Interesse
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Educação', 'Cultura', 'Capacitação', 'Assistência Social', 'Meio Ambiente', 'Gestão'].map((area) => (
                      <label key={area} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                        />
                        <span className="text-sm text-corporate-dark">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-2">
                    Disponibilidade
                  </label>
                  <select className="input-field" required>
                    <option value="">Selecione sua disponibilidade</option>
                    <option value="2-4h">2-4 horas por semana</option>
                    <option value="4-8h">4-8 horas por semana</option>
                    <option value="8-16h">8-16 horas por semana</option>
                    <option value="eventual">Eventual/Eventos</option>
                    <option value="mensal">Contribuição mensal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-2">
                    Conte-nos sobre você
                  </label>
                  <textarea
                    className="input-field min-h-[100px] resize-y"
                    placeholder="Fale sobre suas motivações, experiências e como gostaria de contribuir..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-3 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-corporate-light">
                    Concordo em receber contato do Instituto Infinitus e com os{' '}
                    <a href="/termos" className="text-sage-600 hover:underline">
                      termos de uso
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  rightIcon={<ArrowRight size={20} />}
                >
                  Enviar Manifestação de Interesse
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Quem Participa Recomenda
            </h2>
            <p className="text-corporate-light">
              Veja o que dizem as pessoas que já fazem parte da nossa família
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {depoimento.avatar}
                  </div>
                  <p className="text-corporate-dark italic mb-4 leading-relaxed">
                    &ldquo;{depoimento.depoimento}&rdquo;
                  </p>
                  <div className="text-sm">
                    <div className="font-medium text-corporate-dark">{depoimento.nome}</div>
                    <div className="text-sage-600">{depoimento.tipo}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Fazer a Diferença?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Não importa como você escolha participar, o importante é dar o primeiro passo. 
            Juntos, podemos transformar mais vidas e construir um futuro melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Quero Ser Voluntário
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Fazer uma Doação
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
