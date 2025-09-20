import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PaymentBadge = ({ status }: { status: string | null }) => {
  return (
    <Badge
      variant="outline"
      className="py-0 px-2 w-fit h-fit text-[12px] font-medium border flex items-center gap-1 drop-shadow-sm"
    >
      <div
        className={cn("h-2 w-2 rounded-full", {
          "!bg-destructive": !status,
          "bg-green-800!": status === "success",
          "bg-yellow-500!": status === "pending",
        })}
      />
      <p className="capitalize font-semibold">
        {cn({
          "Payment Due": !status,
          success: status === "success",
          pending: status === "pending",
        })}
      </p>
    </Badge>
  );
};

export default PaymentBadge;
