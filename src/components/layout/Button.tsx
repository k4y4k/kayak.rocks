import React from 'react';

type Props = {
  children: JSX.Element;
};

const Button: React.FC = ({ children }: Props) => (
  <button type="button">{children}</button>
);

export default Button;
