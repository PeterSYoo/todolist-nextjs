const BASE = process.env.NEXT_PUBLIC_NEXTAUTH_BASE_URL;
const VERCEL = process.env.NEXT_PUBLIC_NEXTAUTH_VERCEL_URL;

interface Credentials {
  email: string;
  password: string;
}

export const loginUser = async (credentials: Credentials) => {
  const response = await fetch(`${BASE}/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json);

  console.log(response);
};
