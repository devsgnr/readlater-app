"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import UserDropdown from "./UserDropDown";
import { NavItem } from "./constant";

const AppNavbar = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Readlater</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="group"
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="group-data-[active=true]:stroke-3 group-data-[active=false]:stroke-accent-foreground" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppNavbar;
