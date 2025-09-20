// app/(auth)/components/signWithEmailButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Coins, Hospital, Lock, Mail, Phone, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import { SignUpSchema, SignUpSchemaType } from "@/schema/input/authentication";
import { toast } from "sonner";
import DayterInput from "@/components/custom/Input";
import Link from "next/link";
import { ArrowRight } from "@untitled-ui/icons-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEmailSignUp } from "@/app/api/hooks/auth";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SLEEP_MED_PROS } from "./utils";
import { useAuthContext } from "@/lib/hooks";
import { useInitializePayment } from "@/app/api/hooks/payments";
import { useCreatePaymentAndMember } from "@/app/api/hooks/member";

const SignUpEmailForm = () => {
  const router = useRouter();
  const search = useSearchParams();

  const { tiers } = useAuthContext();

  const { mutate, isPending } = useEmailSignUp();
  const { initPayment } = useInitializePayment();
  const { createPaymentAndMember } = useCreatePaymentAndMember();

  // Prefill Membership Tier Select Field
  const tier_id = search.get("id");
  const find = tiers?.find((t) => t.id === tier_id);

  const handleSubmit = async (v: SignUpSchemaType) => {
    const signup = { name: v.name, email: v.email, password: v.password };
    const initPay = { amount: v.price };
    const member = {
      role: v.role,
      profession: v.profession,
      status: "inactive",
      totalDue: v.price,
      phoneNumber: v.phoneNumber,
      membershipFeeId: v.membershipFeeId,
    };

    mutate(signup, {
      onSuccess: async () => {
        const { data } = await initPayment({ variables: { initPay } });

        const { initializePayment } = data;
        const payload = {
          accessCode: initializePayment.data.access_code,
          amount: v.price,
          description: `Annual Dues - ${v.role}`,
        };

        await createPaymentAndMember({
          variables: { member, createPay: payload },
        });

        router.push("/membership");
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
    profession: "",
    phoneNumber: "",
    role: find?.tier || "",
    membershipFeeId: tier_id || "",
    price: find?.amount || 0,
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

            <DayterInput
              LeftIcon={Phone}
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              autoComplete="off"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.errors.phoneNumber}
              required
              disabled={isPending}
              className="h-10"
            />

            <Select
              name="profession"
              required
              disabled={isPending}
              onValueChange={(v) => formik.setFieldValue("profession", v)}
            >
              <SelectTrigger>
                <Hospital size={16} />
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

            <Select
              name="role"
              required
              disabled={isPending}
              defaultValue={formik.values.membershipFeeId}
              onValueChange={(v) => {
                formik.setFieldValue("membershipFeeId", v);
                formik.setFieldValue("role", tiers?.find((vl) => vl.id === v)?.tier);
                formik.setFieldValue("price", tiers?.find((vl) => vl.id === v)?.amount);
              }}
            >
              <SelectTrigger>
                <Coins size={16} />
                <SelectValue placeholder="Select membership tier" />
              </SelectTrigger>
              <SelectContent className="max-w-80 max-h-64">
                <SelectGroup>
                  <SelectLabel>Membership Tiers</SelectLabel>
                  {tiers &&
                    tiers.map((tier) => (
                      <SelectItem key={tier.id} value={tier.id}>
                        {tier.tier}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full gap-2" disabled={isPending}>
              Register
              <ArrowRight width={16} />
            </Button>
          </form>
        </FormikProvider>

        <div className="w-full flex justify-center mt-2 text-xs text-muted-foreground">
          <span>
            Have an account?{" "}
            <Link href="/membership/sign-in" className="text-primary font-medium">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SignUpEmailForm;
