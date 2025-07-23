import * as yup from "yup";

export const task = yup.object().shape({
  name: yup.string().required("Must be filled!"),
});

export type TaskForm = yup.InferType<typeof task>;
