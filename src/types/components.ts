import {
  ReactNode,
  ElementType,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type Variant =
  | 'h1'
  | 'subtitle'
  | 'label'
  | 'body'
  | 'caption'
  | 'display'
  | 'displaySub';

export type ButtonVariant = 'primary' | 'secondary';

export interface CardProps {
  children: ReactNode;
  maxWidth?: string;
}

export interface BadgeProps {
  children: ReactNode;
  color?: string;
}

export interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
  color?: string;
  gutterBottom?: string;
  align?: string;
  as?: ElementType;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: string;
}

export interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  children: ReactNode;
}
