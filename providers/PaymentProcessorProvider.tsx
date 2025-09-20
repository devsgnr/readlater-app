import PaymentProcessorContext from "@/context/PaymentProcessorContext";
import { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";

type Props = {
  children: React.ReactNode;
};

const PaymentProcessorProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [Pay, setPay] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPay(new PaystackPop());
      setIsLoading(false);
    }
  }, []);

  return (
    <PaymentProcessorContext.Provider value={{ Pay, isLoading: isLoading }}>
      {children}
    </PaymentProcessorContext.Provider>
  );
};

export default PaymentProcessorProvider;
