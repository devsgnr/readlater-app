/**
 * Constants
 *
 * Resuable variables to eliminate redundant variables
 */
const Constants = {
  email_regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  name_err: "Please enter your name",
  email_err: "Please enter your email",
  invalid_email_err: "Invalid email Address",
  pw_err: "Please enter your password",
  pw_len_err: "Password is too short. min. 8 characters",
  hospital_err: "Please enter your hospital name",
  phone_no_err: "Phone Number is required",
  phone_no_len_err: "Phone Number must be 11 digits",
};

export default Constants;
