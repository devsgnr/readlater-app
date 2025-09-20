"use client";

import SignInWithEmailForm from "../components/signInWithEmailForm";
import AuthTermsAndCondition from "../components/termsAndCondition";

const SignInPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Log in</h1>
        <p className="text-sm text-center text-muted-foreground">
          Log into your NSS membership portal
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SignInWithEmailForm />
      </div>

      <AuthTermsAndCondition />
    </div>
  );
};

export default SignInPage;
