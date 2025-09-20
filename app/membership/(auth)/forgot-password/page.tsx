"use client";

import Link from "next/link";
import ForgotPasswordForm from "../components/forgotPasswordForm";
import Divider from "@/components/custom/Divider";

const ForgotPasswordPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-sm text-center text-muted-foreground">
          Request reset password to your NSS membership portal
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <ForgotPasswordForm />
        <Divider>Note</Divider>
        <p className="text-xs text-muted-foreground text-center">
          If you have an account associated with this email address, you&apos;ll recieve an email
          with password reset instructions.
        </p>
      </div>

      <p className="text-xs flex items-center gap-2 mt-2">
        <Link href="/">Home</Link>
        <p>&bull;</p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
