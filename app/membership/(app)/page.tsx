"use client";

import { useAuthContext, useMemberDetailsContext } from "@/lib/hooks";
import OverviewDetails from "./components/OverviewDetails";
import StatusBadge from "@/components/custom/StatusBadge";
import Link from "next/link";

const Home = () => {
  const { session } = useAuthContext();
  const { member } = useMemberDetailsContext();

  return (
    <div className="container mx-auto py-8 sm:px-20 px-3">
      <div className="w-full flex sm:items-end items-start justify-between gap-4 sm:flex-row flex-col mb-8">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm text-zinc-500 font-medium">Welcome, {session?.user.name}</p>
          <h1 className="text-2xl font-bold tracking-tight">Your summary</h1>
        </div>

        {/* <Link href="/membership/payments">
          <StatusBadge status={member?.status} />
        </Link> */}
      </div>

      <OverviewDetails />
    </div>
  );
};

export default Home;
