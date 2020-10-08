import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Navbar/NavbarTitle'
import {
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
} from 'react-icons/ri'
import { Link, useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

interface NavbarProps {
  className?: string
}

const Left = styled.div`
  ${tw`flex-grow flex`}
`

const Right = styled.div`
  ${tw`list-none`}

  ul {
    ${tw`list-none flex`}

    li {
      ${tw`mx-1 px-2 py-1 flex align-middle hover:bg-black rounded-lg uppercase border border-transparent hover:border-brand hover:text-mediumpurple-500`}

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
            <a href='https://twitter.com/__kayak__'>
              <RiTwitterLine size={20} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/k4y4k/'>
              <RiLinkedinLine size={20} />
            </a>
          </li>

          <li>
            <a href='mailto:kayak@alcamine.com'>
              <RiMailLine size={20} />
            </a>
          </li>
        </ul>
      </Right>
    </BackgroundImage>
  )
}

const StyledNavbar = styled(Navbar)`
  ${tw`text-white flex p-1 shadow z-40`}
`

export default StyledNavbar
