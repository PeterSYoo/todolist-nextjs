import { NextApiRequest, NextApiResponse } from 'next';
import { postLogin } from '../../../lib/loginController';

export default async function tests(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      postLogin(req, res);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
