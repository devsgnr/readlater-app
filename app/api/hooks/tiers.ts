"use client";

import { useQuery } from "@tanstack/react-query";
import { getMembershipFess } from "../fees/server";

const useGetTiers = () => {
  return useQuery({
    queryFn: () => getMembershipFess(),
    queryKey: ["getTiers"],
    initialData: [],
    refetchOnWindowFocus: false,
  });
};

export { useGetTiers };
