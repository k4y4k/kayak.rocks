import React from 'react'
import tw, { styled } from 'twin.macro'

const Prologue: React.FC = ({ className }) => (
  <p className={className}>Hi! My name is</p>
)

const StyledPrologue = styled(Prologue)`
  ${tw`text-xl`}
`

export default StyledPrologue
