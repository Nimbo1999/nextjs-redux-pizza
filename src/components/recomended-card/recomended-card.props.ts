import { HTMLAttributes } from 'react';

import PizzaOfTheDay from '../../model/PizzaOfTheDay';

export interface RecomendedCardProps extends HTMLAttributes<HTMLDivElement> {
    pizza?: PizzaOfTheDay;
    onGetPoints: () => void,
}

export interface RecomendedCardContainerProps {
    imageUrl: string;
}