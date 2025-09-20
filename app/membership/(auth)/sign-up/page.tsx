"use client";

import SignUpEmailForm from "../components/signUpWithEmailForm";
import AuthTermsAndCondition from "../components/termsAndCondition";

const SignUpPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-sm text-center text-muted-foreground">Register to be an NSS member</p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SignUpEmailForm />
      </div>

      <AuthTermsAndCondition />
    </div>
  );
};

export default SignUpPage;
