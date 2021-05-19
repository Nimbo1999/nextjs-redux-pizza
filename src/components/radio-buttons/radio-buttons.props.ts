import { InputHTMLAttributes } from 'react';

export interface RadioButtonsProps extends InputHTMLAttributes<HTMLInputElement> {
    seleted: boolean;
}

export interface RadioButtonContainerProps {
    selected: boolean;
}