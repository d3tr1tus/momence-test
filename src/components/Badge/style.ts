import styled from 'styled-components';
import { customCss, CustomCssProps } from 'utils/styled';

export const StyledBadge = styled.div<{ $color?: string } & CustomCssProps>`
  width: 2.75rem;
  height: 2.75rem;
  background: ${({ $color, theme }) => $color ?? theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  ${customCss}
`;
