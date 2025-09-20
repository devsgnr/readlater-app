"use client";

import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "../../components/resetPasswordForm";
import Divider from "@/components/custom/Divider";

const ResetPasswordPage = () => {
  const search = useSearchParams();
  const token = search.get("token");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-sm text-center text-muted-foreground">
          Reset password to your NSS membership portal
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <ResetPasswordForm token={token} />
        <Divider>Note</Divider>
        <p className="text-xs text-muted-foreground text-center">
          Always pick a password that is strong and easy to remember.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
