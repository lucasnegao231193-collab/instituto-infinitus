'use client'

import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Heart, Copy, Check, Shield } from 'lucide-react'
import { generatePixPayload, formatPixValue } from '@/lib/pix'
import QRCode from 'qrcode'
import Link from 'next/link'

export default function DoacaoPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState('')
  const [pixPayload, setPixPayload] = useState('')
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const suggestedAmounts = [20, 50, 100]

  useEffect(() => {
    const amount = selectedAmount || parseFloat(customAmount) || 0
    if (amount > 0) {
      const payload = generatePixPayload({
        key: '02.840.466/0001-20',
        name: 'Instituto Infinitus',
        city: 'Guaruja',
        amount
      })
      setPixPayload(payload)

      // Gerar QR Code
      if (canvasRef.current) {
        QRCode.toCanvas(canvasRef.current, payload, {
          width: 280,
          margin: 1,
          color: {
            dark: '#2F723E',
            light: '#FFFFFF'
          }
        })
      }
    }
  }, [selectedAmount, customAmount])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixPayload)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (value: string) => {
    const numValue = value.replace(/\D/g, '')
    setCustomAmount(numValue)
    setSelectedAmount(null)
  }

  const displayAmount = selectedAmount || parseFloat(customAmount) || 0

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Doe para o Instituto Infinitus
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Sua doação transforma vidas no Guarujá através de projetos educacionais, 
              culturais e de desenvolvimento comunitário
            </p>
          </div>
        </div>
      </section>

      {/* Doação Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Seleção de Valor */}
            <div>
              <h2 className="text-2xl font-bold text-corporate-dark mb-6">
                Escolha o valor da sua doação
              </h2>

              {/* Valores Sugeridos */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedAmount === amount
                        ? 'border-sage-500 bg-sage-50'
                        : 'border-gray-200 hover:border-sage-300'
                    }`}
                  >
                    <div className="text-lg font-bold text-corporate-dark">
                      {formatPixValue(amount)}
                    </div>
                  </button>
                ))}
              </div>

              {/* Valor Personalizado */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-corporate-dark mb-2">
                  Outro valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-corporate-light">
                    R$
                  </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    placeholder="0,00"
                    className="input-field pl-12"
                  />
                </div>
              </div>

              {/* Impacto */}
              <Card className="bg-sage-50 border-sage-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-corporate-dark mb-2">
                    💚 Seu impacto
                  </h3>
                  <p className="text-sm text-corporate-light">
                    Com {formatPixValue(displayAmount)}, você ajuda a manter nossos 
                    projetos sociais ativos, apoiando educação, esporte e cultura 
                    para crianças e jovens do Guarujá.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* QR Code Pix */}
            <div>
              <h2 className="text-2xl font-bold text-corporate-dark mb-6">
                Pague com Pix
              </h2>

              {displayAmount > 0 ? (
                <div className="space-y-4">
                  {/* QR Code */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
                    <canvas ref={canvasRef} className="mx-auto" />
                    <p className="text-sm text-corporate-light mt-4">
                      Escaneie o QR Code com o app do seu banco
                    </p>
                  </div>

                  {/* Pix Copia e Cola */}
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Ou copie o código Pix
                    </label>
                    <div className="relative">
                      <textarea
                        value={pixPayload}
                        readOnly
                        rows={3}
                        className="input-field font-mono text-xs pr-24 resize-none"
                      />
                      <Button
                        onClick={handleCopy}
                        variant="primary"
                        size="sm"
                        className="absolute right-2 top-2"
                      >
                        {copied ? (
                          <>
                            <Check size={16} className="mr-1" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy size={16} className="mr-1" />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      window.open(
                        'https://wa.me/5513991363128?text=Olá! Realizei uma doação via Pix para o Instituto Infinitus.',
                        '_blank'
                      )
                    }}
                  >
                    Avisar no WhatsApp
                  </Button>
                </div>
              ) : (
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <Heart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-corporate-light">
                    Selecione um valor para gerar o QR Code Pix
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Transparência */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-corporate-dark mb-2">
                  Transparência e Prestação de Contas
                </h3>
                <p className="text-corporate-light mb-3">
                  O Instituto Infinitus é comprometido com a transparência. 
                  Todos os recursos são aplicados diretamente em nossos projetos sociais.
                </p>
                <Link href="/transparencia" className="text-sage-600 hover:text-sage-700 font-medium">
                  Ver relatórios de transparência →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
