"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

const TopBar = () => {
  return (
    <div className="bg-background w-full h-fit py-2 sticky top-0 left-0 border-b border-muted">
      <div className="flex items-center gap-3 px-3">
        <SidebarTrigger className="relative" />
      </div>
    </div>
  );
};

export default TopBar;
