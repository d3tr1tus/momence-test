import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Stylable } from 'types/stylable.type';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, Stylable {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}
