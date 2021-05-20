import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const options: string[] = [
      'Calabresa',
      'Catuperoni',
      'Mussarela',
      'Margherita',
      '4 Queijos',
      'Egg & Bacon',
      'Portuguesa',
  ];

  res.status(200).json({
    title: 'Selecione o sabor da pizza',
    options,
  });
}
