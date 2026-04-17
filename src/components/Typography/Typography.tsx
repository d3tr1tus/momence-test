import React, { ElementType } from 'react';
import {
  TypographyProps,
  Variant,
} from 'components/Typography/Typography.type';
import { StyledTypography } from 'components/Typography/style';

const defaultElements: Record<Variant, ElementType> = {
  h1: 'h1',
  subtitle: 'p',
  label: 'label',
  body: 'span',
  caption: 'span',
  display: 'span',
  displaySub: 'span',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  color,
  gutterBottom,
  align,
  as,
  css,
}) => {
  return (
    <StyledTypography
      as={as ?? defaultElements[variant]}
      $variant={variant}
      $color={color}
      $gutterBottom={gutterBottom}
      $align={align}
      $css={css}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
