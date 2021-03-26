import { graphql, useStaticQuery } from 'gatsby'
import tw, { styled } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

interface HeroImageProps {
  className?: string
  children: React.ReactNode
}

const HeroImage = ({ className, children }: HeroImageProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "jpg" }, name: { eq: "hero" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id='home'
      Tag='section'
      className={className}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor='#22222'
    >
      {children}
    </BackgroundImage>
  )
}

const StyledHeroImage = styled(HeroImage)`
  ${tw`flex justify-center h-screen text-center align-middle`}
`

export default StyledHeroImage
