import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '@/components/Hero/HeroContainer'
import Work from '@/components/Work/WorkSection'
import About from '@/components/About/AboutSection'

const Home: React.FC<PageProps> = () => (
  <main>
    <Hero />
    <Work />
    <About />
  </main>
)

export default Home
