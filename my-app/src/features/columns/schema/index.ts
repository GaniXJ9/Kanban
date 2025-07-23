import * as yup from "yup";

export const column = yup.object().shape({
  name: yup.string().required("Must be filled!"),
});

export type ColumnForm = yup.InferType<typeof column>;
