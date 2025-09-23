"use client";

import ForgotPasswordForm from "../components/forgot-password-form";
import Divider from "@/components/custom/Divider";
import LogoIcon from "@/components/icons/logo-icon";

const ForgotPasswordPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-3">
        <LogoIcon className="rounded-sm" width={50} height={50} />

        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-bold mb-0">Forgot password</h1>
          <p className="text-sm text-center text-muted-foreground">
            Request password reset for your Readlater account
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <ForgotPasswordForm />
        <Divider>Note</Divider>
        <p className="text-xs text-muted-foreground text-center">
          If you have an account associated with this email address, you&apos;ll recieve an email
          with password reset instructions.
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
