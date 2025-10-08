import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos Concluídos – Instituto Infinitus – Guarujá',
  description: 'Conheça os projetos sociais já realizados pelo Instituto Infinitus no Guarujá: Escola de Moda, Culinária com Idosos, Meio Ambiente e muito mais.',
  keywords: ['projetos concluídos', 'instituto infinitus', 'guarujá', 'ações sociais', 'projetos sociais'],
  alternates: {
    canonical: 'https://institutoinfinitusgja.com/projetos-concluidos',
  },
  openGraph: {
    title: 'Projetos Concluídos – Instituto Infinitus – Guarujá',
    description: 'Histórias de transformação e impacto social no Guarujá.',
    url: 'https://institutoinfinitusgja.com/projetos-concluidos',
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

export default function ProjetosConcluidosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
