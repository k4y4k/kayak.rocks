import React from 'react'
import tw, { styled } from 'twin.macro'
import Button from '@/components/layout/Button'

const Project = styled.article`
  ${tw`bg-dodgerblue-900 text-white flex`}
`

const ProjectImg = styled.div`
  ${tw`bg-gray-500 flex-grow`}
  width: calc(100vw * 0.6);
  height: calc(100vh * 0.6);
`

const ProjectDetailsContainer = styled.div`
  ${tw`flex flex-col p-4`}
  max-width: 40vw;
`

const ProjectTitle = styled.h1`
  ${tw`uppercase text-2xl font-black m-4`}
  font-family: "Inconsolata", monospace
`

const ProjectDescription = styled.p`
  ${tw`leading-loose m-4`}
`

const Tag = styled.span`
  ${tw`p-1 bg-hotpink-900 text-white m-1 text-sm font-black`}
  font-family: "Inconsolata", monospace;
`

const ButtonTagContainer = styled.div`
  ${tw`flex m-2 align-middle justify-center`}
`

const DummyProject: React.FC = () => (
  <Project>
    <ProjectImg />

    <ProjectDetailsContainer>
      <ProjectTitle>Dummy Project</ProjectTitle>

      <ProjectDescription>
        Aut autem molestiae dicta est qui culpa eos omnis. Cum rerum sunt
        exercitationem. Autem numquam est qui voluptatem a molestias sit et.
        Optio ullam a praesentium eos sed accusantium. Quo cumque eos aut error
        facere perspiciatis voluptas itaque. Voluptatem ex et molestiae aliquam.
      </ProjectDescription>

      <ButtonTagContainer>
        <Button>Read more</Button>
        <Button>Demo</Button>
        <Button>GitHub</Button>
      </ButtonTagContainer>

      <ButtonTagContainer>
        {['Gatsby', 'React', 'TypeScript'].map(tech => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </ButtonTagContainer>
    </ProjectDetailsContainer>
  </Project>
)

export default DummyProject
