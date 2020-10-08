/* eslint-disable sort-imports */

import About from '@/components/About/AboutSection'
import Hero from '@/components/Hero/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Work from '@/components/Work/WorkSection'
import { PageProps } from 'gatsby'
import SEO from '../seo' // can't @-style import this one

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
