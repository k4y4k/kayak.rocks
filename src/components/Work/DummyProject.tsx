import React from 'react'
import tw, { styled } from 'twin.macro'

const Project = styled.article`
  max-width: calc(900px / 3);
  ${tw`uppercase border p-2 m-2`}
`

const Tag = styled.span`
  ${tw`p-1 bg-hotpink-900 text-white m-1 text-sm`}
`

const DummyProject: React.FC = () => (
  <Project>
    DummyProject
    <br />
    {['JS', 'React', 'Gatsby'].map(tech => (
      <Tag>{tech}</Tag>
    ))}
  </Project>
)

export default DummyProject
