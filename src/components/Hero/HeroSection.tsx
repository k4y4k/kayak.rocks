import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Hero/Title'
import Prologue from '@/components/Hero/Prologue'
import Epilogue from '@/components/Hero/Epilogue'
import Button from '@/components/layout/Button'
import HeroImage from '@/components/Hero/HeroImage'

const Inner = styled.div`
  ${tw`w-full self-center p-2 py-4 border-brand border text-white`}
  max-width: 1200px;
`

const HeroContainer: React.FC = () => (
  <HeroImage>
    <Inner>
      <Prologue />
      <Title />
      <Epilogue />
      <Button>See work</Button>
    </Inner>
  </HeroImage>
)

export default HeroContainer
