import tw, { styled } from 'twin.macro'
import React from 'react'

interface TitleProps {
  className?: string
}

const Small = styled.span`
  ${tw`text-2xl md:text-3xl `}
  font-family: "Inconsolata", monospace;
`

const Title = ({ className }: TitleProps): JSX.Element => (
  <h1 className={className}>
    My name is kayak and I make websites.
    <br />
    <Small>Simple as that.</Small>
  </h1>
)

const StyledTitle = styled(Title)`
  ${tw`font-mono text-3xl md:text-4xl`}
`

export default StyledTitle
