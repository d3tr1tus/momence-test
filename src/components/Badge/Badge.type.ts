import { ReactNode } from 'react';
import { Stylable } from 'types/stylable.type';

export interface BadgeProps extends Stylable {
  children: ReactNode;
  color?: string;
}
