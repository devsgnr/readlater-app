// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
} from "@/schema/input/authentication";
import { toast } from "sonner";
import DayterInput from "@/components/custom/Input";
import { handleError } from "@/lib/utils";
import { ArrowRight } from "@untitled-ui/icons-react";
import { useResetPassword } from "@/app/api/hooks/auth";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  token: string | null;
};

const ResetPasswordForm = ({ token }: Props) => {
  const router = useRouter();
  const { mutate, isPending } = useResetPassword();

  const handleSubmit = async (
    values: ResetPasswordSchemaType,
    resetForm: () => void
  ) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Reset successful");
        resetForm();
        router.push("/membership/sign-in");
      },
      onError: (err) => {
        const { error } = handleError(err);
        toast.error(error.message);
      },
    });
  };

  const initialValues = {
    newPassword: "",
    token: token || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
  });

  if (!token) {
    router.push("/membership/sign-in");
    toast.error("Invalid reset link");
    return null;
  }

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-2 w-full"
          >
            <DayterInput
              LeftIcon={Lock}
              type="password"
              placeholder="New Password"
              name="newPassword"
              autoComplete="off"
              value={formik.values.newPassword}
              error={formik.errors.newPassword}
              onChange={formik.handleChange}
              required
              disabled={isPending}
              className="h-10"
            />

            <Button type="submit" className="w-full gap-2" disabled={isPending}>
              Reset Password
              <ArrowRight width={16} />
            </Button>
          </form>
        </FormikProvider>
      </div>
    </TooltipProvider>
  );
};

export default ResetPasswordForm;
