import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
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
  title: 'Instituto Infinitus – Projetos sociais no Guarujá',
  description: 'Apoie iniciativas locais em educação, esporte e cidadania no Guarujá. Doe ou torne-se voluntário no Instituto Infinitus.',
  keywords: ['instituto infinitus', 'ong guarujá', 'projetos sociais', 'educação', 'voluntariado', 'doação', 'guarujá'],
  authors: [{ name: 'Instituto Infinitus' }],
  creator: 'Instituto Infinitus',
  publisher: 'Instituto Infinitus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://institutoinfinitusgja.com'),
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/',
  },
  openGraph: {
    title: 'Instituto Infinitus – Projetos sociais no Guarujá',
    description: 'Apoie iniciativas locais em educação, esporte e cidadania. Doe ou torne-se voluntário.',
    url: 'https://institutoinfinitusgja.com',
    siteName: 'Instituto Infinitus',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Instituto Infinitus',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Infinitus – Projetos sociais no Guarujá',
    description: 'Apoie iniciativas locais em educação, esporte e cidadania. Doe ou torne-se voluntário.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
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
      <head>
        <link rel="canonical" href="https://institutoinfinitusgja.com/" />
      </head>
      <body className="antialiased">
        <AuthProvider>
          {children}
          <WhatsAppFloat />
        </AuthProvider>
      </body>
    </html>
  )
}
