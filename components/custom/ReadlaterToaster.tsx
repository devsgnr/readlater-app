"use client";

import IconPicker from "@/components/custom/IconPicker";
import { Toaster } from "../ui/sonner";

const ReadlaterToaster = () => {
  return (
    <Toaster
      toastOptions={{
        classNames: {
          toast: "rounded-lg shadow-md !py-3 !px-4 !h-fit gap-[8px]",
          title: "text-black text-[13px]",
          icon: "text-foreground",
          closeButton: "text-black border-none absolute !top-[0%] !left-[92%] !translate-y-[90%]",
        },
      }}
      position="top-center"
      offset={10}
      icons={{
        success: <IconPicker className="mt-0.5" type="check" size={20} />,
      }}
      closeButton
    />
  );
};

export default ReadlaterToaster;
