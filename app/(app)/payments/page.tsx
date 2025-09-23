"use client";

import DataTable from "./components/table/data-table";
import { columns } from "./components/table/columns";
import { Skeleton } from "@/components/ui/skeleton";
import PaginateTable from "./components/table/pagination";
import Currency from "@/components/custom/Currency";
import { Coins } from "lucide-react";
import DateView from "@/components/custom/Date";
import { useMemberDetailsContext, usePaymentsContext } from "@/lib/hooks";
import OverviewCard from "../components/OverviewCard";

interface Props {
  date: Date;
}

const PlusOneYear = ({ date }: Props) => {
  const nextPayment = new Date(date);
  nextPayment.setFullYear(nextPayment.getFullYear() + 1);
  const final = nextPayment.toISOString();

  return <DateView date={final} />;
};

const Payments = () => {
  const { payments, isLoadingPayments } = usePaymentsContext();
  const { member, isLoadingMember } = useMemberDetailsContext();

  return (
    <div className="container mx-auto py-8 sm:px-20 px-3 flex flex-col gap-8">
      <div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
          <div className="text-sm text-muted-foreground text-wrap w-full border border-dashed border-zinc-300 py-14 px-5 flex items-center justify-center rounded-md">
            <p className="font-medium">Payments - Under Construction</p>
          </div>
        </div>

        {/* <p className="text-sm text-muted-foreground text-wrap font-medium">
          All payments records of Nigerian Sleep Society membership
        </p> */}
      </div>

      {/* <div className="flex flex-col sm:max-w-80 gap-1.5">
        <OverviewCard>
          <OverviewCard.TopSection>
            <p className="h-[15px]">Due Payment</p>
            <Coins strokeWidth={2.5} size={14} />
          </OverviewCard.TopSection>
          <OverviewCard.Content>
            {isLoadingMember && <Skeleton className="w-full h-6" />}
            {member && (
              <p className="font-semibold truncate">
                <Currency amount={member.totalDue} />
              </p>
            )}

            <div className="text-xs text-zinc-700 font-medium">
              {isLoadingMember && <Skeleton className="w-full h-6" />}

              {!isLoadingMember && (
                <p className="flex items-center gap-0.5">
                  <span>Next Payment:</span>
                  {member.lastPaymentDate && <PlusOneYear date={member.lastPaymentDate} />}
                  {!member.lastPaymentDate && <p>N/A</p>}
                </p>
              )}
            </div>
          </OverviewCard.Content>
        </OverviewCard>
      </div> */}

      {/* <div className="flex flex-col gap-3">
        {isLoadingPayments && <Skeleton className="h-96 w-full" />}
        {payments && <DataTable columns={columns} data={payments.items} />}
        {payments && <PaginateTable />}
      </div> */}
    </div>
  );
};

export default Payments;
