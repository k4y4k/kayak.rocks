import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/About/Title'

const Outer = styled.section`
  ${tw`bg-cornflowerblue-700 h-screen text-white flex flex-col justify-center align-middle text-center`}
`

const Inner = styled.div`
  ${tw`bg-cornflowerblue-900`}
`

const AboutSection: React.FC = () => (
  <Outer id='about'>
    <Inner>
      <Title />
      <p>
        my name is kayak and my game is kayak, kayak, it doesn&apos;t sound like
        a name but neither does it sound like a word
      </p>
    </Inner>
  </Outer>
)

export default AboutSection
