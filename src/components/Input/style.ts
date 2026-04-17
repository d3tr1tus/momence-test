import styled from 'styled-components';
import { customCss, CustomCssProps } from 'utils/styled';

export const Wrapper = styled.div<CustomCssProps>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.surfaceRecessed};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0 ${({ theme }) => theme.space.md};
  height: 3.5rem;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.borderFocus};
  }
  ${customCss}
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textFaint};
  }
`;

export const Suffix = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  margin-left: ${({ theme }) => theme.space.sm};
`;
