import React from 'react'
import tw, { styled } from 'twin.macro'

interface ImageProps {
  className?: string
}

const Image: React.FC<ImageProps> = ({ className }) => (
  <div className={className} />
)

const StyledImage = styled(Image)`
  ${tw`bg-gray-500 flex-grow`}
  width: calc(100vw * 0.6);
`

export default StyledImage
