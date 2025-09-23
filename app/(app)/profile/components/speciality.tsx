// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Hospital } from "lucide-react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "sonner";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuthContext, useMemberDetailsContext } from "@/lib/hooks";
import { useGetMemberDetails, useUpdateMember } from "@/app/api/hooks/member";
import { SLEEP_MED_PROS } from "@/app/(auth)/components/utils";
import { SpecialitySchema, SpecialitySchemaType } from "@/schema/input/member";

const SpecialityForm = () => {
  const { member } = useMemberDetailsContext();
  const { updateMember, updateMemberLoading } = useUpdateMember();

  const handleSubmit = (v: SpecialitySchemaType) => {
    const load = {
      profession: v.profession,
    };

    updateMember({
      variables: { updateMember: load },
      onCompleted: () => {
        toast.success("Speciality Changed");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  const initialValues = {
    profession: member?.profession || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SpecialitySchema,
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
                <h1 className="text-xl font-semibold tracking-tight">Speciality</h1>
                <p className="text-sm text-muted-foreground text-wrap">
                  You can switch your medical specialty so we can keep your profile accurate and up
                  to date
                </p>
              </div>

              <Select
                name="profession"
                required
                disabled={updateMemberLoading}
                value={formik.values.profession}
                onValueChange={(v) => formik.setFieldValue("profession", v)}
              >
                <SelectTrigger className="max-w-80 bg-white drop-shadow-sm">
                  <Hospital className="text-muted-foreground" size={16} />
                  <SelectValue placeholder="Select speciality" />
                </SelectTrigger>
                <SelectContent className="max-w-80 max-h-64">
                  {SLEEP_MED_PROS.map((group) => (
                    <SelectGroup key={group.category}>
                      <SelectLabel>{group.category}</SelectLabel>
                      {group.roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
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

export default SpecialityForm;
