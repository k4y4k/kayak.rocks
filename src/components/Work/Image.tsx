/* eslint-disable comma-dangle */

import { graphql, useStaticQuery } from 'gatsby'
import tw, { styled } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

interface ImageProps {
  className?: string
  title: string
}

const convertToKebabCase = name => {
  let res = name

  res = res.replace(/ /gi, '-')
  res = res.toLowerCase()
  return res
}

const Image: React.FC<ImageProps> = ({ className, title }) => {
  const lookingForImageName = convertToKebabCase(title)

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "img" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  let projectImages = [...data.allFile.nodes]

  projectImages = projectImages.filter(
    file => file.name === lookingForImageName
  )

  return (
    <BackgroundImage
      Tag='div'
      fluid={projectImages[0].childImageSharp.fluid}
      className={className}
    />
  )
}

const StyledImage = styled(Image)`
  ${tw`bg-lightslategray-900`}
  min-width: calc(100vw * 0.6);
  grid-area: image;
`

export default StyledImage
