import { useGetBenefits, useGetCustomerState } from "@/app/api/hooks/billing";
import CustomerOverview from "./customer-overview";
import { CustomerBenefitGrantMeterCredit } from "@polar-sh/sdk/models/components/customerbenefitgrantmetercredit.js";
import { Progress } from "@/components/ui/progress";
import React from "react";

type MeterCredit = CustomerBenefitGrantMeterCredit;

const Benefits = () => {
  const { data: state } = useGetCustomerState();
  const { data } = useGetBenefits({ page: 1, limit: 10 });

  const GetBenefit = (id: string) => {
    return data?.data?.result.items.find(
      (benefit) => (benefit as MeterCredit).benefit.properties.meterId === id,
    );
  };

  return (
    <div className="bg-background flex flex-col ring-1 ring-sidebar-border rounded-sm overflow-hidden">
      <div className="flex flex-col gap-0.5 p-5">
        <h1 className="text-base font-semibold tracking-tight">Usage</h1>
        <p className="text-xs text-muted-foreground text-wrap">
          Keep of all the usage data of your current Readlater account
        </p>
      </div>

      <CustomerOverview>
        {state?.data &&
          state.data.activeMeters.map((meter) => (
            <CustomerOverview.Item key={meter.id}>
              <CustomerOverview.Text className="text-sm font-semibold">
                {GetBenefit(meter.meterId)?.benefit.description}
              </CustomerOverview.Text>

              <Progress className="h-2" value={(meter.consumedUnits / meter.creditedUnits) * 100} />

              <CustomerOverview.Text className="text-xs">
                {meter.consumedUnits} of {meter.creditedUnits}
              </CustomerOverview.Text>
            </CustomerOverview.Item>
          ))}
      </CustomerOverview>
    </div>
  );
};

export default React.memo(Benefits);
