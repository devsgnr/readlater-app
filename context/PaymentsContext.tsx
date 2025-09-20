import { PaymentRes } from "@/types/payments";
import { SetStateAction } from "jotai";
import { createContext } from "react";

type PageData = {
  page: number;
  pageSize: number;
};

type PaymentsContextType = {
  payments: PaymentRes;
  isLoadingPayments: boolean;
  pageData: PageData;
  setPageData: React.Dispatch<SetStateAction<PageData>>;
};

const PaymentsContext = createContext<PaymentsContextType>({} as PaymentsContextType);

export type { PaymentsContextType, PageData };
export { PaymentsContext };
