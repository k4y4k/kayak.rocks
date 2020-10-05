import React from 'react'
import tw, { styled } from 'twin.macro'

interface TitleProps {
  className?: string
}

const Bracket = styled.span`
  ${tw`font-normal text-mediumpurple-900`}
`

const Title: React.FC<TitleProps> = ({ className }) => (
  <h1 className={className}>
    <Bracket>{'<'}</Bracket>
    kayak
    <Bracket>{'/>'}</Bracket>
  </h1>
)

const StyledTitle = styled(Title)`
  ${tw`text-6xl text-brand font-black -mt-2`}
  font-family: "Inconsolata", monospace;
`

export default StyledTitle
