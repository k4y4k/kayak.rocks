import React from 'react'
import tw, { styled } from 'twin.macro'

interface ButtonProps {
  children: JSX.Element
  className?: string
}

const Button: React.FC = ({ children, className }: ButtonProps) => (
  <button type='button' className={className}>
    {children}
  </button>
)

const StyledButton = styled(Button)`
  ${tw`uppercase`}
`

Button.defaultProps = {
  className: '',
}

export default StyledButton
