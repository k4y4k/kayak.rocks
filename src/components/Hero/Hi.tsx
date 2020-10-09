import tw, { styled } from 'twin.macro'
import React from 'react'

interface HiProps {
  className?: string
}

const Hi: React.FC<HiProps> = ({ className }) => (
  <h1 className={className}>Hi!</h1>
)

const StyledHi = styled(Hi)`
  ${tw`self-end inline text-right -mb-4`}
  font-size: clamp(4rem, 10vw, 6rem);

  @media (max-width: 640px) {
    grid-area: 1 / 1 / 2 / 3;
    ${tw`text-center`}
  }
`

export default StyledHi
