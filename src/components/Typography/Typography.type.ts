import { ReactNode, ElementType } from 'react';
import { Stylable } from 'types/stylable.type';

export type Variant =
  | 'h1'
  | 'subtitle'
  | 'label'
  | 'body'
  | 'caption'
  | 'display'
  | 'displaySub';

export interface TypographyProps extends Stylable {
  variant?: Variant;
  children: ReactNode;
  color?: string;
  gutterBottom?: string;
  align?: string;
  as?: ElementType;
}
