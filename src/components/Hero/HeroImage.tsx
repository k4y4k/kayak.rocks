import { graphql, useStaticQuery } from 'gatsby'
import tw, { styled } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

interface HeroImageProps {
  className?: string
  children: React.ReactNode
  bw?: boolean
}

const HeroImage = ({
  className,
  children,
  bw = false,
}: HeroImageProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      regular: file(extension: { eq: "jpg" }, name: { eq: "hero" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bw: file(extension: { eq: "jpg" }, name: { eq: "hero" }) {
        childImageSharp {
          fluid(
            quality: 90
            grayscale: true
            maxWidth: 1200
            cropFocus: CENTER
          ) {
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
      fluid={
        bw ? data.bw.childImageSharp.fluid : data.regular.childImageSharp.fluid
      }
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
