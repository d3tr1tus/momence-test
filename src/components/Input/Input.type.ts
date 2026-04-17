import { InputHTMLAttributes } from 'react';
import { Stylable } from 'types/stylable.type';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>, Stylable {
  suffix?: string;
}
