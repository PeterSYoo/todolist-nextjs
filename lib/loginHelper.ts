const BASE = process.env.NEXT_PUBLIC_NEXTAUTH_BASE_URL;
const VERCEL = process.env.NEXT_PUBLIC_NEXTAUTH_VERCEL_URL;

interface Credentials {
  email: string;
  password: string;
}

export const loginUser = async (formData: Credentials) => {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE}/api/login`, Options);
    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    return error;
  }
};

// export const loginUser = async (formData: Credentials) => {
//   try {
//     console.log(formData);

//     const Options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     };

//     const response = await fetch(
//       `http://dev.rapptrlabs.com/Tests/scripts/user-login.php`,
//       Options
//     );
//     const json = await response.json();

//     return json;
//   } catch (error) {
//     return error;
//   }
// };
