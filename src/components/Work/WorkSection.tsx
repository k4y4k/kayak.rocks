import React from 'react'
import tw, { styled } from 'twin.macro'
import ProjectListing from '@/components/Work/ProjectListing'
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
      projects: allFile(filter: { extension: { eq: "md" } }) {
        edges {
          node {
            id
            name
            childMarkdownRemark {
              frontmatter {
                title
                date
                demo
                tags
                goToButtonLabel
              }
              excerpt(format: MARKDOWN)
            }
          }
        }
      }
    }
  `)

  return (
    <Outer>
      <Anchor id='work' />
      <Inner>
        {data.projects.edges.map((project, i) => (
          <ProjectListing
            crisscross={i % 2 === 0}
            key={project.id}
            title={project.node.childMarkdownRemark.frontmatter.title}
            excerpt={project.node.childMarkdownRemark.excerpt}
            demo={project.node.childMarkdownRemark.frontmatter.demo || null}
            github={project.node.childMarkdownRemark.frontmatter.github || null}
            tags={project.node.childMarkdownRemark.frontmatter.tags}
            goToButtonLabel={
              project.node.childMarkdownRemark.frontmatter.goToButtonLabel
            }
          />
        ))}
      </Inner>
    </Outer>
  )
}

export default WorkContainer
