import { HTMLAttributes, ReactNode } from 'react';

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    icon?: ReactNode
}

export interface TitleProps {
    hasIcon: boolean
}