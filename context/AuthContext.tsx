import { Tiers } from "@/types/home";
import { createContext } from "react";

type TiersRes = Array<Tiers>;

type AuthSessionType = {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
  };
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
};

type AuthAccounts = {
  id: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: string;
  scopes: string[];
};

type AuthContextType = {
  session: AuthSessionType | null;
  accounts: Array<AuthAccounts> | null | undefined;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export type { AuthContextType, AuthSessionType, TiersRes };
export default AuthContext;
