"use client";

import { Button } from "@/components/ui/button";
import { Lock, TriangleAlert } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { TooltipProvider } from "@/components/ui/tooltip";
import DayterInput from "@/components/custom/Input";
import { useChangePassword } from "@/app/api/hooks/auth";
import { ChangePasswordSchema, ChangePasswordSchemaType } from "@/schema/input/authentication";
import ButtonTextWrapper from "@/components/custom/ButtonTextWrapper";
import { toast } from "sonner";

const ChangePasswordForm = () => {
  const { mutate, isPending } = useChangePassword();

  const handleSubmit = (v: ChangePasswordSchemaType, reset: () => void) => {
    mutate(v, {
      onSuccess: () => {
        toast.success("Password Updated Successfully");
        reset();
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    newPassword: "",
    currentPassword: "",
    revokeOtherSessions: true,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ChangePasswordSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
  });

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full ring-1 ring-sidebar-border rounded-sm"
          >
            <div className="bg-background p-5 flex flex-col gap-2 rounded-t-sm border-b border-sidebar-border">
              <div className="flex flex-col gap-0.5 mb-2">
                <h1 className="text-base font-semibold tracking-tight">Change Password</h1>
                <p className="text-xs text-muted-foreground text-wrap">
                  Update the password for your account.
                </p>
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={Lock}
                  type="password"
                  placeholder="Current Password"
                  name="currentPassword"
                  autoComplete="off"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  error={formik.errors.currentPassword}
                  required
                  className="h-10 text-xs"
                  disabled={isPending}
                />
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={Lock}
                  type="password"
                  placeholder="Password"
                  name="newPassword"
                  autoComplete="off"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  error={formik.errors.newPassword}
                  required
                  className="h-10 text-xs"
                  disabled={isPending}
                />
              </div>
            </div>

            <div className="py-2 px-5 flex items-center justify-between">
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <TriangleAlert size={16} />
                <p className="h-[14px]">
                  Upon update all other sessions will be revoked (logged out)
                </p>
              </div>

              <Button size="sm" type="submit" className="w-fit gap-2" disabled={isPending}>
                <ButtonTextWrapper isLoading={isPending}>Update Password</ButtonTextWrapper>
              </Button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </TooltipProvider>
  );
};

export default ChangePasswordForm;
