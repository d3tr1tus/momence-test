import React from 'react';
import { PillProps } from 'types/components';
import { StyledPill } from './style';

const Pill: React.FC<PillProps> = ({ active, children, ...rest }) => {
  return (
    <StyledPill $active={active} {...rest}>
      {children}
    </StyledPill>
  );
};

export default Pill;
