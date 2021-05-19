import { PizzaSizes } from './PizzaSizes';

export default interface PizzaOfTheDay {
    id: string;
    name: string;
    price: number;
    size: PizzaSizes;
    points: number;
    ingredients: String[];
    imageUrl: string;
}