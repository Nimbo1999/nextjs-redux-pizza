import { NextApiRequest, NextApiResponse } from 'next';
import { PizzaEdge } from '../../../model/PizzaEdge';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const options: PizzaEdge[] = [
      'catupiry',
      'cheddar-cheese',
      'chocolate',
      'no-edge'
  ];

  res.status(200).json({
    title: 'Escolha o recheio da borda',
    options
  });
}
