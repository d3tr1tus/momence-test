import React from 'react';
import { BadgeProps } from 'types/components';
import { StyledBadge } from './style';

const Badge: React.FC<BadgeProps> = ({ children, color }) => {
  return <StyledBadge $color={color}>{children}</StyledBadge>;
};

export default Badge;
