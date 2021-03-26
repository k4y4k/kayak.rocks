/* eslint-disable sort-imports */
/* they ARE sorted, smh */

import tw, { styled } from 'twin.macro'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import Title from '@/components/Navbar/NavbarTitle'

interface NavbarProps {
  className?: string
}

const Left = styled.div`
  ${tw`flex flex-grow`}
`

const Right = styled.div`
  ${tw`list-none`}

  ul {
    ${tw`flex list-none`}

    li {
      ${tw`flex px-2 py-1 mx-1 uppercase align-middle border border-transparent rounded-lg hover:bg-black hover:border-brand hover:text-mediumpurple-500`}

      a svg {
        ${tw`align-middle `}
        margin-top: 0.125rem
      }
    }
  }
`

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "jpg" }, name: { eq: "hero" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200, cropFocus: SOUTH, rotate: 180) {
            src
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag='nav'
      className={className}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor='#222'
      fadeIn
      // position-relating styles set here rather than tw
      style={{ position: 'sticky', top: 0 }}
    >
      <Left>
        <Title />
      </Left>
      <Right>
        <ul>
          <li>
            <Link to='#work'>Projects</Link>
          </li>
          <li>
            <Link to='#about'>About</Link>
          </li>

          <li>
            <a href='https://github.com/k4y4k'>
              <RiGithubLine size={20} />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/mynameis_kayak'>
              <RiTwitterLine size={20} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/k4y4k/'>
              <RiLinkedinLine size={20} />
            </a>
          </li>
        </ul>
      </Right>
    </BackgroundImage>
  )
}

const StyledNavbar = styled(Navbar)`
  ${tw`z-40 flex p-1 text-white shadow`}
`

export default StyledNavbar
