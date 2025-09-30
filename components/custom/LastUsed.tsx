import { useAuthContext } from "@/lib/hooks";
import { Badge } from "../ui/badge";

interface Props {
  provider: string | null | undefined;
}

const LastLoginUsed = ({ provider }: Props) => {
  const { lastLogin } = useAuthContext();

  return (
    <div className="w-fit absolute top-0 right-0 -translate-y-[50%] translate-x-[50%]">
      {lastLogin === provider && (
        <Badge variant="outline" className="font-normal px-2 text-[11px] bg-background">
          Last Used
        </Badge>
      )}
    </div>
  );
};

export default LastLoginUsed;
