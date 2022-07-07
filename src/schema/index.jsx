import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const irPhone = /^09([0-9]|[1-9]|[1-9])-?[0-9]{3}-?[0-9]{4}/;

export const Schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(irPhone, "Phone number is not valid")
    .required("Phone Number is Required")
    .min(11, "Phone Number is to Short")
    .max(11, "Phone Number is to Long"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, "You need create a stronger password")
    .required("Password is Required"),
});

export const Schema2 = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is to Short")
    .max(25, "Name is to Long")
    .required("Name is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You dont accept the Terms of Service"),
});
