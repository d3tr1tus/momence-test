import styled from 'styled-components';
import { customCss, CustomCssProps } from 'utils/styled';

export const StyledPill = styled.button<{ $active: boolean } & CustomCssProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.xs};
  min-height: 2.75rem;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: ${({ $active, theme }) =>
    $active
      ? `1.5px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.border}`};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primaryLight : theme.colors.surface};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.pillText};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primaryLight : theme.colors.pillHover};
  }
  ${customCss}
`;
