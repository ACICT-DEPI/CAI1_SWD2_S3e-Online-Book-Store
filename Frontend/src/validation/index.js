import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required.")
    .min(5, "Name should be at least 5 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}/, "Not a valid email address."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 6 characters."),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}/, "Not a valid email address."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 6 characters."),
});
