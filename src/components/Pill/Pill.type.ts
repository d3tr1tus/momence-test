import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Stylable } from 'types/stylable.type';

export interface PillProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, Stylable {
  active: boolean;
  children: ReactNode;
}
