'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAuthContext } from '@/contexts/AuthContext'
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Calendar, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function CadastroPage() {
  const router = useRouter()
  const { signUp } = useAuthContext()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cidade: '',
    estado: '',
    senha: '',
    confirmarSenha: '',
    tipoUsuario: 'voluntario',
    aceitaTermos: false,
    aceitaNewsletter: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório'
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido'
    
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório'
    if (!formData.dataNascimento) newErrors.dataNascimento = 'Data de nascimento é obrigatória'
    if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória'
    if (!formData.estado) newErrors.estado = 'Estado é obrigatório'
    
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória'
    else if (formData.senha.length < 8) newErrors.senha = 'Senha deve ter pelo menos 8 caracteres'
    
    if (!formData.confirmarSenha) newErrors.confirmarSenha = 'Confirmação de senha é obrigatória'
    else if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = 'Senhas não coincidem'
    
    if (!formData.aceitaTermos) newErrors.aceitaTermos = 'Você deve aceitar os termos de uso'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      const result = await signUp({
        email: formData.email,
        password: formData.senha,
        nome: formData.nome,
        telefone: formData.telefone,
        dataNascimento: formData.dataNascimento,
        cidade: formData.cidade,
        estado: formData.estado,
        tipoUsuario: formData.tipoUsuario as 'voluntario' | 'doador' | 'beneficiario' | 'parceiro',
        aceitaNewsletter: formData.aceitaNewsletter
      })

      if (result.success) {
        alert('Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta.')
        router.push('/auth/login?message=Cadastro realizado com sucesso')
      } else {
        setErrors({ geral: result.error || 'Erro no cadastro' })
      }
    } catch (error) {
      console.error('Erro no cadastro:', error)
      setErrors({ geral: 'Erro inesperado. Tente novamente.' })
    } finally {
      setIsLoading(false)
    }
  }

  const tiposUsuario = [
    { value: 'voluntario', label: 'Voluntário' },
    { value: 'doador', label: 'Doador' },
    { value: 'beneficiario', label: 'Beneficiário' },
    { value: 'parceiro', label: 'Parceiro/Empresa' }
  ]

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 gradient-sage">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Criar Conta
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Junte-se à nossa comunidade e faça parte da transformação social
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-corporate-dark">
                  Cadastre-se Gratuitamente
                </CardTitle>
                <p className="text-corporate-light mt-2">
                  Preencha os dados abaixo para criar sua conta
                </p>
              </CardHeader>

              <CardContent>
                {/* Erro Geral */}
                {errors.geral && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="text-red-500 mr-3" size={20} />
                    <span className="text-red-700 text-sm">{errors.geral}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div>
                    <h3 className="text-lg font-semibold text-corporate-dark mb-4 flex items-center">
                      <User className="mr-2" size={20} />
                      Informações Pessoais
                    </h3>
                    
                    <div className="space-y-4">
                      <Input
                        label="Nome Completo *"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        error={errors.nome}
                        required
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="E-mail *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          error={errors.email}
                          leftIcon={<Mail size={18} />}
                          required
                        />
                        
                        <Input
                          label="Telefone/WhatsApp *"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          error={errors.telefone}
                          leftIcon={<Phone size={18} />}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          label="Data de Nascimento *"
                          name="dataNascimento"
                          type="date"
                          value={formData.dataNascimento}
                          onChange={handleInputChange}
                          error={errors.dataNascimento}
                          leftIcon={<Calendar size={18} />}
                          required
                        />
                        
                        <Input
                          label="Cidade *"
                          name="cidade"
                          value={formData.cidade}
                          onChange={handleInputChange}
                          placeholder="Sua cidade"
                          error={errors.cidade}
                          leftIcon={<MapPin size={18} />}
                          required
                        />
                        
                        <div>
                          <label className="block text-sm font-medium text-corporate-dark mb-2">
                            Estado *
                          </label>
                          <select
                            name="estado"
                            value={formData.estado}
                            onChange={handleInputChange}
                            className={`input-field ${errors.estado ? 'border-red-500' : ''}`}
                            required
                          >
                            <option value="">Selecione</option>
                            {estados.map(estado => (
                              <option key={estado} value={estado}>{estado}</option>
                            ))}
                          </select>
                          {errors.estado && (
                            <p className="text-red-500 text-xs mt-1">{errors.estado}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tipo de Usuário */}
                  <div>
                    <h3 className="text-lg font-semibold text-corporate-dark mb-4">
                      Como deseja participar?
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {tiposUsuario.map(tipo => (
                        <label
                          key={tipo.value}
                          className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.tipoUsuario === tipo.value
                              ? 'border-sage-500 bg-sage-50 text-sage-700'
                              : 'border-gray-200 hover:border-sage-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="tipoUsuario"
                            value={tipo.value}
                            checked={formData.tipoUsuario === tipo.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">{tipo.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Senha */}
                  <div>
                    <h3 className="text-lg font-semibold text-corporate-dark mb-4 flex items-center">
                      <Lock className="mr-2" size={20} />
                      Senha de Acesso
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Input
                          label="Senha *"
                          name="senha"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.senha}
                          onChange={handleInputChange}
                          placeholder="Mínimo 8 caracteres"
                          error={errors.senha}
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
                      
                      <div className="relative">
                        <Input
                          label="Confirmar Senha *"
                          name="confirmarSenha"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmarSenha}
                          onChange={handleInputChange}
                          placeholder="Digite a senha novamente"
                          error={errors.confirmarSenha}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs text-corporate-light">
                      <p>A senha deve conter:</p>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Pelo menos 8 caracteres</li>
                        <li>Letras maiúsculas e minúsculas</li>
                        <li>Pelo menos um número</li>
                      </ul>
                    </div>
                  </div>

                  {/* Termos e Condições */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="aceitaTermos"
                        name="aceitaTermos"
                        checked={formData.aceitaTermos}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                        required
                      />
                      <label htmlFor="aceitaTermos" className="ml-3 text-sm text-corporate-dark">
                        Aceito os{' '}
                        <Link href="/termos" className="text-sage-600 hover:underline">
                          Termos de Uso
                        </Link>
                        {' '}e a{' '}
                        <Link href="/privacidade" className="text-sage-600 hover:underline">
                          Política de Privacidade
                        </Link>
                        {' '}*
                      </label>
                    </div>
                    {errors.aceitaTermos && (
                      <p className="text-red-500 text-xs">{errors.aceitaTermos}</p>
                    )}

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="aceitaNewsletter"
                        name="aceitaNewsletter"
                        checked={formData.aceitaNewsletter}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-sage-600 border-gray-300 rounded focus:ring-sage-500"
                      />
                      <label htmlFor="aceitaNewsletter" className="ml-3 text-sm text-corporate-light">
                        Desejo receber novidades e informações sobre projetos por e-mail
                      </label>
                    </div>
                  </div>

                  {/* Botão de Cadastro */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    rightIcon={!isLoading ? <ArrowRight size={20} /> : undefined}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Criando conta...' : 'Criar Minha Conta'}
                  </Button>
                </form>

                {/* Link para Login */}
                <div className="mt-6 text-center">
                  <p className="text-corporate-light">
                    Já tem uma conta?{' '}
                    <Link href="/auth/login" className="text-sage-600 hover:underline font-medium">
                      Fazer login
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
              Benefícios de ter uma conta
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-sage-600" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Acompanhe seu Impacto</h3>
                <p className="text-sm text-corporate-light">
                  Veja como suas contribuições estão transformando vidas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-accent-green" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Eventos Exclusivos</h3>
                <p className="text-sm text-corporate-light">
                  Acesso prioritário a workshops e eventos especiais
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-corporate-dark mb-2">Perfil Personalizado</h3>
                <p className="text-sm text-corporate-light">
                  Gerencie suas informações e preferências facilmente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
