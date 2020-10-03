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
  ${tw`uppercase m-2 px-4 py-1 bg-black text-white rounded-lg`}
`

Button.defaultProps = {
  className: '',
}

export default StyledButton
