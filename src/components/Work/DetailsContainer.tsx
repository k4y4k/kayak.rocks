import tw, { styled } from 'twin.macro'
import React from 'react'

interface DetailsContainerProps {
  className?: string
  crisscross: boolean
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const StyledDetailsContainer = styled(DetailsContainer)`
  ${tw`p-4 bg-gradient-to-b from-brand via-palevioletred-800 to-salmon-900`}
  ${({ crisscross }) => crisscross && tw`bg-gradient-to-t`}
  background-color: #222;
  grid-area: info;
`

export default StyledDetailsContainer
