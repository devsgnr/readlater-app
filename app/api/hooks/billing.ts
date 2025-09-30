import { AuthClient } from "@/lib/auth-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetProducts } from "./api-call";

type BillingPageData = {
  page: number;
  limit: number;
};

const useGetProducts = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: () => GetProducts(),
    refetchOnWindowFocus: false,
  });
};

const useGetCustomerState = () => {
  return useQuery({
    queryKey: ["getCustomerState"],
    queryFn: () => {
      return AuthClient.customer.state();
    },
    refetchOnWindowFocus: false,
  });
};

const useGetBenefits = (data: BillingPageData) => {
  return useQuery({
    queryKey: ["getBenefits"],
    queryFn: () => {
      return AuthClient.customer.benefits.list({ query: data });
    },
    refetchOnWindowFocus: false,
  });
};

const useCustomerPortal = () => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.customer.portal();
    },
  });
};

const useCheckout = () => {
  return useMutation({
    mutationFn: (data: { slug?: string; products: string[] }) => {
      return AuthClient.checkout(data);
    },
  });
};

export { useGetProducts, useGetCustomerState, useGetBenefits, useCustomerPortal, useCheckout };
