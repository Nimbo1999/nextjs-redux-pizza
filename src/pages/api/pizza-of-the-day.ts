import { NextApiRequest, NextApiResponse } from 'next';
import PizzaOfTheDay from '../../model/PizzaOfTheDay';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const days: PizzaOfTheDay[] = [
    {
      id: '4-queijos',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Gorgonzola', 'Parmesão', 'Requeijão', 'Oregano'],
      name: '4 Queijos',
      points: 50,
      price: 37,
      size: 'large'
    },
    {
      id: 'calabresa',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Oregano', 'Cebola', 'Calabresa'],
      name: 'Calabresa',
      points: 35,
      price: 25.99,
      size: 'large'
    },
    {
      id: 'pepperoni',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Oregano', 'Pepperoni'],
      name: 'Pepperoni',
      points: 35,
      price: 26.5,
      size: 'large'
    },
    {
      id: 'portuguesa',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Azeitonas Pretas', 'Mussarela', 'Ovo de Codorna', 'Oregano', 'Cebola', 'Pimentão'],
      name: 'Portuguesa',
      points: 47,
      price: 27,
      size: 'large'
    },
    {
      id: 'presunto',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Oregano', 'Presunto'],
      name: 'Presunto',
      points: 40,
      price: 29,
      size: 'large'
    },
    {
      id: 'margherita',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Manjericão', 'Oregano', 'Tomate'],
      name: 'Margherita',
      points: 38,
      price: 19.99,
      size: 'large'
    },
    {
      id: 'egg-e-bacon',
      imageUrl: 'pizza1.jpg',
      ingredients: ['Mussarela', 'Cream Cheese', 'Ovo de Codorna', 'Cebola', 'Bacon'],
      name: 'Egg & Bacon',
      points: 38,
      price: 19.99,
      size: 'large'
    },
  ];

  const now = new Date();
  const pizzaOfTheDay = days[now.getDay()];
  res.status(200).json(pizzaOfTheDay);
}
