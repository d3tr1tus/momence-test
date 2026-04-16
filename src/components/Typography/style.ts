import styled, { css } from 'styled-components';
import { Variant } from 'types/components';

const variants: Record<Variant, ReturnType<typeof css>> = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  label: css`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  body: css`
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.textFaint};
  `,
  display: css`
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1;
  `,
  displaySub: css`
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
};

export const StyledTypography = styled.span<{
  $variant: Variant;
  $color?: string;
  $gutterBottom?: string;
  $align?: string;
}>`
  margin: 0;
  ${({ $variant }) => variants[$variant as Variant]}
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
  ${({ $gutterBottom }) =>
    $gutterBottom &&
    css`
      margin-bottom: ${$gutterBottom};
    `}
  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}
`;
