import { NextApiRequest, NextApiResponse } from 'next';

export const postLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const formData = req.body;
    console.log(formData);

    const response = await fetch(
      'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ error });
  }
};
