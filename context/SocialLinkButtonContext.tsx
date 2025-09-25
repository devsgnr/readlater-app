import { useLinkSocialType, useUnlinkSocialType } from "@/app/api/hooks/auth";
import { createContext } from "react";

type SocialLinkButtonContextType = {
  hook: useLinkSocialType;
  unhook: useUnlinkSocialType;
  type: string;
  redirect: string;
};

const SocialLinkButtonContext = createContext({} as SocialLinkButtonContextType);

export type { SocialLinkButtonContextType };
export { SocialLinkButtonContext };
