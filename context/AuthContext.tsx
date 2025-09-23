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

type AuthContextType = {
  session: AuthSessionType | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export type { AuthContextType, AuthSessionType, TiersRes };
export default AuthContext;
