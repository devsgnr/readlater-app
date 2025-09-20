"use client";

import Link from "next/link";
import NSSLogo from "@/components/icons/nss-logo";
import { AuthClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { UPPER_NAV_ITEM } from "./constants";
import ResponsiveMenu from "./responsive-menu";
import { QueryClientProvider } from "@tanstack/react-query";
import AppTanstackQueryClient from "@/lib/query-client";
import HomeUserDropdown from "./home-user-dropdown";

const UpperNavBar = () => {
  const { data } = AuthClient.useSession();

  return (
    <QueryClientProvider client={AppTanstackQueryClient}>
      <div className="w-full bg-white shadow-[0_0_0_1px_var(--color-zinc-200)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between text-[13px] shadow-[0_0_0_1px_var(--color-zinc-200)]">
            <Link className="ml-2.5 -mt-1" href="/">
              <NSSLogo width={185} height={40} />
            </Link>

            {!data && (
              <div className="items-center justify-end gap-px font-mono uppercase sm:flex hidden">
                {UPPER_NAV_ITEM.map((link) => (
                  <Button
                    key={link.id}
                    asChild
                    size="default"
                    variant="ghost"
                    className="rounded-none text-xs transition-colors duration-300 text-zinc-900 hover:bg-zinc-900 hover:text-white shadow-[0_0_0_1px_var(--color-zinc-200)] p-4 py-6!"
                  >
                    <Link href={link.link}>{link.title}</Link>
                  </Button>
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
