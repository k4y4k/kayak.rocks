/* eslint-disable sort-imports */

import About from '@/components/About/AboutSection'
import Hero from '@/components/Hero/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Work from '@/components/Work/WorkSection'
import SEO from '../seo' // can't @-style import this one

const Home = (): JSX.Element => (
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
