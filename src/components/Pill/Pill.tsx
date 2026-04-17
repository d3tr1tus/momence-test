import React from 'react';
import { PillProps } from 'components/Pill/Pill.type';
import { StyledPill } from 'components/Pill/style';

const Pill: React.FC<PillProps> = ({ active, css, children, ...rest }) => {
  return (
    <StyledPill $active={active} $css={css} {...rest}>
      {children}
    </StyledPill>
  );
};

export default Pill;
