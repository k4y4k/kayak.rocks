import React from 'react'
import tw, { styled } from 'twin.macro'

interface DetailsContainerProps {
  className?: string
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const StyledDetailsContainer = styled(DetailsContainer)`
  ${tw`flex flex-col p-4`}
  max-width: 40vw;
`

export default StyledDetailsContainer
