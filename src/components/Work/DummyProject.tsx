import React from 'react'
import tw, { styled } from 'twin.macro'

const Project = styled.article`
  ${tw`bg-dodgerblue-900 text-white p-2 m-2 flex`}
`

const Tag = styled.span`
  ${tw`p-1 bg-hotpink-900 text-white m-1 text-sm font-black`}
  font-family: "Inconsolata", monospace;
`

const ProjectTitle = styled.h1`
  ${tw`uppercase text-2xl font-black`}
  font-family: "Inconsolata", monospace
`

const ProjectImg = styled.div`
  ${tw`bg-gray-500`}
  width: calc(100vw * 0.6);
  height: calc(100vh * 0.6);
`

const ProjectDetailsContainer = styled.div`
  ${tw`flex flex-col p-4`}
`

const DummyProject: React.FC = () => (
  <Project>
    <ProjectImg />

    <ProjectDetailsContainer>
      <ProjectTitle>Dummy Project</ProjectTitle>

      <p>
        Aut autem molestiae dicta est qui culpa eos omnis. Cum rerum sunt
        exercitationem. Autem numquam est qui voluptatem a molestias sit et.
        Optio ullam a praesentium eos sed accusantium. Quo cumque eos aut error
        facere perspiciatis voluptas itaque. Voluptatem ex et molestiae aliquam.
      </p>

      {['Gatsby', 'React', 'TypeScript'].map(tech => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </ProjectDetailsContainer>
  </Project>
)

export default DummyProject
