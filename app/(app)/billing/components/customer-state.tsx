import { useCustomerPortal, useGetCustomerState } from "@/app/api/hooks/billing";
import CustomerOverview from "./customer-overview";
import Currency from "@/components/custom/Currency";

const CustomerState = () => {
  const { data } = useGetCustomerState();
  const { mutate, isPending } = useCustomerPortal();

  return (
    <div className="bg-background flex flex-col ring-1 ring-sidebar-border rounded-sm overflow-hidden">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-0.5 p-5">
          <h1 className="text-base font-semibold tracking-tight">Customer State</h1>
          <p className="text-xs text-muted-foreground text-wrap">
            All the details about your current Readlater account
          </p>
        </div>

        <div className="pr-5 pt-5">
          <CustomerOverview.Button onClick={() => mutate()} disabled={isPending}>
            Manage Billing
          </CustomerOverview.Button>
        </div>
      </div>

      <CustomerOverview>
        <CustomerOverview.Item>
          <CustomerOverview.Text className="text-sm font-semibold">
            Billing Name
          </CustomerOverview.Text>
          <CustomerOverview.Text className="text-xs">{data?.data?.name}</CustomerOverview.Text>
        </CustomerOverview.Item>

        <CustomerOverview.Item>
          <CustomerOverview.Text className="text-sm font-semibold">
            Billing Email Address
          </CustomerOverview.Text>
          <CustomerOverview.Text className="text-xs">{data?.data?.email}</CustomerOverview.Text>
        </CustomerOverview.Item>

        <CustomerOverview.Item className="col-span-2">
          <CustomerOverview.Text className="text-sm font-semibold">
            Current Plan
          </CustomerOverview.Text>
          <CustomerOverview.Text className="text-xs">
            <Currency amount={data?.data?.activeSubscriptions[0].amount!} />
          </CustomerOverview.Text>
        </CustomerOverview.Item>
      </CustomerOverview>
    </div>
  );
};

export default CustomerState;
