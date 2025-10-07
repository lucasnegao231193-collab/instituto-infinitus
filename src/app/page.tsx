import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ValuesSection from '@/components/sections/ValuesSection'
import ProjectsShowcase from '@/components/sections/ProjectsShowcase'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValuesSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
