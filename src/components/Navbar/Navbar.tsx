import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Navbar/NavbarTitle'
import { RiLinkedinLine, RiGithubLine, RiTwitterLine } from 'react-icons/ri'

const Bar = styled.nav`
  ${tw`bg-white text-gray-900 flex px-2 sticky top-0`}
`

const Left = styled.div`
  ${tw`flex-grow`}
`

const Right = styled.div`
  ${tw`list-none`}

  ul {
    ${tw`list-none flex py-2`}

    li {
      ${tw`mx-1 px-1 flex align-middle hover:text-brand`}
    }
  }
`

const Navbar: React.FC = () => (
  <Bar>
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
  </Bar>
)

export default Navbar
