import React from 'react';
import { CardProps } from 'types/components';
import { StyledCard } from './style';

const Card: React.FC<CardProps> = ({ children, maxWidth }) => {
  return <StyledCard $maxWidth={maxWidth}>{children}</StyledCard>;
};

export default Card;
