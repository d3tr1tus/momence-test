import React from 'react';
import { InputProps } from 'components/Input/Input.type';
import { Wrapper, StyledInput, Suffix } from 'components/Input/style';

const Input: React.FC<InputProps> = ({ suffix, css, ...rest }) => {
  return (
    <Wrapper $css={css}>
      <StyledInput {...rest} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </Wrapper>
  );
};

export default Input;
