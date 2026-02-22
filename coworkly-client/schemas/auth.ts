import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),

  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

export const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be atleast 3 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),

  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is Required"),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password must Match")
    .required("Confirm Your Password"),
});
