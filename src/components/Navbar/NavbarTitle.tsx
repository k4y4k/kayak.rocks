import React from 'react'
import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'

interface NavbarTitleProps {
  className?: string
}

const Brackets = styled.span`
  ${tw`font-normal text-mediumorchid-900`}
`

const NavbarTitle: React.FC<NavbarTitleProps> = ({ className }) => (
  <Link to='/' className={className}>
    <Brackets>{'<'}</Brackets>
    kayak
    <Brackets>{'/>'}</Brackets>
  </Link>
)

const StyledNavbarTitle = styled(NavbarTitle)`
  ${tw`text-2xl font-black text-brand`}
  font-family: "Inconsolata", monospace;
`

export default StyledNavbarTitle
