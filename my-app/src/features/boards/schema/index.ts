import * as yup from "yup";

export const board = yup.object().shape({
  background: yup.string().required("Must be filled!"),
  title: yup.string().required("Must be filled!"),
});

export type BoardDataForm = yup.InferType<typeof board>;
