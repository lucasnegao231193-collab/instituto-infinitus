'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Heart, Users, BookOpen, Trophy, Megaphone, DollarSign } from 'lucide-react'

export default function VoluntariadoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    disponibilidade: '',
    areas: [] as string[],
    mensagem: ''
  })

  const areasDeAtuacao = [
    { id: 'educacao', label: 'Educação', icon: BookOpen },
    { id: 'esportes', label: 'Esportes', icon: Trophy },
    { id: 'eventos', label: 'Eventos', icon: Users },
    { id: 'comunicacao', label: 'Comunicação', icon: Megaphone },
    { id: 'captacao', label: 'Captação de Recursos', icon: DollarSign }
  ]

  const handleAreaChange = (areaId: string) => {
    setFormData(prev => ({
      ...prev,
      areas: prev.areas.includes(areaId)
        ? prev.areas.filter(a => a !== areaId)
        : [...prev.areas, areaId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const areasText = formData.areas
      .map(id => areasDeAtuacao.find(a => a.id === id)?.label)
      .join(', ')

    const emailBody = `
Nome: ${formData.nome}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email}
Disponibilidade: ${formData.disponibilidade}
Áreas de Interesse: ${areasText}

Mensagem:
${formData.mensagem}
    `.trim()

    const mailtoLink = `mailto:contato@institutoinfinitusgja.com?subject=Voluntariado – ${encodeURIComponent(formData.nome)}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink
  }

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5513991363128?text=Olá! Gostaria de ser voluntário(a) no Instituto Infinitus.',
      '_blank'
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Seja Voluntário(a)
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Faça parte da transformação social no Guarujá. Doe seu tempo, 
              conhecimento e talento para impactar vidas positivamente.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-corporate-light max-w-2xl mx-auto">
              Escolha uma ou mais áreas onde você pode contribuir com suas habilidades
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {areasDeAtuacao.map((area) => (
              <Card key={area.id} className="text-center">
                <CardContent className="pt-6">
                  <area.icon className="w-10 h-10 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-bold text-sm text-corporate-dark">
                    {area.label}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-corporate-dark mb-4">
              Inscreva-se como Voluntário
            </h2>
            <p className="text-corporate-light">
              Preencha o formulário abaixo e entraremos em contato
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-corporate-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="input-field"
                    placeholder="Seu nome"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-corporate-dark mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="input-field"
                    placeholder="(13) 99999-9999"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-corporate-dark mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Disponibilidade */}
                <div>
                  <label htmlFor="disponibilidade" className="block text-sm font-medium text-corporate-dark mb-2">
                    Disponibilidade *
                  </label>
                  <select
                    id="disponibilidade"
                    required
                    value={formData.disponibilidade}
                    onChange={(e) => setFormData({ ...formData, disponibilidade: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Selecione...</option>
                    <option value="Segunda a Sexta">Segunda a Sexta</option>
                    <option value="Finais de Semana">Finais de Semana</option>
                    <option value="Horário Flexível">Horário Flexível</option>
                    <option value="Apenas Eventos">Apenas Eventos</option>
                  </select>
                </div>

                {/* Áreas de Interesse */}
                <div>
                  <label className="block text-sm font-medium text-corporate-dark mb-3">
                    Áreas de Interesse *
                  </label>
                  <div className="space-y-2">
                    {areasDeAtuacao.map((area) => (
                      <label key={area.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.areas.includes(area.id)}
                          onChange={() => handleAreaChange(area.id)}
                          className="w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                        />
                        <span className="ml-2 text-corporate-dark">{area.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-corporate-dark mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Conte-nos mais sobre você e como gostaria de contribuir..."
                  />
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="primary" className="flex-1">
                    Enviar Inscrição
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={openWhatsApp}
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
