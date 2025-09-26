"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UpdateUserSchema, UpdateUserSchemaType } from "@/schema/input/profile";
import DayterInput from "@/components/custom/Input";

const SetPasswordForm = () => {
  const handleSubmit = (v: UpdateUserSchemaType) => {
    console.log(v);
  };

  const initialValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UpdateUserSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => handleSubmit(values),
  });

  return (
    <TooltipProvider>
      <div className="grid gap-2">
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full ring-1 ring-sidebar-border rounded-sm"
          >
            <div className="bg-background p-5 flex flex-col gap-4 rounded-t-sm border-b border-sidebar-border">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold tracking-tight">Set Password</h1>
                <p className="text-sm text-muted-foreground text-wrap">
                  Set a password for your account, so you can login with email
                </p>
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={Lock}
                  type="password"
                  placeholder="Password"
                  name="name"
                  autoComplete="off"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.errors.name}
                  required
                  className="h-10"
                />
              </div>
            </div>

            <div className="py-2 px-5 flex justify-end">
              <Button type="submit" className="w-fit gap-2">
                Set Password
                <ArrowRight width={16} />
              </Button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </TooltipProvider>
  );
};

export default SetPasswordForm;
