"use client";

import { Button } from "@/components/ui/button";
import NSSLogoIcon from "@/components/icons/nss-logo-icon";
import { useSignOut } from "./api/hooks/auth";

export default function GlobalError({ reset }: { reset: () => void }) {
  const { mutate } = useSignOut();

  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center text-center">
      <NSSLogoIcon width={48} height={48} />
      <h2>Something went wrong!</h2>
      <p className="text-sm">
        Ooops! we are working to solve this issue, if this issue persists,
        contact us
      </p>

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={() => reset()}>
          Try again
        </Button>
        <Button onClick={() => mutate()}>Log out</Button>
      </div>
    </div>
  );
}
