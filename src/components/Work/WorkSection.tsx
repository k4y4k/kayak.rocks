import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Work/Title'
import DummyProject from '@/components/Work/DummyProject'

const Outer = styled.section`
  ${tw`pt-64 justify-center align-middle text-center`}
  min-height: 100vh;
`

const Inner = styled.div`
  ${tw`w-full self-center`}
`

const WorkContainer: React.FC = () => (
  <Outer id='work'>
    <Inner>
      <Title />
      {[1, 2, 3].map((project, i) => (
        <DummyProject key={project} crisscross={i % 2 === 0} />
      ))}
    </Inner>
  </Outer>
)

export default WorkContainer
