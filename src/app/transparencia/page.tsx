'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Shield, FileText, Download, MessageSquare } from 'lucide-react'

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transparência
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Prestação de contas e compromisso com a transparência em todas as nossas ações
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Compromisso */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Nosso Compromisso
            </h2>
            <p className="text-lg text-corporate-light max-w-2xl mx-auto">
              O Instituto Infinitus acredita na transparência como pilar fundamental 
              de uma organização social responsável. Todos os recursos doados são 
              aplicados diretamente em nossos projetos sociais no Guarujá.
            </p>
          </div>

          {/* Documentos */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <FileText className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-corporate-dark mb-2">
                  Relatórios Anuais
                </h3>
                <p className="text-corporate-light mb-4">
                  Documentos de prestação de contas, demonstrativos financeiros 
                  e relatórios de atividades realizadas.
                </p>
                <div className="text-sm text-corporate-light italic">
                  Documentos em preparação. Em breve estarão disponíveis para download.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Download className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-corporate-dark mb-2">
                  Plano Anual
                </h3>
                <p className="text-corporate-light mb-4">
                  Planejamento estratégico, metas e objetivos para o desenvolvimento 
                  dos projetos sociais.
                </p>
                <div className="text-sm text-corporate-light italic">
                  Documento em elaboração. Em breve estará disponível para download.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações Institucionais */}
          <Card className="bg-sage-50 border-sage-200 mb-12">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Dados Institucionais
              </h3>
              <div className="space-y-3 text-corporate-dark">
                <div className="flex justify-between border-b border-sage-200 pb-2">
                  <span className="font-medium">Razão Social:</span>
                  <span>Instituto Infinitus</span>
                </div>
                <div className="flex justify-between border-b border-sage-200 pb-2">
                  <span className="font-medium">CNPJ:</span>
                  <span>02.840.466/0001-20</span>
                </div>
                <div className="flex justify-between border-b border-sage-200 pb-2">
                  <span className="font-medium">Endereço:</span>
                  <span className="text-right">
                    Av. Santos Dumont, 3651<br />
                    Sítio Pae Cara, Guarujá - SP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">E-mail:</span>
                  <span>contato@institutoinfinitusgja.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-sage-500 to-sage-600 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-10 h-10 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Solicite Documentos
                  </h3>
                  <p className="mb-4 text-white/90">
                    Para solicitar relatórios, demonstrativos ou outros documentos, 
                    entre em contato conosco pelo WhatsApp ou e-mail.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="primary"
                      className="bg-white text-sage-600 hover:bg-gray-50"
                      onClick={() => window.open('https://wa.me/5513991363128?text=Olá! Gostaria de solicitar documentos de transparência do Instituto Infinitus.', '_blank')}
                    >
                      Falar no WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'mailto:contato@institutoinfinitusgja.com?subject=Solicitação de Documentos de Transparência'}
                    >
                      Enviar E-mail
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
