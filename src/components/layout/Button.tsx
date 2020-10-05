/* eslint-disable implicit-arrow-linebreak */

import React from 'react'
import tw, { styled } from 'twin.macro'

interface ButtonProps {
  className?: string
  important?: boolean
  large?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <button type='button' className={className}>
    {children}
  </button>
)

const StyledButton = styled(Button)`
  ${tw`uppercase m-2 px-4 py-1 bg-black text-white rounded-lg border border-transparent hover:border-brand hover:text-mediumpurple-500`}
  ${({ important }) =>
    important && tw`bg-tomato-700 hover:text-black hover:border-black`}
  ${({ large }) => large && tw`text-lg py-2`} {
    /* workaround for large buttons that contain logos*/
  }
`

export default StyledButton
