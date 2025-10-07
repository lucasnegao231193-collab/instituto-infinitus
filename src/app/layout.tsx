import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Instituto Infinitus - Transformando Vidas, Construindo Futuros',
  description: 'O Instituto Infinitus é uma organização dedicada à transformação social através de projetos educacionais, culturais e de desenvolvimento comunitário.',
  keywords: ['instituto', 'social', 'educação', 'transformação', 'comunidade', 'voluntariado'],
  authors: [{ name: 'Instituto Infinitus' }],
  creator: 'Instituto Infinitus',
  publisher: 'Instituto Infinitus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://instituto-infinitus.vercel.app'),
  openGraph: {
    title: 'Instituto Infinitus - Transformando Vidas, Construindo Futuros',
    description: 'Organização dedicada à transformação social através de projetos educacionais e desenvolvimento comunitário.',
    url: 'https://instituto-infinitus.vercel.app',
    siteName: 'Instituto Infinitus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Instituto Infinitus',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Infinitus - Transformando Vidas, Construindo Futuros',
    description: 'Organização dedicada à transformação social através de projetos educacionais e desenvolvimento comunitário.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
