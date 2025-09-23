"use client";

import Divider from "@/components/custom/Divider";
import ContinueWithGoogle from "../components/continue-with-google";
import SignUpEmailForm from "../components/sign-up-with-email-form";
import AuthTermsAndCondition from "../components/terms-and-condition";
import ContinueWithTwitter from "../components/continue-with-twitter";
import LogoIcon from "@/components/icons/logo-icon";

const SignUpPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-3">
        <LogoIcon className="rounded-sm" width={50} height={50} />

        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-bold mb-0">Sign up to continue</h1>
          <p className="text-sm text-center text-muted-foreground">
            Sign up to create a Readlater account
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <ContinueWithGoogle />
        <ContinueWithTwitter />
        <Divider>or</Divider>
        <SignUpEmailForm />
      </div>

      <AuthTermsAndCondition />
    </div>
  );
};

export default SignUpPage;
