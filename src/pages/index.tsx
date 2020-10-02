import React from 'react'
import { PageProps } from 'gatsby'

import Title from '@/components/Title'
import Button from '@/components/layout/Button'

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>My name is kayak and this is TypeScript, ooh I&apos;m a big girl now</p>
    <Button>This is a button.</Button>
  </main>
)

export default Home
