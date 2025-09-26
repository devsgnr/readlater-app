"use client";

import { LINK_ACCOUNTS } from "./constant";
import { useAuthContext } from "@/lib/hooks";
import Account from "./connect-item";
import { AuthAccountsType } from "@/context/AuthContext";

const LinkedAccounts = () => {
  const { accounts } = useAuthContext();
  const _accounts: Record<number, AuthAccountsType> = { ...LINK_ACCOUNTS, ...accounts };
  const __accounts: AuthAccountsType[] = Object.values(_accounts);

  return (
    <div className="bg-background flex flex-col ring-1 ring-sidebar-border rounded-sm overflow-hidden">
      <div className="flex flex-col gap-0.5 border-b border-sidebar-border p-5">
        <h1 className="text-xl font-semibold tracking-tight">Linked Accounts</h1>
        <p className="text-sm text-muted-foreground text-wrap">
          All the account associated with your Readlater account
        </p>
      </div>

      <div className="grid gap-[1px]">
        {__accounts?.map((acc) => (
          <Account key={acc.id + acc.provider} acc={acc} />
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
