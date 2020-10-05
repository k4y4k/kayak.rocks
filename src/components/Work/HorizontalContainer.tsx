import React from 'react'
import tw, { styled } from 'twin.macro'

interface HorizontalContainerProps {
  className?: string
}

const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const StyledHorizontalContainer = styled(HorizontalContainer)`
  ${tw`flex m-2 align-middle justify-center`}
`

export default StyledHorizontalContainer
