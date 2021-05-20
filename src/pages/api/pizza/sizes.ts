import { NextApiRequest, NextApiResponse } from 'next';
import { PizzaSizes } from '../../../model/PizzaSizes';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const options: PizzaSizes[] = [
      'large',
      'family',
      'medium',
      'small'
  ];

  res.status(200).json({
    title: 'Qual o tamanho da pizza?',
    options
  });
}
