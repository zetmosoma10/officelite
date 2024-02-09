import joi, { schema, validate } from "joi-browser";

export const formSchema = {
  firstName: joi.string().alphanum().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  company: joi.string().required(),
  plans: joi.required(),
};

export const validateInput = (data) => {
  const option = { abortEarly: false };
  const results = joi.validate(data, formSchema, option);
  if (!results.error) return null;

  const errors = {};

  for (const item of results.error.details) {
    const name = item.path[0];
    const errorMessage = item.message;

    errors[name] = errorMessage;
  }

  return errors;
};
