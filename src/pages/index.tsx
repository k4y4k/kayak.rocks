import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '@/components/Hero/HeroSection'
import Work from '@/components/Work/WorkSection'
import About from '@/components/About/AboutSection'
import Navbar from '@/components/Navbar/Navbar'
// can't @-style import this one
import SEO from '../seo'

const Home: React.FC<PageProps> = () => (
  <main>
    <SEO title='Home' />
    <Hero />
    <div>
      <Navbar />
      <Work />
      <About />
    </div>
  </main>
)

export default Home
