'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAuthContext } from '@/contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { signIn, resetPassword } = useAuthContext()
  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    lembrarMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const message = searchParams.get('message')
    if (message) {
      setSuccessMessage(message)
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    
    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      const result = await signIn({
        email: formData.email,
        password: formData.senha
      })

      if (result.success) {
        router.push('/dashboard')
      } else {
        setErrors({ geral: result.error || 'Erro no login' })
      }
    } catch (error) {
      console.error('Erro no login:', error)
      setErrors({ geral: 'Erro inesperado. Tente novamente.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setErrors({ email: 'Digite seu e-mail para recuperar a senha' })
      return
    }

    try {
      const result = await resetPassword(formData.email)
      if (result.success) {
        alert('Link de recuperação enviado para seu e-mail!')
      } else {
        setErrors({ geral: result.error || 'Erro ao enviar e-mail de recuperação' })
      }
    } catch (error) {
      setErrors({ geral: 'Erro inesperado. Tente novamente.' })
    }
  }

  const loginSocial = (provider: string) => {
    // Aqui seria implementado login social
    console.log(`Login com ${provider}`)
    alert(`Login com ${provider} em desenvolvimento`)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fazer Login
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Acesse sua conta e continue fazendo a diferença
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Login */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-corporate-dark">
                  Bem-vindo de volta!
                </CardTitle>
                <p className="text-corporate-light mt-2">
                  Entre com suas credenciais para acessar sua conta
                </p>
              </CardHeader>

              <CardContent>
                {/* Mensagem de Sucesso */}
                {successMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-green-700 text-sm">{successMessage}</span>
                  </div>
                )}

                {/* Erro Geral */}
                {errors.geral && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="text-red-500 mr-3" size={20} />
                    <span className="text-red-700 text-sm">{errors.geral}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    error={errors.email}
                    leftIcon={<Mail size={18} />}
                    required
                  />

                  <div className="relative">
                    <Input
                      label="Senha"
                      name="senha"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.senha}
                      onChange={handleInputChange}
                      placeholder="Sua senha"
                      error={errors.senha}
                      leftIcon={<Lock size={18} />}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Opções */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="lembrarMe"
                        checked={formData.lembrarMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                      />
                      <span className="ml-2 text-sm text-corporate-dark">Lembrar-me</span>
                    </label>

                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-sage-600 hover:underline"
                    >
                      Esqueci minha senha
                    </button>
                  </div>

                  {/* Botão de Login */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    rightIcon={!isLoading ? <ArrowRight size={20} /> : undefined}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>
                </form>

                {/* Divisor */}
                <div className="my-6 flex items-center">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-sm text-corporate-light">ou</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Login Social */}
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => loginSocial('Google')}
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        G
                      </div>
                      Continuar com Google
                    </div>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => loginSocial('Facebook')}
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 mr-3 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        f
                      </div>
                      Continuar com Facebook
                    </div>
                  </Button>
                </div>

                {/* Link para Cadastro */}
                <div className="mt-6 text-center">
                  <p className="text-corporate-light">
                    Ainda não tem uma conta?{' '}
                    <Link href="/auth/cadastro" className="text-sage-600 hover:underline font-medium">
                      Cadastre-se gratuitamente
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios de ter uma conta */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-corporate-dark mb-8">
              Por que ter uma conta no Instituto Infinitus?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-sage-600" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Acompanhe seu Impacto</h3>
                <p className="text-sm text-corporate-light">
                  Veja em tempo real como suas contribuições estão transformando vidas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-accent-green" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Receba Atualizações</h3>
                <p className="text-sm text-corporate-light">
                  Seja o primeiro a saber sobre novos projetos e oportunidades
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Área Exclusiva</h3>
                <p className="text-sm text-corporate-light">
                  Acesso a conteúdos exclusivos e ferramentas personalizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA para Cadastro */}
      <section className="py-16 gradient-sage">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Primeira vez aqui?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Crie sua conta gratuitamente e comece a fazer parte da nossa 
            comunidade de transformação social hoje mesmo.
          </p>
          <Link href="/auth/cadastro">
            <Button variant="primary" className="bg-white text-sage-600 hover:bg-gray-50">
              Criar Conta Gratuita
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
