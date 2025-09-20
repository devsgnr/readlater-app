import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  status: string;
}

const StatusBadge = ({ status }: Props) => {
  return (
    <Badge
      variant="outline"
      className="bg-white py-0 px-2 w-fit h-fit text-[12px] font-medium border flex items-center gap-2 drop-shadow-sm"
    >
      <div className="relative">
        <div
          className={cn(
            "h-2 w-2 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] flex items-center justify-center relative",
            {
              "bg-green-600!": status === "active",
              "!bg-destructive": status === "inactive",
            },
          )}
        />
        <div
          className={cn("h-2 w-2 rounded-full absolute top-0 left-0", {
            "bg-green-600!": status === "active",
            "!bg-destructive": status === "inactive",
          })}
        />
      </div>

      <p className="capitalize font-semibold">Membership {status}</p>
    </Badge>
  );
};

export default StatusBadge;
