import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
}
