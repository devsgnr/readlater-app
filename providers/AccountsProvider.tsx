"use client";

import AccountsContext from "@/context/AccountsContext";
import { useGetUserAccount } from "@/app/api/hooks/auth";

type Props = {
  children: React.ReactNode;
};

const AccountsProvider = ({ children }: Props) => {
  const { data, isLoading } = useGetUserAccount();

  return (
    <AccountsContext.Provider value={{ accounts: data?.data, isLoading: isLoading }}>
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
