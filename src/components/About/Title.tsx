import React from 'react'
import tw, { styled } from 'twin.macro'

interface TitleProps {
  className?: string
}

const Title: React.FC<TitleProps> = ({ className }) => (
  <h1 className={className}>
    About me, the most important person on this godsforsaken planet
  </h1>
)

const StyledTitle = styled(Title)`
  ${tw`text-2xl mb-2`}
`

export default StyledTitle
