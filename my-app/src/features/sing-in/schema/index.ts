import * as yup from "yup";

export const signIn = yup.object().shape({
  email: yup.string().required("Must be filled!"),
  password: yup.string().required("Must be filled!"),
});

export type SignInForm = yup.InferType<typeof signIn>;
