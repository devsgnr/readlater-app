// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import { ForgotPasswordSchema, ForgotPasswordSchemaType } from "@/schema/input/authentication";
import { toast } from "sonner";
import DayterInput from "@/components/custom/Input";
import Link from "next/link";
import { ArrowRight } from "@untitled-ui/icons-react";
import { useRequestResetPassword } from "@/app/api/hooks/auth";
import { TooltipProvider } from "@/components/ui/tooltip";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useRequestResetPassword();

  const handleSubmit = async (values: ForgotPasswordSchemaType, resetForm: () => void) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Reset link sent");
        resetForm();
        router.push("/sign-in");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    email: "",
    redirectTo: "//auth/reset-password",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
  });

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 w-full">
            <DayterInput
              LeftIcon={Mail}
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
              required
              disabled={isPending}
              className="h-10"
            />

            <Button type="submit" className="w-full gap-2" disabled={isPending}>
              Send Reset Link
              <ArrowRight width={16} />
            </Button>
          </form>
        </FormikProvider>

        <div className="w-full flex justify-center mt-2 text-xs text-zinc-600 dark:text-zinc-400">
          <span>
            Go back?{" "}
            <Link href="/sign-in" className="text-primary font-medium">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ForgotPasswordForm;
