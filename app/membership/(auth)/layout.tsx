"use client";

import queryClient from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/providers/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import AppApolloClient from "@/lib/apollo-client";
import NSSToaster from "@/components/custom/NSSToaster";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ApolloProvider client={AppApolloClient}>
          <div className="w-full h-screen flex items-center justify-center bg-card dark:bg-background">
            <div className="sm:w-80 w-72 mx-auto ">
              {children}

              <NSSToaster />
            </div>
          </div>
        </ApolloProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AuthLayout;
