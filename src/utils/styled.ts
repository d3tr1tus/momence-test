import { css } from 'styled-components';

export interface CustomCssProps {
  $css?: string;
}

export const customCss = css<CustomCssProps>`
  ${({ $css }) => $css}
`;
