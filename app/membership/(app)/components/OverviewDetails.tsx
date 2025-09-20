"use client";

import Currency from "@/components/custom/Currency";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext, useMemberDetailsContext } from "@/lib/hooks";
import { Bookmark, Coins, Scroll, User } from "lucide-react";
import OverviewCard from "./OverviewCard";
import DateView from "@/components/custom/Date";

const OverviewDetails = () => {
  const { session } = useAuthContext();
  const { member, isLoadingMember } = useMemberDetailsContext();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 items-start gap-4">
      <OverviewCard>
        <OverviewCard.TopSection>
          <p className="h-[15px]">Member Name</p>
          <User strokeWidth={2.5} size={14} />
        </OverviewCard.TopSection>
        <OverviewCard.Content>
          <p className="font-semibold truncate">{session?.user.name}</p>

          <p className="text-xs font-medium">
            Email: <span>{session?.user.email}</span>
          </p>
        </OverviewCard.Content>
      </OverviewCard>

      <OverviewCard>
        <OverviewCard.TopSection>
          <p className="h-[15px]">Credentials</p>
          <Scroll strokeWidth={2.5} size={14} />
        </OverviewCard.TopSection>
        <OverviewCard.Content>
          {isLoadingMember && <Skeleton className="w-full h-6" />}
          {member && <p className="font-semibold truncate">{member?.profession}</p>}

          {isLoadingMember && <Skeleton className="w-full h-4" />}
          {member && (
            <p className="flex items-center gap-1 text-xs font-medium">
              Certification:
              <span className="truncate">{member?.certification || "N/A"}</span>
            </p>
          )}
        </OverviewCard.Content>
      </OverviewCard>

      <OverviewCard>
        <OverviewCard.TopSection>
          <p className="h-[15px]">Membership</p>
          <Bookmark strokeWidth={2.5} size={14} />
        </OverviewCard.TopSection>
        <OverviewCard.Content>
          {isLoadingMember && <Skeleton className="w-full h-6" />}
          {member && <p className="font-semibold">{member.membershipFee.tier}</p>}

          {isLoadingMember && <Skeleton className="w-full h-4" />}
          {member && (
            <p className="text-xs font-medium capitalize">
              Member Since: <DateView date={String(member.createdAt)} />
            </p>
          )}
        </OverviewCard.Content>
      </OverviewCard>

      {/* <OverviewCard>
        <OverviewCard.TopSection>
          <p className="h-[15px]">Payment</p>
          <Coins strokeWidth={2.5} size={14} />
        </OverviewCard.TopSection>
        <OverviewCard.Content>
          {isLoadingMember && <Skeleton className="w-full h-6" />}
          {member && (
            <p className="font-semibold">
              <Currency amount={member.totalDue} />
            </p>
          )}

          <p className="text-xs font-medium">Payment Due</p>
        </OverviewCard.Content>
      </OverviewCard> */}
    </div>
  );
};

export default OverviewDetails;
