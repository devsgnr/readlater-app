import { InferType, object, string, boolean, number } from "yup";
import Constants from "../utils";

const {
  email_regex,
  email_err,
  invalid_email_err,
  pw_err,
  pw_len_err,
  hospital_err,
  name_err,
  phone_no_err,
  phone_no_len_err,
} = Constants;

const SignInSchema = object().shape({
  email: string().matches(email_regex, invalid_email_err).required(email_err),
  password: string().required(pw_err).min(8, pw_len_err),
  rememberMe: boolean().required(),
});

const SignUpSchema = object().shape({
  name: string().required(name_err).min(2),
  email: string().matches(email_regex, invalid_email_err).required(email_err),
  password: string().required(pw_err).min(8),
  profession: string().required(),
  price: number().required(),
  role: string().required(),
  phoneNumber: string().required(phone_no_err).min(11, phone_no_len_err).max(11, phone_no_len_err),
  membershipFeeId: string().required(),
});

const AdminSignUpSchema = object().shape({
  name: string().required(name_err).min(2),
  hospital_name: string().required(hospital_err).min(2),
  email: string().matches(email_regex, invalid_email_err).required(email_err),
  password: string().required(pw_err).min(8),
});

const ForgotPasswordSchema = object().shape({
  email: string().email(invalid_email_err).required(email_err),
  redirectTo: string().optional(),
});

const ResetPasswordSchema = object().shape({
  newPassword: string().required(pw_err).min(8, pw_len_err),
  token: string().required(),
});

type SignInSchemaType = InferType<typeof SignInSchema>;
type SignUpSchemaType = InferType<typeof SignUpSchema>;
type AdminSignUpSchemaType = InferType<typeof AdminSignUpSchema>;
type ForgotPasswordSchemaType = InferType<typeof ForgotPasswordSchema>;
type ResetPasswordSchemaType = InferType<typeof ResetPasswordSchema>;

export { SignInSchema, SignUpSchema, AdminSignUpSchema, ForgotPasswordSchema, ResetPasswordSchema };
export type {
  SignInSchemaType,
  SignUpSchemaType,
  AdminSignUpSchemaType,
  ForgotPasswordSchemaType,
  ResetPasswordSchemaType,
};
