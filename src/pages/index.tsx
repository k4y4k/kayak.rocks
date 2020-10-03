import React from 'react'
import { PageProps } from 'gatsby'

import Hero from '@/components/Hero/HeroContainer'
import Work from '@/components/Work/WorkSection'

const Home: React.FC<PageProps> = () => (
  <main>
    <Hero />
    <Work />
  </main>
)

export default Home
