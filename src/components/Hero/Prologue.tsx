import React from 'react'
import tw, { styled } from 'twin.macro'

interface PrologueProps {
  className?: string
}

const Prologue: React.FC<PrologueProps> = ({ className }) => (
  <p className={className}>Hi! My name is</p>
)

const StyledPrologue = styled(Prologue)`
  ${tw`text-xl`}
`

export default StyledPrologue
