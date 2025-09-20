import { useGetPayments } from "@/app/api/hooks/payments";
import { PageData, PaymentsContext } from "@/context/PaymentsContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const PaymentsProvider = ({ children }: Props) => {
  const [pageData, setPageData] = useState<PageData>({ page: 1, pageSize: 10 });
  const { data, loading } = useGetPayments(pageData);

  return (
    <PaymentsContext.Provider
      value={{ payments: data?.getPayments, isLoadingPayments: loading, pageData, setPageData }}
    >
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsProvider;
