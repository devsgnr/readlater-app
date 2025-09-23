"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CopyToClipboard } from "@/lib/utils";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
  value: string;
}

const Copy = ({ children, value }: Props) => {
  const Copy = () => {
    CopyToClipboard(value, {
      onSucess: () => {
        toast.success("Copied to Clipboard");
      },
    });
  };

  return (
    <DropdownMenuItem
      disabled={!value}
      className="cursor-pointer justify-between text-[13px] font-medium"
      onClick={() => Copy()}
    >
      {children}
      <CopyIcon strokeWidth={3} size={14} />
    </DropdownMenuItem>
  );
};

export default Copy;
