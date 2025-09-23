import { LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { COMBINED } from "./constants";
import { cn } from "@/lib/utils";
import { AuthClient } from "@/lib/auth-client";
import { useSignOut } from "../api/hooks/auth";
import { toast } from "sonner";

const ResponsiveMenu = () => {
  const { data } = AuthClient.useSession();
  const { mutate } = useSignOut();

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
      <DropdownMenuTrigger className="h-fit focus-visible:outline-none focus-visible:ring-0 group bg-white drop-shadow-sm border border-input p-3 m-2 sm:hidden block">
        <div className="flex items-center gap-2">
          <Menu size={15} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-9999 rounded-none min-w-[320px]" align="end">
        {COMBINED.map((comb) => (
          <div
            key={comb.name}
            className={cn({
              hidden: comb.name === "Membership" && data?.session,
            })}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs font-mono uppercase">
              {comb.name}
            </DropdownMenuLabel>

            {comb.links.map((link) => (
              <DropdownMenuItem
                asChild
                className="rounded-none text-[13px] font-mono font-medium tracking-wide uppercase cursor-pointer"
                key={link.id}
              >
                <Link className="w-full" href={link.link}>
                  {link.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        ))}

        {data !== null && <DropdownMenuSeparator />}

        {data !== null && (
          <div className="grid items-center">
            <DropdownMenuItem asChild className="rounded-none cursor-pointer">
              <Link className="w-full grid gap-[2px]" href="/">
                <p className="text-[13px] font-medium">{data?.user?.name}</p>
                <p className="text-xs text-muted-foreground">Go to Dashboard</p>
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
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResponsiveMenu;
