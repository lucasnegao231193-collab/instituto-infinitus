import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transparência – Instituto Infinitus – Guarujá',
  description: 'Prestação de contas e transparência do Instituto Infinitus. Acesse relatórios financeiros, documentos institucionais e informações sobre nossos projetos no Guarujá.',
  keywords: ['transparência', 'prestação de contas', 'relatórios', 'instituto infinitus', 'guarujá', 'cnpj'],
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/transparencia',
  },
  openGraph: {
    title: 'Transparência – Instituto Infinitus – Guarujá',
    description: 'Prestação de contas e transparência. Acesse relatórios financeiros e documentos institucionais.',
    url: 'https://institutoinfinitusgja.com/transparencia',
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

export default function TransparenciaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
