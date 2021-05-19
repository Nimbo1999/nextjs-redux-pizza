import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'success';
export type ButtonVariant = 'full' | 'default';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType;
    variant?: ButtonVariant;
}

export interface ButtonContainerProps {
    btnType?: ButtonType;
    variant?: ButtonVariant;
}