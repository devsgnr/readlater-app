"use client";

import { useGetTiers } from "@/app/api/hooks/tiers";
import LoadingPage from "@/app/loading";
import AuthContext from "@/context/AuthContext";
import { AuthClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = AuthClient.useSession();
  const { data } = useGetTiers();

  const isOnHomePage = pathname === "/membership";
  const isOnLogin = pathname.includes("sign-in");
  const isOnRegister = pathname.includes("sign-up");
  const isOnAuthPage = isOnLogin || isOnRegister;

  if (isPending) return <LoadingPage />;

  if (!isPending && isOnHomePage && session === null) {
    router.push("/membership/sign-in");
  }

  if (!isPending && isOnAuthPage && session !== null) {
    router.push("/membership");
  }

  return (
    <AuthContext.Provider value={{ session, isLoading: isPending, tiers: data }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
