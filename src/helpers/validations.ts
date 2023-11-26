import { object, string } from "yup";

const stringValidation = string().trim();
// const numberValidation = number();
const emailValidation = stringValidation
  .email("Invalid email")
  .matches(/@[^.]*\./, "Invalid email");

const ENTER_EMAIL = "Please enter email";

export const loginValidation = object({
  email: emailValidation.required(ENTER_EMAIL),
  role: stringValidation.required("Please choose your role"),
  // password: string()
  //   .min(MIN_PASSWORD_LENGTH, "Password length must be minimum 8 character")
  //   .required("Please enter password"),
});

export const postValidation = object({
  title: stringValidation.required("Post title is requered"),
  body: stringValidation.required("Post body is requered"),
});
