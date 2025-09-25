"use client";

import DateView from "@/components/custom/Date";
import SocialLinkButton from "../components/social-link";
import IconPicker from "@/components/custom/IconPicker";
import { AuthAccountsType } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";

interface Props {
  acc: AuthAccountsType;
}

const Account = ({ acc }: Props) => {
  return (
    <SocialLinkButton type={acc.provider}>
      <div className="w-full flex items-center gap-3 py-1">
        <IconPicker type={acc.provider} size={20} />
        <p className="capitalize text-sm mr-auto">{acc.provider}</p>

        {acc.createdAt && (
          <Badge className="font-medium font-mono px-2 text-[11px]" variant="outline">
            Approved -&gt; <DateView date={acc.createdAt.toISOString()} />
          </Badge>
        )}

        <div className="flex items-center gap-1 !text-xs">
          <SocialLinkButton.Link accountId={acc.accountId}>Link</SocialLinkButton.Link>
          <SocialLinkButton.Unlink accountId={acc.accountId}>Unlink</SocialLinkButton.Unlink>
        </div>
      </div>
    </SocialLinkButton>
  );
};

export default Account;
