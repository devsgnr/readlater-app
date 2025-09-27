import { InferType, object, string, boolean } from "yup";
import Constants from "../utils";

const { email_regex, email_err, invalid_email_err, pw_err, pw_len_err, hospital_err, name_err } =
  Constants;

const SignInSchema = object().shape({
  email: string().matches(email_regex, invalid_email_err).required(email_err),
  password: string().required(pw_err).min(8, pw_len_err),
  rememberMe: boolean().required(),
});

const SignUpSchema = object().shape({
  name: string().required(name_err).min(2),
  email: string().matches(email_regex, invalid_email_err).required(email_err),
  password: string().required(pw_err).min(8),
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

const SetPasswordSchema = object().shape({
  newPassword: string().required(pw_err).min(8, pw_len_err),
});

const ChangePasswordSchema = object().shape({
  newPassword: string().required(pw_err).min(8, pw_len_err),
  currentPassword: string().required(pw_err).min(8, pw_len_err),
  revokeOtherSessions: boolean().required(),
});

type SignInSchemaType = InferType<typeof SignInSchema>;
type SignUpSchemaType = InferType<typeof SignUpSchema>;
type AdminSignUpSchemaType = InferType<typeof AdminSignUpSchema>;
type ForgotPasswordSchemaType = InferType<typeof ForgotPasswordSchema>;
type ResetPasswordSchemaType = InferType<typeof ResetPasswordSchema>;
type SetPasswordSchemaType = InferType<typeof SetPasswordSchema>;
type ChangePasswordSchemaType = InferType<typeof ChangePasswordSchema>;

export {
  SignInSchema,
  SignUpSchema,
  AdminSignUpSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
  SetPasswordSchema,
  ChangePasswordSchema,
};
export type {
  SignInSchemaType,
  SignUpSchemaType,
  AdminSignUpSchemaType,
  ForgotPasswordSchemaType,
  ResetPasswordSchemaType,
  SetPasswordSchemaType,
  ChangePasswordSchemaType,
};
