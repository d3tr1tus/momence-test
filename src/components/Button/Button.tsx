import React from 'react';
import { ButtonProps } from 'types/components';
import { StyledButton } from './style';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth,
  children,
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
