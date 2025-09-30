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

// Providers -- Dynamic Import
const PaymentProcessorProvider = dynamic(() => import("@/providers/PaymentProcessorProvider"), {
  ssr: false,
});

// Components
import AppNavbar from "./components/AppNavbar";
import ReadlaterToaster from "@/components/custom/ReadlaterToaster";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "./components/TopBar";
import { useSidebarStore } from "@/stores/SidebarStateStore";
import AccountsProvider from "@/providers/AccountsProvider";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, actions } = useSidebarStore();

  return (
    <ThemeProvider
      storageKey="readlater-theme"
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <QueryClientProvider client={AppTanstackQueryClient}>
        <AuthProvider>
          <AccountsProvider>
            <PaymentProcessorProvider>
              <ApolloProvider client={AppApolloClient}>
                <PaymentsProvider>
                  {/** Sidebar Layout Level */}
                  <SidebarProvider open={open} onOpenChange={(v) => actions.setSidebarState(v)}>
                    <AppNavbar />
                    <main className="w-full whitespace-nowrap box-border overflow-x-hidden">
                      <TopBar />
                      {/** Main Body */}
                      <div className="w-full box-border">{children}</div>
                    </main>
                  </SidebarProvider>
                </PaymentsProvider>

                {/** Notification Toast Provider - via Sonner & shadcn */}
                <ReadlaterToaster />
              </ApolloProvider>
            </PaymentProcessorProvider>
          </AccountsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
