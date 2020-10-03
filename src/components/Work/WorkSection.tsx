import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Work/Title'
import DummyProject from '@/components/Work/DummyProject'

const Outer = styled.section`
  ${tw`h-screen bg-chocolate-400 flex flex-col justify-center align-middle text-center`}
`

const Inner = styled.div`
  max-width: 1200px;
  ${tw`w-full self-center`}
`

const ProjectContainer = styled.div`
  ${tw`bg-chocolate-500 flex justify-center`}
`

const WorkContainer: React.FC = () => (
  <Outer>
    <Inner>
      <Title />
      <ProjectContainer>
        {[1, 2, 3].map(el => (
          <DummyProject key={el} />
        ))}
      </ProjectContainer>
    </Inner>
  </Outer>
)

export default WorkContainer
