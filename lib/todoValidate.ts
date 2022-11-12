interface Values {
  task?: string;
}

interface Errors {
  task?: string;
}

export const todoValidate = (values: Values) => {
  const errors: Errors = {};

  if (!values.task) {
    errors.task = ' ';
  } else if (values.task.length < 1 || values.task.length > 26) {
    errors.task = 'Must be greater than 1 and less than 26 characters.';
  }

  return errors;
};
