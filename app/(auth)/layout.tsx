"use client";

import queryClient from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/providers/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import AppApolloClient from "@/lib/apollo-client";
import NSSToaster from "@/components/custom/ReadlaterToaster";
import { ThemeProvider } from "next-themes";
import ReadlaterToaster from "@/components/custom/ReadlaterToaster";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      storageKey="readlater-theme"
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
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

        <ReadlaterToaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AuthLayout;
