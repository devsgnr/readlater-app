"use client";

import DateView from "@/components/custom/Date";
import SocialLinkButton from "../../components/social-link";
import IconPicker from "@/components/custom/IconPicker";
import { Badge } from "@/components/ui/badge";
import { AccountsType } from "@/context/AccountsContext";

interface Props {
  acc: AccountsType;
}

const Account = ({ acc }: Props) => {
  return (
    <SocialLinkButton type={acc.providerId}>
      <div className="grid gap-0.5 items-center px-5 py-3 shadow-[0_-1px_0_0_var(--sidebar-border)]">
        <div className="w-full flex items-center gap-2 py-1">
          <IconPicker type={acc.providerId} size={20} />
          <p className="capitalize text-sm mr-auto">{acc.providerId}</p>

          {acc.createdAt && (
            <Badge className="font-medium px-2 text-[11px] text-muted-foreground" variant="outline">
              Approved -&gt; <DateView date={acc.createdAt.toISOString()} />
            </Badge>
          )}

          <div className="flex items-center gap-1">
            <SocialLinkButton.Link accountId={acc.accountId}>
              Connect {acc.providerId}
            </SocialLinkButton.Link>
            <SocialLinkButton.Unlink accountId={acc.accountId}>
              Disconnect {acc.providerId}
            </SocialLinkButton.Unlink>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          You can log in with your{" "}
          <span className="capitalize font-semibold">{acc.providerId}</span> account. We&apos;ll
          never perform any action without your permission
        </p>
      </div>
    </SocialLinkButton>
  );
};

const AccountCredential = ({ acc }: Props) => {
  return (
    <SocialLinkButton type={acc.providerId}>
      <div className="grid gap-0.5 items-center px-5 py-3 shadow-[0_-1px_0_0_var(--sidebar-border)]">
        <div className="w-full flex items-center gap-2 py-1">
          <IconPicker type={acc.providerId} size={20} />
          <p className="capitalize text-sm mr-auto">{acc.providerId}</p>

          {acc.createdAt && (
            <Badge className="font-medium px-2 text-[11px] text-muted-foreground" variant="outline">
              Approved -&gt; <DateView date={acc.createdAt.toISOString()} />
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          You can log in with your{" "}
          <span className="capitalize font-semibold">Email &amp; password</span>.
        </p>
      </div>
    </SocialLinkButton>
  );
};

export default Account;
export { AccountCredential };
