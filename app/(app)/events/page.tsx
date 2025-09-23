"use client";

import { useAuthContext } from "@/lib/hooks";

const Events = () => {
  const { session } = useAuthContext();

  return (
    <div className="container mx-auto py-8 sm:px-20 px-3">
      <h1 className="text-2xl font-bold tracking-tight">Events</h1>
      <p className="text-sm mb-8 text-muted-foreground">Coming soon!!</p>
    </div>
  );
};

export default Events;
