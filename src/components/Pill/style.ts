import styled from 'styled-components';

export const StyledPill = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.xs};
  height: 2.75rem;
  padding: 0 ${({ theme }) => theme.space.md};
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
`;
