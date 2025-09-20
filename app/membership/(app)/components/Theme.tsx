"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Theme = () => {
  const { setTheme, theme } = useTheme();

  const DEFAULT_CLASS =
    "w-6 h-6 rounded-full cursor-pointer flex items-center justify-center";

  return (
    <div className="flex justify-between items-center gap-2 px-2 py-1">
      <p className="text-sm">Switch Theme</p>

      <div className="w-fit rounded-full grid grid-cols-[24px_24px] gap-1 bg-muted p-0.5">
        <div
          className={cn(DEFAULT_CLASS, {
            "bg-background": theme === "light",
          })}
          role="button"
          onClick={() => setTheme("light")}
        >
          <Sun size={15} />
        </div>

        <div
          className={cn(DEFAULT_CLASS, {
            "bg-background": theme === "dark",
          })}
          role="button"
          onClick={() => setTheme("dark")}
        >
          <Moon size={15} />
        </div>
      </div>
    </div>
  );
};

export default Theme;
