import { useThirdPartySignIn } from "@/app/api/hooks/auth";
import IconPicker from "@/components/custom/IconPicker";
import { Button } from "@/components/ui/button";
import { ThirdPartyButtonContext } from "@/context/ThirdPartyButtonContext";
import { useThirdPartySignInContext } from "@/lib/hooks";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { capitalize } from "lodash";

interface Props {
  children: React.ReactNode;
  type: string;
  redirect?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

interface IconProps {
  type: string;
}

/**
 *
 * @param  children React.ReactNode: required
 * @param type string: the type of social login; google, twitter.
 * @param redirect string: the path you redirect to, defaults to current location (optional)
 * @returns React.ReactNode
 */
const ThirdPartyButton = ({ children, type, redirect }: Props) => {
  const path = usePathname();
  const hook = useThirdPartySignIn(type);
  const direct = redirect || path;

  return (
    <ThirdPartyButtonContext.Provider value={{ hook, type, redirect: direct }}>
      {children}
    </ThirdPartyButtonContext.Provider>
  );
};

const ThirdPartyButtonButton = ({ children, variant = "outline" }: ButtonProps) => {
  const router = useRouter();
  const { hook, type, redirect } = useThirdPartySignInContext();
  const { mutate, isPending } = hook;

  const handleSubmit = async () => {
    const message = `Signing in with ${capitalize(type)}`;
    toast.loading(message, { id: "social-login" });

    mutate(undefined, {
      onSuccess: async () => {
        toast.dismiss("social-login");
        router.push(redirect);
      },
      onError: (err) => {
        const { message } = err;
        toast.dismiss("social-login");
        toast.error(message);
      },
    });
  };

  return (
    <Button
      variant={variant}
      className="w-full gap-2"
      disabled={isPending}
      onClick={() => handleSubmit()}
    >
      {children}
    </Button>
  );
};

const ThirdPartyButtonIcon = ({ type }: IconProps) => {
  return <IconPicker type={type} size={20} />;
};

ThirdPartyButtonButton.displayName = "ThirdPartyButton.Button";
ThirdPartyButtonIcon.displayName = "ThirdPartyButton.Icon";

ThirdPartyButton.Button = ThirdPartyButtonButton;
ThirdPartyButton.Icon = ThirdPartyButtonIcon;

export default ThirdPartyButton;
