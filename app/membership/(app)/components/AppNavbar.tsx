"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import UserDropdown from "./UserDropDown";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NSSLogoIcon from "@/components/icons/nss-logo-icon";

const AppNavbar = () => {
  const pathname = usePathname();

  const NAV_ITEM = [
    { id: nanoid(), title: "Overview", href: "/membership" },
    { id: nanoid(), title: "Profile", href: "/membership/profile" },
    { id: nanoid(), title: "Payments", href: "/membership/payments" },
    { id: nanoid(), title: "Elections", href: "/membership/elections" },
    // { id: nanoid(), title: "Events", href: "/membership/events" },
  ];

  return (
    <nav className="bg-white w-full sticky top-0 left-0 z-999 flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-2 px-4 border-b-[0.5px] border-muted">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Nigerian Sleep Society</p>
          </div>

          <UserDropdown />
        </div>

        <div className="flex items-end gap-1 py-2 px-4">
          {NAV_ITEM.map((link) => (
            <Link
              data-id={link.id}
              className={cn("text-sm py-1 px-3 rounded-md flex items-center justify-center", {
                "font-medium bg-secondary": pathname === link.href,
              })}
              key={link.id}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
