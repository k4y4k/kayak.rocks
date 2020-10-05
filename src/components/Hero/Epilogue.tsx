import React from 'react'
import tw, { styled } from 'twin.macro'

interface EpilogueProps {
  className?: string
}

const Epilogue: React.FC<EpilogueProps> = ({ className }) => (
  <p className={className}>and I&apos;m a web developer.</p>
)

const StyledEpilogue = styled(Epilogue)`
  ${tw`text-xl mb-6`}
`

export default StyledEpilogue
