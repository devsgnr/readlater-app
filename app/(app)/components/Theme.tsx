"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Theme = () => {
  const { setTheme, theme } = useTheme();

  const DEFAULT_CLASS = "w-5 h-5 rounded-full cursor-pointer flex items-center justify-center";

  return (
    <div className="flex justify-between items-center gap-2 px-2 py-1">
      <p className="text-[13px]">Theme</p>

      <div className="w-fit rounded-full grid grid-cols-[20px_20px_20px] gap-1 bg-muted p-0.5">
        <div
          className={cn(DEFAULT_CLASS, {
            "bg-background": theme === "light",
          })}
          role="button"
          onClick={() => setTheme("light")}
        >
          <Sun size={13} />
        </div>

        <div
          className={cn(DEFAULT_CLASS, {
            "bg-background": theme === "system",
          })}
          role="button"
          onClick={() => setTheme("system")}
        >
          <Monitor size={13} />
        </div>

        <div
          className={cn(DEFAULT_CLASS, {
            "bg-background": theme === "dark",
          })}
          role="button"
          onClick={() => setTheme("dark")}
        >
          <Moon size={13} />
        </div>
      </div>
    </div>
  );
};

export default Theme;
