import React from 'react';
import { BadgeProps } from 'components/Badge/Badge.type';
import { StyledBadge } from 'components/Badge/style';

const Badge: React.FC<BadgeProps> = ({ children, color, css }) => {
  return (
    <StyledBadge $color={color} $css={css}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
