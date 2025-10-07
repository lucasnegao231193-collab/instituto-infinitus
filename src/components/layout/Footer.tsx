'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    institutional: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Missão e Valores', href: '/sobre/missao' },
      { name: 'Nossa Equipe', href: '/sobre/equipe' },
      { name: 'Transparência', href: '/transparencia' },
      { name: 'Relatórios', href: '/relatorios' },
    ],
    projects: [
      { name: 'Projetos Ativos', href: '/projetos/ativos' },
      { name: 'Como Participar', href: '/projetos/participar' },
      { name: 'Seja Voluntário', href: '/voluntarios' },
      { name: 'Faça uma Doação', href: '/doacoes' },
      { name: 'Parceiros', href: '/parceiros' },
    ],
    resources: [
      { name: 'Eventos', href: '/eventos' },
      { name: 'Notícias', href: '/noticias' },
      { name: 'Blog', href: '/blog' },
      { name: 'Galeria', href: '/galeria' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'LGPD', href: '/lgpd' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  ]

  return (
    <footer className="bg-corporate-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <span className="text-lg font-bold">Instituto</span>
                <span className="text-lg font-bold text-sage-400 ml-1">Infinitus</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Transformando vidas e construindo futuros através da educação, cultura e desenvolvimento comunitário.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@institutoinfinitus.org" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-sage-400 transition-colors">
                <Mail size={16} />
                <span>contato@institutoinfinitus.org</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-sage-400 transition-colors">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5" />
                <span>Rua Exemplo, 123<br />São Paulo - SP, 01234-567</span>
              </div>
            </div>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institutional.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-sage-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projetos e Ações</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-sage-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-sage-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sage-600 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="flex items-center space-x-1">
                <span>&copy; {currentYear} Instituto Infinitus. Todos os direitos reservados.</span>
                <Heart size={14} className="text-accent-red" fill="currentColor" />
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-sage-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
