import React from 'react'
import tw, { styled } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

interface HeroImageProps {
  className?: string
}

const HeroImage: React.FC<HeroImageProps> = ({ className, children }) => {
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
  ${tw`flex align-middle justify-center h-screen text-center`}
`

export default StyledHeroImage
