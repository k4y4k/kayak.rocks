import React from 'react'
import tw, { styled } from 'twin.macro'

interface TitleProps {
  className?: string
}

const Bracket = styled.span`
  ${tw`font-normal text-mediumorchid-900`}
`

const Title: React.FC = ({ className }: TitleProps) => (
  <h1 className={className}>
    <Bracket>{'<'}</Bracket>
    kayak
    <Bracket>{' />'}</Bracket>
  </h1>
)

const StyledTitle = styled(Title)`
  ${tw`text-4xl text-brand font-black text-center`}
`

Title.defaultProps = {
  className: '',
}

export default StyledTitle
