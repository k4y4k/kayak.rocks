import React from 'react'
import tw, { styled } from 'twin.macro'
import DummyProject from '@/components/Work/DummyProject'

const Outer = styled.section`
  ${tw`justify-center align-middle text-center`}
  min-height: 100vh;
`

const Inner = styled.div`
  ${tw`w-full self-center`}
`

// compensate for header
const Anchor = styled.div`
  display: block;
  position: relative;
  top: -45px;
  visibility: hidden;
`

const WorkContainer: React.FC = () => (
  <Outer>
    <Anchor id='work' />
    <Inner>
      {[1, 2, 3].map((project, i) => (
        <DummyProject key={project} crisscross={i % 2 === 0} />
      ))}
    </Inner>
  </Outer>
)

export default WorkContainer
