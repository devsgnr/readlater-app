import { InferType, object, string } from "yup";
import Constants from "../utils";

const { phone_no_err, phone_no_len_err } = Constants;

const UpdateUserSchema = object().shape({
  name: string().required("Field is required"),
  image: string(),
});

const UpdatePhoneNumberSchema = object().shape({
  phoneNumber: string().required(phone_no_err).min(11, phone_no_len_err).max(11, phone_no_len_err),
});

type UpdateUserSchemaType = InferType<typeof UpdateUserSchema>;
type UpdatePhoneNumberSchemaType = InferType<typeof UpdatePhoneNumberSchema>;

export { UpdateUserSchema, UpdatePhoneNumberSchema };
export type { UpdateUserSchemaType, UpdatePhoneNumberSchemaType };
