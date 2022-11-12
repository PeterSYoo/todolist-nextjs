interface Values {
  title?: string;
}

interface Errors {
  title?: string;
}

export const todoValidate = (values: Values) => {
  const errors: Errors = {};

  if (!values.title) {
    // errors.title = ' ';
  } else if (values.title.length < 1 || values.title.length > 26) {
    errors.title = 'Must be greater than 1 and less than 26 characters.';
  }

  return errors;
};
