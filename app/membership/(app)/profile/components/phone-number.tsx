"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "sonner";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUpdateMember } from "@/app/api/hooks/member";
import DayterInput from "@/components/custom/Input";
import { useMemberDetailsContext } from "@/lib/hooks";
import { UpdatePhoneNumberSchema, UpdatePhoneNumberSchemaType } from "@/schema/input/profile";

const PhoneNumberForm = () => {
  const { member } = useMemberDetailsContext();
  const { updateMember, updateMemberLoading } = useUpdateMember();

  const handleSubmit = (v: UpdatePhoneNumberSchemaType) => {
    updateMember({
      variables: { updateMember: v },
      onCompleted: () => {
        toast.success("Phone Number Changed");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    phoneNumber: member?.phoneNumber || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UpdatePhoneNumberSchema,
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
                <h1 className="text-xl font-semibold tracking-tight">Phone Number</h1>
                <p className="text-sm text-muted-foreground text-wrap">
                  Update your phone number. We recommend providing the number you currently use on
                  WhatsApp for ease of communication
                </p>
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={Phone}
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  autoComplete="off"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.errors.phoneNumber as string | undefined}
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

export default PhoneNumberForm;
