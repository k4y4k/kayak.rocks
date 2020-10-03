import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '@/components/Hero/HeroContainer'
import Work from '@/components/Work/WorkSection'
import About from '@/components/About/AboutSection'
import Navbar from '@/components/Navbar/Navbar'

const Home: React.FC<PageProps> = () => (
  <main>
    <Hero />
    <div>
      <Navbar />
      <Work />
      <About />
    </div>
  </main>
)

export default Home
