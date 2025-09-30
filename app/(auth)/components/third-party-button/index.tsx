import { useThirdPartySignIn } from "@/app/api/hooks/auth";
import IconPicker from "@/components/custom/IconPicker";
import { Button } from "@/components/ui/button";
import { ThirdPartyButtonContext } from "@/context/ThirdPartyButtonContext";
import { useAuthContext, useThirdPartySignInContext } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { capitalize } from "lodash";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LastLoginUsed from "@/components/custom/LastUsed";

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

interface WrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  type: string;
}

interface LastUsedProps {
  provider: string | null | undefined;
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
  const { hook, type } = useThirdPartySignInContext();
  const { mutate, isPending } = hook;

  const handleSubmit = async () => {
    const message = `Signing in with ${capitalize(type)}`;
    toast.loading(message, { id: "social-login" });

    mutate(undefined, {
      onSuccess: async () => {
        toast.dismiss("social-login");
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
      className="w-full gap-2 relative"
      disabled={isPending}
      onClick={() => handleSubmit()}
    >
      <ThirdPartyButtonLastUsed />
      <ThirdPartyButtonContentWrapper type={type} isLoading={isPending}>
        {children}
      </ThirdPartyButtonContentWrapper>
    </Button>
  );
};

const ThirdPartyButtonIcon = ({ type }: IconProps) => {
  return <IconPicker type={type} size={24} />;
};

const ThirdPartyButtonLastUsed = () => {
  const { type } = useThirdPartySignInContext();

  return <LastLoginUsed provider={type} />;
};

const ThirdPartyButtonContentWrapper = ({ children, isLoading, type }: WrapperProps) => {
  const utils = { transition: { duration: 0.2 } };

  return (
    <AnimatePresence>
      <span className="flex items-center gap-1.5">
        {isLoading && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Loader2 className="animate-spin" size={16} />
          </motion.div>
        )}

        {!isLoading && (
          <motion.div {...utils} initial={{ scale: 1 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <ThirdPartyButtonIcon type={type} />
          </motion.div>
        )}

        {children}
      </span>
    </AnimatePresence>
  );
};

ThirdPartyButtonButton.displayName = "ThirdPartyButton.Button";
ThirdPartyButtonIcon.displayName = "ThirdPartyButton.Icon";

ThirdPartyButton.Button = ThirdPartyButtonButton;
ThirdPartyButton.Icon = ThirdPartyButtonIcon;

export default ThirdPartyButton;
