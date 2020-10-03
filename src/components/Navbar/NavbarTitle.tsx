import React from 'react'
import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'

interface NavbarTitleProps {
  className?: string
}

const NavbarTitle: React.FC<NavbarTitleProps> = ({ className }) => (
  <Link to='/' className={className}>
    kayak
  </Link>
)

const StyledNavbarTitle = styled(NavbarTitle)`
  ${tw`text-2xl`}
`

export default StyledNavbarTitle
