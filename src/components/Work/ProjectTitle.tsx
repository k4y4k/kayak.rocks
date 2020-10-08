import tw, { styled } from 'twin.macro'
import React from 'react'

interface ProjectTitleProps {
  className?: string
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
)

const StyledProjectTitle = styled(ProjectTitle)`
  ${tw`uppercase text-2xl font-black m-4 tracking-widest`}
  font-family: "Inconsolata", monospace
`

export default StyledProjectTitle
