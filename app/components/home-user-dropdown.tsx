import { ChevronDown, Home, LayoutDashboard, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileImage from "../membership/(app)/components/ProfileImage";
import { useSignOut } from "@/app/api/hooks/auth";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthClient } from "@/lib/auth-client";

const HomeUserDropdown = () => {
  const { mutate } = useSignOut();
  const { data } = AuthClient.useSession();

  const SignOut = () => {
    toast.loading("Logging out", { id: "logout" });

    mutate(undefined, {
      onSuccess: (res) => {
        toast.dismiss("logout");
        toast.success("Logged out successfully");
      },
      onError: (err) => {
        const { message } = err;
        toast.dismiss("logout");
        toast.error(message);
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-fit focus-visible:outline-none focus-visible:ring-0 group bg-white drop-shadow-sm border border-input pl-0.5 pr-1 py-0.5 rounded-none">
        <div className="flex items-center gap-2">
          <ProfileImage
            src={data?.user.image}
            alt={data?.user.name}
            size={30}
            radius={1}
          />
          <p className="text-[13px] font-medium">{data?.user.name}</p>
          <ChevronDown
            className="text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 transition-all duration-150"
            size={14}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-9999 rounded-none" align="end">
        <div className="grid min-w-[250px] items-center px-2 py-2">
          <div className="grid gap-px text-sm">
            <p>{data?.user.name}</p>
            <p className="text-xs text-muted-foreground">{data?.user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="items-center justify-between gap-2 cursor-pointer rounded-none"
          asChild
        >
          <Link href="/membership">
            <span>Dashboard</span>
            <LayoutDashboard size={16} strokeWidth={2.5} />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="items-center justify-between !text-destructive cursor-pointer rounded-none"
          onClick={() => SignOut()}
        >
          <span>Sign out</span>
          <LogOut size={16} strokeWidth={2.5} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HomeUserDropdown;
