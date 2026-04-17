import React from 'react';
import { ButtonProps } from 'components/Button/Button.type';
import { StyledButton } from 'components/Button/style';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth,
  css,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $fullWidth={fullWidth}
      $css={css}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
