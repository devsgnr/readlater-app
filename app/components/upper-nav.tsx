"use client";

import Link from "next/link";
import Logo from "@/components/icons/logo";
import { AuthClient } from "@/lib/auth-client";
import { NAV_ITEM } from "./constants";
import ResponsiveMenu from "./responsive-menu";
import { QueryClientProvider } from "@tanstack/react-query";
import AppTanstackQueryClient from "@/lib/query-client";
import HomeUserDropdown from "./home-user-dropdown";

const UpperNavBar = () => {
  const { data } = AuthClient.useSession();

  return (
    <QueryClientProvider client={AppTanstackQueryClient}>
      <div className="w-full bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between text-[13px] p-3 bg-transparent backdrop-blur-md">
            <Link className="hover:opacity-80" href="/">
              <Logo width={145} height={30} />
            </Link>

            {!data && (
              <div className="items-center justify-end gap-6 sm:flex hidden">
                {NAV_ITEM.map((link) => (
                  <Link className="font-medium" key={link.id} href={link.link}>
                    {link.title}
                  </Link>
                ))}
              </div>
            )}

            <ResponsiveMenu />

            {data && (
              <div className="items-center justify-end gap-1 sm:flex hidden p-2">
                <HomeUserDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default UpperNavBar;
