import * as yup from "yup";

export const createBoardSchema = yup.object().shape({
  background: yup.string().required("Must be filled!"),
  title: yup.string().required("Must be filled!"),
});
