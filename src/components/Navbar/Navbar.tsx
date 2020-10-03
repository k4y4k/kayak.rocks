import React from 'react'
import tw, { styled } from 'twin.macro'
import Title from '@/components/Navbar/NavbarTitle'

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
      ${tw`mx-1`}
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

        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </Right>
  </nav>
)

const StyledNavbar = styled(Navbar)`
  ${tw`bg-hotpink-200 text-hotpink-800 flex px-2 sticky top-0`}
`

export default StyledNavbar
