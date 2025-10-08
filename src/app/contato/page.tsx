import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContatoPage() {
  const contatos = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Santos Dumont, 3651\nSítio Pae Cara (Vicente de Carvalho)\nGuarujá - SP, 11460-002',
      link: 'https://maps.google.com/?q=Av.+Santos+Dumont,+3651,+Guaruja,+SP',
      color: 'text-sage-600'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(13) 99136-3128',
      link: 'https://wa.me/5513991363128',
      color: 'text-accent-green'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@institutoinfinitusgja.com',
      link: 'mailto:contato@institutoinfinitusgja.com',
      color: 'text-accent-orange'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Segunda a Sexta\n9h às 18h',
      color: 'text-blue-600'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Estamos aqui para ouvir você. Entre em contato conosco para 
              esclarecer dúvidas, fazer parcerias ou participar de nossos projetos.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contatos.map((contato, index) => {
              const Icon = contato.icon
              const content = (
                <>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className={contato.color} size={32} />
                    </div>
                    <CardTitle className="text-lg">{contato.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-corporate-light whitespace-pre-line">
                      {contato.info}
                    </p>
                  </CardContent>
                </>
              )

              return contato.link ? (
                <a key={index} href={contato.link} target="_blank" rel="noopener noreferrer">
                  <Card hover className="text-center h-full transition-all duration-300 hover:shadow-xl">
                    {content}
                  </Card>
                </a>
              ) : (
                <Card key={index} hover className="text-center">
                  {content}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-corporate-dark mb-4">
                Envie uma Mensagem
              </h2>
              <p className="text-corporate-light">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
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
                    label="Telefone"
                    placeholder="(11) 99999-9999"
                  />
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Assunto
                    </label>
                    <select className="input-field">
                      <option value="">Selecione um assunto</option>
                      <option value="voluntario">Quero ser voluntário</option>
                      <option value="parceria">Proposta de parceria</option>
                      <option value="doacao">Doação</option>
                      <option value="informacoes">Informações gerais</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-2">
                    Mensagem
                  </label>
                  <textarea
                    className="input-field min-h-[120px] resize-y"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mr-3 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-corporate-light">
                    Concordo com a{' '}
                    <a href="/privacidade" className="text-sage-600 hover:underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                  rightIcon={<Send size={20} />}
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">
              Nossa Localização
            </h2>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.123456789!2d-46.2876543!3d-23.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzE1LjYiUyA0NsKwMTcnMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Instituto Infinitus"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
