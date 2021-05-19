import { ReactNode } from 'react';

export interface TagProps {
    color?: string;
    background?: string;
    children: ReactNode
}

export interface TagContainerProps {
    color?: string;
    background?: string;
}