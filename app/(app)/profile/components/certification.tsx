"use client";

import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "sonner";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUpdateMember } from "@/app/api/hooks/member";
import { CertificationSchema, CertificationSchemaType } from "@/schema/input/member";
import DayterInput from "@/components/custom/Input";
import { useMemberDetailsContext } from "@/lib/hooks";

const CertificationForm = () => {
  const { member } = useMemberDetailsContext();
  const { updateMember, updateMemberLoading } = useUpdateMember();

  const handleSubmit = (v: CertificationSchemaType) => {
    updateMember({
      variables: { updateMember: v },
      onCompleted: () => {
        toast.success("Certification Changed");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    certification: member?.certification || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CertificationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => handleSubmit(values),
  });

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full border border-zinc-300 drop-shadow-sm rounded-md"
          >
            <div className="bg-white p-5 flex flex-col gap-4 rounded-t-md">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold tracking-tight">Certification</h1>
                <p className="text-sm text-muted-foreground text-wrap">
                  Add or update your certifications, separated by commas (e.g., MDCN, WACP, FWACP),
                  to showcase your professional achievements
                </p>
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={Scroll}
                  type="text"
                  placeholder="Certification"
                  name="certification"
                  autoComplete="off"
                  value={formik.values.certification}
                  onChange={formik.handleChange}
                  error={formik.errors.certification as string | undefined}
                  required
                  disabled={updateMemberLoading}
                  className="h-10 bg-white drop-shadow-sm"
                />
              </div>
            </div>

            <div className="py-2 px-5 flex justify-end">
              <Button type="submit" className="w-fit gap-2" disabled={updateMemberLoading}>
                Save Changes
                <ArrowRight width={16} />
              </Button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </TooltipProvider>
  );
};

export default CertificationForm;
