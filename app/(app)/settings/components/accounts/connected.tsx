"use client";

import { LINK_ACCOUNTS } from "../constant";
import { useAuthContext } from "@/lib/hooks";
import Account, { AccountCredential } from "./connect-item";
import { AuthAccountsType } from "@/context/AuthContext";

const LinkedAccounts = () => {
  const { accounts } = useAuthContext();
  const _credential = accounts?.filter((v) => v.provider === "credential");
  const _accounts = accounts?.filter((v) => v.provider !== "credential");
  const __accounts: Record<number, AuthAccountsType> = { ...LINK_ACCOUNTS, ..._accounts };
  const ___accounts: AuthAccountsType[] = Object.values(__accounts);

  return (
    <div className="bg-background flex flex-col ring-1 ring-sidebar-border rounded-sm">
      <div className="flex flex-col gap-0.5 p-5">
        <h1 className="text-base font-semibold tracking-tight">Linked Accounts</h1>
        <p className="text-xs text-muted-foreground text-wrap">
          All the account associated with your Readlater account
        </p>
      </div>

      <div className="grid gap-[1px]">
        {_credential?.map((acc) => (
          <AccountCredential acc={acc} />
        ))}

        {___accounts?.map((acc) => (
          <Account key={acc.id + acc.provider} acc={acc} />
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
