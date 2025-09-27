"use client";

import DateView from "@/components/custom/Date";
import SocialLinkButton from "../../components/social-link";
import IconPicker from "@/components/custom/IconPicker";
import { AuthAccountsType } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";

interface Props {
  acc: AuthAccountsType;
}

const Account = ({ acc }: Props) => {
  return (
    <SocialLinkButton type={acc.provider}>
      <div className="grid gap-0.5 items-center px-5 py-3 shadow-[0_-1px_0_0_var(--sidebar-border)]">
        <div className="w-full flex items-center gap-2 py-1">
          <IconPicker type={acc.provider} size={20} />
          <p className="capitalize text-sm mr-auto">{acc.provider}</p>

          {acc.createdAt && (
            <Badge
              className="font-medium font-mono px-2 text-[11px] text-muted-foreground"
              variant="outline"
            >
              Approved -&gt; <DateView date={acc.createdAt.toISOString()} />
            </Badge>
          )}

          <div className="flex items-center gap-1">
            <SocialLinkButton.Link accountId={acc.accountId}>
              Connect {acc.provider}
            </SocialLinkButton.Link>
            <SocialLinkButton.Unlink accountId={acc.accountId}>
              Disconnect {acc.provider}
            </SocialLinkButton.Unlink>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          You can log in with your <span className="capitalize">{acc.provider}</span> account.
          We&apos;ll never perform any action without your permission
        </p>
      </div>
    </SocialLinkButton>
  );
};

export default Account;
