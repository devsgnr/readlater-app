import { useThirdPartySignInType } from "@/app/api/hooks/auth";
import { createContext } from "react";

type ThirdPartyButtonContextType = {
  hook: useThirdPartySignInType;
  type: string;
  redirect: string;
};

const ThirdPartyButtonContext = createContext({} as ThirdPartyButtonContextType);

export type { ThirdPartyButtonContextType };
export { ThirdPartyButtonContext };
