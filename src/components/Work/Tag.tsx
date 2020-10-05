import React from 'react'
import tw, { styled } from 'twin.macro'

interface TagProps {
  className?: string
  tagText: string
}

const Tag: React.FC<TagProps> = ({ className, tagText }) => (
  <span className={className}>{tagText}</span>
)

const StyledTag = styled(Tag)`
  ${tw`p-1 bg-black text-white m-1 text-sm font-black`}
  font-family: "Inconsolata", monospace;
`

export default StyledTag
