import tw, { styled } from 'twin.macro'
import React from 'react'

interface TitleProps {
  className?: string
}

const Monospace = styled.span`
  ${tw`font-black text-mediumpurple-500 text-5xl`}
  font-family: "Inconsolata", monospace;
`

const Title: React.FC<TitleProps> = ({ className }) => (
  <h1 className={className}>
    My name is <Monospace>kayak</Monospace>
    <br /> and I <Monospace>make websites.</Monospace>
    <br /> Simple as that.
  </h1>
)

const StyledTitle = styled(Title)`
  ${tw`text-4xl text-left font-black -mt-2 col-start-2 row-start-2`}
  line-height: 3rem;
`

export default StyledTitle
