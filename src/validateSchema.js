import joi, { schema, validate } from "joi-browser";

export const formSchema = {
  firstName: joi.string().alphanum().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  company: joi.string().required(),
};
