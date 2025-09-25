import { useLinkSocial, useThirdPartySignIn, useUnlinkSocial } from "@/app/api/hooks/auth";
import IconPicker from "@/components/custom/IconPicker";
import { Button } from "@/components/ui/button";
import { SocialLinkButtonContext } from "@/context/SocialLinkButtonContext";
import { useSocialLinkContext } from "@/lib/hooks";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { capitalize } from "lodash";
import { cn } from "@/lib/utils";
import AppTanstackQueryClient from "@/lib/query-client";

interface Props {
  children: React.ReactNode;
  type: string;
  redirect?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  accountId?: string;
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
const SocialLinkButton = ({ children, type, redirect }: Props) => {
  const path = usePathname();
  const hook = useLinkSocial(type);
  const unhook = useUnlinkSocial(type);
  const direct = redirect || path;

  return (
    <SocialLinkButtonContext.Provider value={{ hook, unhook, type, redirect: direct }}>
      {children}
    </SocialLinkButtonContext.Provider>
  );
};

const SocialLinkButtonLink = ({ children, accountId }: ButtonProps) => {
  const router = useRouter();
  const { hook, redirect } = useSocialLinkContext();
  const { mutate, isPending } = hook;

  const handleSubmit = async () => {
    const data = { callbackURL: redirect };

    mutate(data, {
      onSuccess: async () => {
        router.push(redirect);
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn("gap-2 text-xs", { hidden: accountId })}
      disabled={isPending}
      onClick={() => handleSubmit()}
    >
      {children}
    </Button>
  );
};

const SocialLinkButtonUnlink = ({ children, accountId }: ButtonProps) => {
  const router = useRouter();
  const { unhook, type, redirect } = useSocialLinkContext();
  const { mutate, isPending } = unhook;

  const handleSubmit = async () => {
    const data = { providerId: type, accountId };
    const message = `Unlinking ${capitalize(type)}`;
    toast.loading(message, { id: "social-link" });

    mutate(data, {
      onSuccess: async () => {
        AppTanstackQueryClient.invalidateQueries({ queryKey: ["getUsersAccounts"] });
        toast.dismiss("social-link");
        router.push(redirect);
      },
      onError: (err) => {
        const { message } = err;
        toast.dismiss("social-link");
        toast.error(message);
      },
    });
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn("gap-2 hidden text-xs text-destructive hover:text-destructive", {
        block: accountId,
      })}
      disabled={isPending}
      onClick={() => handleSubmit()}
    >
      {children}
    </Button>
  );
};

const SocialLinkButtonIcon = ({ type }: IconProps) => {
  return <IconPicker type={type} size={20} />;
};

SocialLinkButtonLink.displayName = "SocialLinkButton.Link";
SocialLinkButtonUnlink.displayName = "SocialLinkButton.Unlink";
SocialLinkButtonIcon.displayName = "SocialLinkButton.Icon";

SocialLinkButton.Link = SocialLinkButtonLink;
SocialLinkButton.Unlink = SocialLinkButtonUnlink;
SocialLinkButton.Icon = SocialLinkButtonIcon;

export default SocialLinkButton;
