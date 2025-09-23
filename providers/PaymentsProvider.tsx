import { PageData, PaymentsContext } from "@/context/PaymentsContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const PaymentsProvider = ({ children }: Props) => {
  const [pageData, setPageData] = useState<PageData>({ page: 1, pageSize: 10 });

  return (
    <PaymentsContext.Provider value={{ isLoadingPayments: false, pageData, setPageData }}>
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsProvider;
