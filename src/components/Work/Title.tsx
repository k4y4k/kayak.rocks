import React from 'react'
import tw, { styled } from 'twin.macro'

interface TitleProps {
  className?: string
}

const Title: React.FC<TitleProps> = ({ className }) => (
  <h1 className={className}>Projects</h1>
)

const StyledTitle = styled(Title)`
  ${tw`text-2xl m-6`}
`

Title.defaultProps = {
  className: '',
}

export default StyledTitle
