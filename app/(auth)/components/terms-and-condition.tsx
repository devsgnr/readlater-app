import Divider from "@/components/custom/Divider";

const AuthTermsAndCondition = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <Divider />
      <p className="text-xs text-center text-muted-foreground leading-4.5">
        By signing up for "Readlater" you&apos;ve accepted the Terms & Conditions and Privacy Policy
        of "Readlater"
      </p>
    </div>
  );
};

export default AuthTermsAndCondition;
