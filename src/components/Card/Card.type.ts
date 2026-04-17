import { ReactNode } from 'react';
import { Stylable } from 'types/stylable.type';

export interface CardProps extends Stylable {
  children: ReactNode;
  maxWidth?: string;
}
