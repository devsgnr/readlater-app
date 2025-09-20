import Divider from "@/components/custom/Divider";
import Link from "next/link";

const AuthTermsAndCondition = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <Divider>Hello</Divider>
      <p className="text-xs text-center text-muted-foreground leading-4.5">
        Welcome to a community where every medical professional belongs, learns, and grows
      </p>
      <p className="text-xs flex items-center gap-2 mt-2">
        <Link href="/">Home</Link>
        <p>&bull;</p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default AuthTermsAndCondition;
