import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seja voluntário no Instituto Infinitus – Guarujá',
  description: 'Faça parte da transformação social no Guarujá. Doe seu tempo e talento como voluntário(a) em projetos educacionais, esportivos e culturais.',
  keywords: ['voluntariado', 'voluntário', 'instituto infinitus', 'guarujá', 'ong', 'projetos sociais'],
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/voluntariado',
  },
  openGraph: {
    title: 'Seja voluntário no Instituto Infinitus – Guarujá',
    description: 'Faça parte da transformação social no Guarujá. Doe seu tempo e talento como voluntário(a).',
    url: 'https://institutoinfinitusgja.com/voluntariado',
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

export default function VoluntariadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
