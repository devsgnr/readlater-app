import { createContext } from "react";

type AccountsType = {
  id: string;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: string;
  scopes: string[];
};

type AccountsContextType = {
  accounts: Array<AccountsType> | null | undefined;
  isLoading: boolean;
};

const AccountsContext = createContext<AccountsContextType>({} as AccountsContextType);

export type { AccountsContextType, AccountsType };
export default AccountsContext;
