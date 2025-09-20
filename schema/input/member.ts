import { InferType, object, string } from "yup";

const SpecialitySchema = object().shape({
  profession: string().required(),
});

const CertificationSchema = object().shape({
  certification: string().required("Field is required"),
});

type SpecialitySchemaType = InferType<typeof SpecialitySchema>;
type CertificationSchemaType = InferType<typeof CertificationSchema>;

export { SpecialitySchema, CertificationSchema };
export type { SpecialitySchemaType, CertificationSchemaType };
