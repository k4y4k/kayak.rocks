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
  ${tw`w-full self-center`}
  max-width: 1200px;
`

const Break = styled.hr`
  ${tw`border m-6 mx-auto border-gray-500`}
  width: 33%
`

const HeroContainer: React.FC = () => (
  <Outer>
    <Inner>
      <Prologue />
      <Title />
      <Epilogue />
      <Break />
      <Button>See work</Button>
    </Inner>
  </Outer>
)

export default HeroContainer
