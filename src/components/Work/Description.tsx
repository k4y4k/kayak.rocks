import tw, { styled } from 'twin.macro'
import React from 'react'

interface DescriptionProps {
  className?: string
}

const Description: React.FC<DescriptionProps> = ({ className, children }) => (
  <p className={className}>{children}</p>
)

const StyledDescription = styled(Description)`
  ${tw`leading-loose m-4`}
`

export default StyledDescription
