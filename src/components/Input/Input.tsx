import React from 'react';
import { InputProps } from 'types/components';
import { Wrapper, StyledInput, Suffix } from './style';

const Input: React.FC<InputProps> = ({ suffix, ...rest }) => {
  return (
    <Wrapper>
      <StyledInput {...rest} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </Wrapper>
  );
};

export default Input;
