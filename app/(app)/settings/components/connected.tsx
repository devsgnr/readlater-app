// app/(auth)/components/signWithEmailButton.tsx
"use client";

import IconPicker from "@/components/custom/IconPicker";
import { Badge } from "@/components/ui/badge";
import { useAuthContext } from "@/lib/hooks";

const LinkedAccounts = () => {
  const { accounts } = useAuthContext();

  return (
    <div className="bg-background flex flex-col gap-4 ring-1 ring-muted rounded-lg">
      <div className="flex flex-col gap-0.5 border-b border-muted p-5">
        <h1 className="text-xl font-semibold tracking-tight">Linked Accounts</h1>
        <p className="text-sm text-muted-foreground text-wrap">
          All the account associated with your Readlater account
        </p>
      </div>

      <div className="flex flex-col gap-1 px-5 pb-4">
        {accounts?.map((acc) => (
          <div key={acc.id} className="flex items-center gap-4">
            <IconPicker type={acc.provider} size={20} />
            <p className="capitalize text-sm font-medium">{acc.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
