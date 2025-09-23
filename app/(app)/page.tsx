"use client";

import { useAuthContext } from "@/lib/hooks";

const Home = () => {
  const { session } = useAuthContext();

  return (
    <div className="py-8 px-6">
      <div className="w-full flex sm:items-end items-start justify-between gap-4 sm:flex-row flex-col mb-8">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm text-zinc-500 font-medium">Welcome, {session?.user.name}</p>
          <h1 className="text-2xl font-bold tracking-tight">Your summary</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
