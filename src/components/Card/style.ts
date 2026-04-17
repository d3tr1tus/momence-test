import styled from 'styled-components';
import { customCss, CustomCssProps } from 'utils/styled';

export const StyledCard = styled.div<{ $maxWidth?: string } & CustomCssProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '26.5rem'};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.space['2xl']} ${({ theme }) => theme.space.xl};
  box-shadow:
    0 2px 40px rgba(0, 0, 0, 0.06),
    0 8px 16px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.03);

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.md};
    border-radius: ${({ theme }) => theme.radius.lg};
  }
  ${customCss}
`;
