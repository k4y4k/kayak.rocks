import React from 'react'
import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'

interface NavbarTitleProps {
  className?: string
}

const Brackets = styled.span`
  ${tw`font-normal text-white`}
`

const NavbarTitle: React.FC<NavbarTitleProps> = ({ className }) => (
  <Link to='/' className={className}>
    <Brackets>{'<'}</Brackets>
    kayak
    <Brackets>{'/>'}</Brackets>
  </Link>
)

const StyledNavbarTitle = styled(NavbarTitle)`
  ${tw`text-2xl font-black text-white align-middle justify-center hover:bg-black px-2 rounded-lg hover:border-brand border border-transparent`}
  font-family: "Inconsolata", monospace;
`

export default StyledNavbarTitle
