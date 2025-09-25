"use client";

import LoadingPage from "@/app/loading";
import AuthContext from "@/context/AuthContext";
import { AuthClient } from "@/lib/auth-client";
import { useGetUserAccount } from "@/app/api/hooks/auth";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = AuthClient.useSession();
  const { data } = useGetUserAccount();

  const isOnSignin = pathname.includes("sign-in");
  const isOnSignup = pathname.includes("sign-up");
  const isOnAuthPage = isOnSignin || isOnSignup;
  const isOnRoot = !isOnAuthPage;

  if (isPending) return <LoadingPage />;

  if (!isPending && isOnRoot && session === null) {
    router.push("/sign-in");
  }

  if (!isPending && isOnAuthPage && session !== null) {
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ session, accounts: data?.data, isLoading: isPending }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
