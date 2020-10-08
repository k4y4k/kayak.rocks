import tw, { styled } from 'twin.macro'
import React from 'react'

interface DetailsContainerProps {
  className?: string
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const StyledDetailsContainer = styled(DetailsContainer)`
  ${tw`flex flex-col p-4`}
  max-width: 33vw;
`

export default StyledDetailsContainer
