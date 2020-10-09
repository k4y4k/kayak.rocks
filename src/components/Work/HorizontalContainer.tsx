import tw, { styled } from 'twin.macro'
import React from 'react'

interface HorizontalContainerProps {
  className?: string
}

const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const StyledHorizontalContainer = styled(HorizontalContainer)`
  ${tw`flex flex-wrap align-middle justify-center`}
`

export default StyledHorizontalContainer
