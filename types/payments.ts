type PaymentType = {
  id: string;
  userId: string;
  accessCode: string;
  amount: number;
  description: string;
  reference?: string;
  trans?: string;
  status?: string;
  transaction?: string;
  trxref?: string;
  paymentDate: string;
  periodMonth: number;
  periodYear: number;
  createdAt: string;
  updatedAt: string;
};

type PaymentRes = {
  items: Array<PaymentType>;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};

export type { PaymentType, PaymentRes };
