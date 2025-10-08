import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato – Instituto Infinitus – Guarujá',
  description: 'Entre em contato com o Instituto Infinitus. WhatsApp, e-mail e endereço em Guarujá - SP. Estamos prontos para ouvir você.',
  keywords: ['contato', 'endereço', 'whatsapp', 'email', 'instituto infinitus', 'guarujá'],
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/contato',
  },
  openGraph: {
    title: 'Contato – Instituto Infinitus – Guarujá',
    description: 'Entre em contato com o Instituto Infinitus. WhatsApp: (13) 99136-3128',
    url: 'https://institutoinfinitusgja.com/contato',
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
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
