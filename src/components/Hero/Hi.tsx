import tw, { styled } from 'twin.macro'
import React from 'react'

interface HiProps {
  className?: string
}

const Hi: React.FC<HiProps> = ({ className }) => (
  <h1 className={className}>Hi!</h1>
)

const StyledHi = styled(Hi)`
  ${tw`px-4`}
  font-size: clamp(4rem, 10vw, 6rem);
`

export default StyledHi
