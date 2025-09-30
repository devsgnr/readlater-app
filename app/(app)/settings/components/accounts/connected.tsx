"use client";

import { LINK_ACCOUNTS } from "../constant";
import { useAccountsContext } from "@/lib/hooks";
import Account, { AccountCredential } from "./connect-item";
import { AccountsType } from "@/context/AccountsContext";

const LinkedAccounts = () => {
  const { accounts } = useAccountsContext();
  const _credential = accounts?.filter((v) => v.providerId === "credential");
  const _accounts = accounts?.filter((v) => v.providerId !== "credential");
  const __accounts: Record<number, AccountsType> = { ...LINK_ACCOUNTS, ..._accounts };
  const ___accounts: AccountsType[] = Object.values(__accounts);

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
          <Account key={acc.id + acc.providerId} acc={acc} />
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
