"use client";

import LogoIcon from "@/components/icons/logo-icon";

const Footer = () => {
  return (
    <footer className="bg-white w-full sm:h-[400px] flex flex-col mt-px">
      <div className="h-full text-zinc-700 w-full shadow-[0_0_0_1px_var(--color-zinc-200)]">
        <div className="container mx-auto max-w-6xl flex sm:flex-row flex-col sm:justify-between items-start gap-px text-sm h-full">
          <div className="h-full sm:w-fit w-full flex flex-col font-medium">
            <div className="flex flex-col items-start p-3 gap-3 mt-auto">
              <div className="h-full flex flex-col items-start gap-1 text-xs text-muted-foreground">
                <div className="w-fit mb-2">
                  <LogoIcon width={40} height={40} />
                </div>

                <p>Readlater</p>
                <p>Save now. Find faster. Say goodbye to inbox clutter</p>
              </div>
              <div className="text-xs text-muted-foreground">
                <p>&copy;{new Date().getFullYear()} Readlater</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
