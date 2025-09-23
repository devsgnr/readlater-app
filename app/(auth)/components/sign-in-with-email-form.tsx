// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import { SignInSchema, SignInSchemaType } from "@/schema/input/authentication";
import { toast } from "sonner";
import DayterInput from "@/components/custom/Input";
import Link from "next/link";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { useEmailSignIn } from "@/app/api/hooks/auth";

const SignInEmailForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useEmailSignIn();

  const handleSubmit = async (values: SignInSchemaType) => {
    mutate(values, {
      onSuccess: (res) => {
        toast.success(`Welcome ${res.data?.user.name}`);
        router.push("/");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    email: "",
    password: "",
    rememberMe: true,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    onSubmit: (values) => handleSubmit(values),
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
              onChange={formik.handleChange}
              error={formik.errors.email}
              required
              disabled={isPending}
              className="h-10"
            />
            <div className="flex flex-col items-end gap-4 pb-1">
              <DayterInput
                LeftIcon={Lock}
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={formik.values.password}
                error={formik.errors.password}
                onChange={formik.handleChange}
                required
                disabled={isPending}
                className="h-10"
              />

              {/** Remeber me & Forgot Password */}
              <div className="w-full flex items-center justify-between">
                <label className="flex items-center gap-1 cursor-pointer">
                  <Checkbox
                    name="rememberMe"
                    disabled={isPending}
                    defaultChecked={formik.values.rememberMe}
                    checked={formik.values.rememberMe}
                    onCheckedChange={(e) => formik.setFieldValue("rememberMe", e)}
                  />
                  <span className="text-xs font-medium text-muted-foreground">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-xs font-medium text-muted-foreground">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full gap-2" disabled={isPending}>
              Sign in
              <ArrowRight width={16} />
            </Button>
          </form>
        </FormikProvider>

        <div className="w-full flex justify-center mt-2 text-xs text-zinc-600 dark:text-zinc-400">
          <span>
            No account?{" "}
            <Link href="/sign-up" className="text-primary font-medium">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SignInEmailForm;
