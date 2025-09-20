import { createContext } from "react";
import type PaystackPop from "@paystack/inline-js";

type PaymentProcessorContextType = {
  Pay: PaystackPop;
  isLoading: boolean;
};

const PaymentProcessorContext = createContext<PaymentProcessorContextType>(
  {} as PaymentProcessorContextType
);

export type { PaymentProcessorContextType };
export default PaymentProcessorContext;
