import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Navbar/NavbarTitle'
import { RiLinkedinLine, RiGithubLine, RiTwitterLine } from 'react-icons/ri'

interface NavbarProps {
  className?: string
}

const Left = styled.div`
  ${tw`flex-grow`}
`

const Right = styled.div`
  ${tw`list-none`}

  ul {
    ${tw`list-none flex py-2`}

    li {
      ${tw`mx-1 flex align-middle`}
    }
  }
`

const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <nav className={className}>
    <Left>
      <Title />
    </Left>
    <Right>
      <ul>
        <li>Work</li>
        <li>About</li>

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
          <a href='https://github.com/k4y4k'>
            <RiGithubLine size={20} />
          </a>
        </li>
      </ul>
    </Right>
  </nav>
)

const StyledNavbar = styled(Navbar)`
  ${tw`bg-hotpink-200 text-hotpink-800 flex px-2 sticky top-0`}
`

export default StyledNavbar
