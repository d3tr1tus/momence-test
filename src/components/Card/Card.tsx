import React from 'react';
import { CardProps } from 'components/Card/Card.type';
import { StyledCard } from 'components/Card/style';

const Card: React.FC<CardProps> = ({ children, maxWidth, css }) => {
  return (
    <StyledCard $maxWidth={maxWidth} $css={css}>
      {children}
    </StyledCard>
  );
};

export default Card;
