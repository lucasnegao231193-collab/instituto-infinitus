import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doe para o Instituto Infinitus – Guarujá',
  description: 'Faça uma doação via Pix e ajude a transformar vidas no Guarujá. Apoie projetos educacionais, culturais e de desenvolvimento comunitário.',
  keywords: ['doação', 'pix', 'instituto infinitus', 'guarujá', 'ong', 'projetos sociais'],
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/doacao',
  },
  openGraph: {
    title: 'Doe para o Instituto Infinitus – Guarujá',
    description: 'Faça uma doação via Pix e ajude a transformar vidas no Guarujá.',
    url: 'https://institutoinfinitusgja.com/doacao',
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

export default function DoacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
