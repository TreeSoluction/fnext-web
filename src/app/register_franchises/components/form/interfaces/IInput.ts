import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
}

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  img: string;
}
