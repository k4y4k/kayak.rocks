/* eslint-disable implicit-arrow-linebreak,operator-linebreak */

import tw, { styled, css } from 'twin.macro'
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
  ${tw`p-4`}
  background-color: #222;
  grid-area: info;

  background: rgb(87, 56, 103);
  background: linear-gradient(
    180deg,
    rgb(87, 56, 103) 0%,
    rgb(115, 44, 91) 50%,
    rgb(106, 35, 46) 100%
  );

  ${({ crisscross }) =>
    crisscross &&
    css`
      background: rgb(87, 56, 103);
      background: linear-gradient(
        0deg,
        rgb(87, 56, 103) 0%,
        rgb(115, 44, 91) 50%,
        rgb(106, 35, 46) 100%
      );
    `}
`

export default StyledDetailsContainer
