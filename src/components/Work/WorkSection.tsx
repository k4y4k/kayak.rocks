import React from 'react'
import tw, { styled } from 'twin.macro'
import DummyProject from '@/components/Work/DummyProject'
import { useStaticQuery, graphql } from 'gatsby'

const Outer = styled.section`
  ${tw`justify-center align-middle text-center`}
  min-height: 50vh;
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

const WorkContainer: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "md" } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  return (
    <Outer>
      <Anchor id='work' />
      <Inner>
        {data.allFile.edges.map((node, i) => (
          <DummyProject crisscross={i % 2 === 0} key={node.id} />
        ))}
      </Inner>
    </Outer>
  )
}

export default WorkContainer
