'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown, User, LogIn, LogOut, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { useAuthContext } from '@/contexts/AuthContext'

const Header: React.FC = () => {
  const router = useRouter()
  const { user, profile, isAuthenticated, signOut } = useAuthContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '/' },
    { 
      name: 'Sobre', 
      href: '/sobre',
      submenu: [
        { name: 'Nossa História', href: '/sobre/historia' },
        { name: 'Missão e Valores', href: '/sobre/missao' },
        { name: 'Equipe', href: '/sobre/equipe' },
      ]
    },
    { 
      name: 'Projetos', 
      href: '/projetos',
      submenu: [
        { name: 'Projetos Ativos', href: '/projetos/ativos' },
        { name: 'Projetos Concluídos', href: '/projetos/concluidos' },
        { name: 'Como Participar', href: '/projetos/participar' },
      ]
    },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Notícias', href: '/noticias' },
    { 
      name: 'Contato', 
      href: '/contato',
      submenu: [
        { name: 'Fale Conosco', href: '/contato' },
        { name: 'Doe Agora', href: '/doacao' },
        { name: 'Seja Voluntário', href: '/voluntariado' },
      ]
    },
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleLogout = async () => {
    const result = await signOut()
    if (result.success) {
      router.push('/')
    }
  }

  const getInitials = (nome: string) => {
    return nome
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-solo.png"
                alt="Instituto Infinitus"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-corporate-dark">
                  Instituto
                </span>
                <span className="text-xl font-bold text-sage-600 ml-1">
                  Infinitus
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link flex items-center space-x-1",
                      isActiveLink(item.href) && "text-sage-600"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-corporate-dark hover:bg-sage-50 hover:text-sage-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth Buttons / User Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated && profile ? (
                <div className="relative group">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {getInitials(profile.nome)}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-corporate-dark">
                        {profile.nome.split(' ')[0]}
                      </div>
                      <div className="text-xs text-corporate-light">
                        {profile.tipo_usuario}
                      </div>
                    </div>
                    <ChevronDown size={16} className="text-corporate-light" />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                      <div className="py-2">
                        <Link
                          href="/dashboard"
                          className="flex items-center px-4 py-2 text-sm text-corporate-dark hover:bg-sage-50 hover:text-sage-600 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <User size={16} className="mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          href="/perfil"
                          className="flex items-center px-4 py-2 text-sm text-corporate-dark hover:bg-sage-50 hover:text-sage-600 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Settings size={16} className="mr-3" />
                          Meu Perfil
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={() => {
                            setIsUserMenuOpen(false)
                            handleLogout()
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <LogOut size={16} className="mr-3" />
                          Sair
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLoginModalOpen(true)}
                    leftIcon={<LogIn size={16} />}
                  >
                    Entrar
                  </Button>
                  <Link href="/auth/cadastro">
                    <Button
                      variant="primary"
                      size="sm"
                      leftIcon={<User size={16} />}
                    >
                      Cadastrar
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container-custom py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-corporate-dark hover:text-sage-600 transition-colors duration-200",
                        isActiveLink(item.href) && "text-sage-600 font-medium"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm text-corporate-light hover:text-sage-600 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setIsLoginModalOpen(true)
                      setIsMenuOpen(false)
                    }}
                    leftIcon={<LogIn size={16} />}
                  >
                    Entrar
                  </Button>
                  <Link href="/auth/cadastro">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full"
                      leftIcon={<User size={16} />}
                    >
                      Cadastrar
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Acesse sua conta"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-corporate-light">
            Faça login para acessar sua área pessoal e acompanhar seus projetos, 
            ou crie uma conta gratuita para começar a fazer parte da nossa comunidade.
          </p>
          <div className="flex space-x-4">
            <Link href="/auth/login" className="flex-1">
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => setIsLoginModalOpen(false)}
              >
                Fazer Login
              </Button>
            </Link>
            <Link href="/auth/cadastro" className="flex-1">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsLoginModalOpen(false)}
              >
                Criar Conta
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-xs text-corporate-light">
              Ao continuar, você concorda com nossos{' '}
              <Link href="/termos" className="text-sage-600 hover:underline">
                Termos de Uso
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Header
