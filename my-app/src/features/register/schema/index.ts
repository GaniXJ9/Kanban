import * as yup from "yup";

const regExpEmail: RegExp = new RegExp(/^\S+@\S+\.\S+$/);

export const registration = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Must be filled!")
    .min(3, "Must be more than 3 sybmols"),

  email: yup.string().required().matches(regExpEmail, "Invalid email format"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be more than 8 symbols"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not matching"),
});

export type RegistrationForm = yup.InferType<typeof registration>;
