import styled, { css } from 'styled-components';
import { ButtonVariant } from 'types/components';

const variants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primaryDark} 100%
    );
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primaryGlow};

    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px ${({ theme }) => theme.colors.primaryGlowHover};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceRecessed};
    }
  `,
};

export const StyledButton = styled.button<{
  $variant: keyof typeof variants;
  $fullWidth?: boolean;
}>`
  height: 3.25rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: 0 ${({ theme }) => theme.space.xl};

  ${({ $variant }) => variants[$variant as ButtonVariant]}

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
