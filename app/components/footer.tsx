"use client";

import Link from "next/link";
import { NAV_ITEM, UPPER_NAV_ITEM } from "./constants";
import { AuthClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import NSSLogoIcon from "@/components/icons/nss-logo-icon";

const Footer = () => {
  const { data } = AuthClient.useSession();

  return (
    <footer className="bg-white w-full sm:h-[400px] flex flex-col mt-px">
      <div className="h-full text-zinc-700 w-full shadow-[0_0_0_1px_var(--color-zinc-200)]">
        <div className="container mx-auto max-w-7xl flex sm:flex-row flex-col items-start gap-px text-sm h-full">
          <div className="h-full sm:w-fit w-full shadow-[0_0_0_1px_var(--color-zinc-200)]">
            <div className="flex flex-col p-3 pr-10 gap-3 mt-auto">
              <p className="font-mono uppercase text-xs font-semibold">Pages</p>
              <div className="h-full flex flex-col items-start gap-1">
                {NAV_ITEM.map((link) => (
                  <Link className="flex items-center justify-center" href={link.link} key={link.id}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "h-full sm:w-fit w-full justify-self-end shadow-[0_0_0_1px_var(--color-zinc-200)]",
              { hidden: data },
            )}
          >
            <div className="flex flex-col p-3 pr-10 gap-3 mt-auto">
              <p className="font-mono uppercase text-xs font-semibold">Membership</p>
              <div className="h-full flex flex-col items-start gap-1">
                {UPPER_NAV_ITEM.map((link) => (
                  <Link className="flex items-center justify-center" href={link.link} key={link.id}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:w-fit sm:ml-auto h-full w-full gap-px">
            <div className="h-full sm:w-fit sm:order-2 order-1 w-full flex flex-col font-medium shadow-[0_0_0_1px_var(--color-zinc-200)]">
              <div className="flex flex-col items-start p-3 gap-3 mt-auto font-mono">
                <div className="h-full flex flex-col items-start gap-1 text-xs text-muted-foreground">
                  <p>
                    Developed by{" "}
                    <Link
                      className="font-semibold"
                      href="https://devsgnr.xyz"
                      referrerPolicy="no-referrer"
                      target="_blank"
                    >
                      DEVSGNR
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full sm:w-fit w-full flex flex-col font-medium shadow-[0_0_0_1px_var(--color-zinc-200)]">
              <div className="flex flex-col items-start p-3 gap-3 mt-auto">
                <div className="h-full flex flex-col items-start gap-1 text-xs text-muted-foreground">
                  <div className="w-fit mb-2">
                    <NSSLogoIcon width={145} height={60} />
                  </div>

                  <p>NSS (Nigerian Sleep Society)</p>
                  <p>Department of Medicine,</p>
                  <p>Obafemi Awolowo University Teaching Hospitals&apos; Complex,</p>
                  <p>Ile-Ife, Nigeria.</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>&copy;{new Date().getFullYear()} NSS (Nigerian Sleep Society)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
