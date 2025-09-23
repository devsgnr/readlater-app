import { ChevronDown, Home, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileImage from "./ProfileImage";
import { useSignOut } from "@/app/api/hooks/auth";
import { useAuthContext } from "@/lib/hooks";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
  const Router = useRouter();
  const { mutate } = useSignOut();
  const { session } = useAuthContext();

  const SignOut = () => {
    toast.loading("Logging out", { id: "logout" });

    mutate(undefined, {
      onSuccess: (res) => {
        toast.dismiss("logout");
        toast.success("Logged out successfully");
        Router.push("/");
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
      <DropdownMenuTrigger className="h-fit focus-visible:outline-none focus-visible:ring-0 group bg-white drop-shadow-sm border border-input pl-0.5 pr-1 py-0.5 rounded-lg">
        <div className="flex items-center gap-2">
          <ProfileImage src={session?.user.image} alt={session?.user.name} size={30} />
          <p className="text-[13px] font-medium">{session?.user.name}</p>
          <ChevronDown
            className="text-muted-foreground group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 transition-all duration-150"
            size={14}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-9999" align="end">
        <div className="grid min-w-[250px] items-center px-2 py-2">
          <div className="grid gap-px text-sm">
            <p>{session?.user.name}</p>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="items-center justify-between gap-2 cursor-pointer" asChild>
          <Link href="/">
            <span>Home Page</span>
            <Home size={16} strokeWidth={2.5} />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="items-center justify-between !text-destructive cursor-pointer"
          onClick={() => SignOut()}
        >
          <span>Sign out</span>
          <LogOut size={16} strokeWidth={2.5} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
