"use client";

import dynamic from "next/dynamic";

// API Clients
import AppTanstackQueryClient from "@/lib/query-client";
import AppApolloClient from "@/lib/apollo-client";

// Providers
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client";
import AuthProvider from "@/providers/AuthProvider";
import PaymentsProvider from "@/providers/PaymentsProvider";
import MemberDetailsProvider from "@/providers/MemberDetailsProvider";

// Providers -- Dynamic Import
const PaymentProcessorProvider = dynamic(() => import("@/providers/PaymentProcessorProvider"), {
  ssr: false,
});

// Components
import AppNavbar from "./components/AppNavbar";
import ReadlaterToaster from "@/components/custom/ReadlaterToaster";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      storageKey="nss-theme"
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <QueryClientProvider client={AppTanstackQueryClient}>
        <AuthProvider>
          <PaymentProcessorProvider>
            <ApolloProvider client={AppApolloClient}>
              <MemberDetailsProvider>
                <PaymentsProvider>
                  {/** Sidebar Layout Level */}
                  <AppNavbar />
                  <main className="w-full flex items-start gap-0 whitespace-nowrap box-border overflow-x-hidden p-2.5">
                    {/** Main Body */}
                    <div className="w-full box-border pr-2 py-2 flex-1">{children}</div>
                  </main>
                </PaymentsProvider>
              </MemberDetailsProvider>

              {/** Notification Toast Provider - via Sonner & shadcn */}
              <ReadlaterToaster />
            </ApolloProvider>
          </PaymentProcessorProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
