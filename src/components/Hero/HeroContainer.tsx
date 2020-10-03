import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Hero/Title'
import Prologue from '@/components/Hero/Prologue'
import Epilogue from '@/components/Hero/Epilogue'
import Button from '@/components/layout/Button'

const Outer = styled.section`
  ${tw`flex align-middle justify-center h-screen text-center`}
`

const Inner = styled.div`
  max-width: 1200px;
  ${tw`w-full self-center`}
`

const HeroContainer: React.FC = () => (
  <Outer>
    <Inner>
      <Prologue />
      <Title />
      <Epilogue />
      <br />
      <Button>See work</Button>
    </Inner>
  </Outer>
)

export default HeroContainer
