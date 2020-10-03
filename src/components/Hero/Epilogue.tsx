import React from 'react'
import tw, { styled } from 'twin.macro'

interface EpilogueProps {
  className?: string
}

const Epilogue: React.FC = ({ className }: EpilogueProps) => (
  <p className={className}>and I&apos;m a web developer.</p>
)

const StyledEpilogue = styled(Epilogue)`
  ${tw`text-xl`}
`

Epilogue.defaultProps = {
  className: '',
}

export default StyledEpilogue
