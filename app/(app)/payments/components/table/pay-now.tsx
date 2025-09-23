"use client";

import { useUpdatePayment } from "@/app/api/hooks/payments";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { usePaymentProcessorContext } from "@/lib/hooks";
import { HandCoins } from "lucide-react";
import { toast } from "sonner";

interface Props {
  accessCode: string;
  pid: string;
  status: string;
  amount: number;
}

const PayNow = ({ accessCode, amount, pid, status }: Props) => {
  const { updatePayment } = useUpdatePayment();
  const { Pay } = usePaymentProcessorContext();

  const ResumeTransaction = () => {
    if (!Pay) return;

    Pay.resumeTransaction(accessCode, {
      onSuccess: (res: any) => {
        const Now = new Date(Date.now()).toISOString();
        const { id, message, redirecturl, ...rest } = res;
        const payload = {
          updatePay: { ...rest, id: pid, paymentDate: Now },
          updateMember: { status: "active", lastPaymentDate: Now },
          updateTotalDue: { amount: amount },
        };

        updatePayment({
          variables: payload,
          onCompleted: () => {
            toast.success(`Payment Successful - ${res.trxref}`);
          },
        });
      },
    });
  };

  return (
    <DropdownMenuItem
      disabled={status === "success"}
      className="cursor-pointer justify-between text-[13px] font-medium"
      onClick={() => ResumeTransaction()}
    >
      Pay Now
      <HandCoins strokeWidth={2} size={16} />
    </DropdownMenuItem>
  );
};

export default PayNow;
