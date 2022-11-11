interface Values {
  email?: string;
  password?: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export const loginValidate = (values: Values) => {
  const errors: Errors = {};

  if (!values.email) {
  } else if (values.email.length > 50) {
    errors.email = 'Must not be more than 50 characters long.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
  } else if (values.password.length < 4 || values.password.length > 16) {
    errors.password = 'Must be greater than 4 and less than 16 characters.';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  return errors;
};
