// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "sonner";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UpdateUserSchema, UpdateUserSchemaType } from "@/schema/input/profile";
import DayterInput from "@/components/custom/Input";
import { useAuthContext } from "@/lib/hooks";
import { useUpdateUser } from "@/app/api/hooks/auth";

const ChangeNameForm = () => {
  const { session } = useAuthContext();
  const { mutate, isPending } = useUpdateUser();

  const handleSubmit = (v: UpdateUserSchemaType) => {
    mutate(v, {
      onSuccess: () => {
        toast.success("Name Changed");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    name: session?.user.name || "",
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
            className="flex flex-col w-full ring-1 ring-muted rounded-md"
          >
            <div className="bg-background p-5 flex flex-col gap-4 rounded-t-md border-b border-muted">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold tracking-tight">Name</h1>
                <p className="text-sm text-muted-foreground text-wrap">Update your full name</p>
              </div>

              <div className="max-w-80">
                <DayterInput
                  LeftIcon={User}
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  autoComplete="off"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.errors.name}
                  required
                  disabled={isPending}
                  className="h-10"
                />
              </div>
            </div>

            <div className="py-2 px-5 flex justify-end">
              <Button type="submit" className="w-fit gap-2" disabled={isPending}>
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

export default ChangeNameForm;
