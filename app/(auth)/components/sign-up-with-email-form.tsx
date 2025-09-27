// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import { SignUpSchema, SignUpSchemaType } from "@/schema/input/authentication";
import { toast } from "sonner";
import DayterInput from "@/components/custom/Input";
import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEmailSignUp } from "@/app/api/hooks/auth";
import ButtonTextWrapper from "@/components/custom/ButtonTextWrapper";

const SignUpEmailForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useEmailSignUp();

  const handleSubmit = async (v: SignUpSchemaType) => {
    const signup = { name: v.name, email: v.email, password: v.password };

    mutate(signup, {
      onSuccess: async () => {
        router.push("/");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => handleSubmit(values),
  });

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 w-full">
            <DayterInput
              LeftIcon={User}
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
              required
              disabled={isPending}
              className="h-10"
            />

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

            <DayterInput
              LeftIcon={Lock}
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
              required
              disabled={isPending}
              className="h-10"
            />

            <Button type="submit" className="w-full gap-2" disabled={isPending}>
              <ButtonTextWrapper isLoading={isPending}>Sign Up</ButtonTextWrapper>
            </Button>
          </form>
        </FormikProvider>

        <div className="w-full flex justify-center mt-2 text-xs text-muted-foreground">
          <span>
            Have an account?{" "}
            <Link href="/sign-in" className="text-primary font-medium">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SignUpEmailForm;
