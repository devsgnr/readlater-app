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
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Theme from "./Theme";
import { UserDropdownItem } from "./constant";

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
        Router.push("/sign-in");
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
      <SidebarMenuItem>
        <SidebarMenuButton
          className="focus-visible:outline-none focus-visible:ring-0 group-data-[collapsible=icon]:!p-0"
          tooltip="Setting"
          asChild
        >
          <DropdownMenuTrigger className="w-full h-fit focus-visible:outline-none focus-visible:ring-0 group group-data-[collapsible=icon]:!p-0">
            <div className="w-full flex items-center gap-2">
              <ProfileImage src={session?.user.image} alt={session?.user.name} size={30} />

              <div className="flex flex-col items-start">
                <p className="text-xs font-medium">{session?.user.name}</p>
                <p className="text-xs text-muted-foreground">{session?.user.email}</p>
              </div>

              <ChevronDown
                className="ml-auto group-aria-[expanded=true]:rotate-180 group-data-[expanded=false]:rotate-0 transition-all duration-150"
                strokeWidth={2}
                size={16}
              />
            </div>
          </DropdownMenuTrigger>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <DropdownMenuContent className="z-9999" align="end" side="right">
        <div className="grid grid-cols-[32px_auto] min-w-[220px] items-center gap-2 py-0.5 px-1">
          <ProfileImage
            className="w-9 h-9"
            src={session?.user.image}
            alt={session?.user.name}
            size={30}
          />
          <div className="grid gap-px text-sm">
            <p className="text-xs font-medium">{session?.user.name}</p>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {UserDropdownItem.map((item) => (
          <DropdownMenuItem
            key={item.id}
            className="items-center justify-between gap-2 cursor-pointer text-[13px]"
            asChild
          >
            <Link href={item.href}>
              <span>{item.title}</span>
              <item.icon size={16} />
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <Theme />

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="items-center justify-between !text-destructive cursor-pointer text-[13px]"
          onClick={() => SignOut()}
        >
          <span>Sign out</span>
          <LogOut size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
