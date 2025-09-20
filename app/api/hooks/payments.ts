import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PAYMENTS, INITIALIZE_PAYMENTS, UPDATE_PAYMENT_AND_MEMBER } from "./mutations";
import { GET_MEMBER_DETAILS, GET_PAYMENTS } from "./queries";

type useGetPaymentsType = {
  page: number;
  pageSize: number;
};

const useInitializePayment = () => {
  const [mutate, { data, loading }] = useMutation(INITIALIZE_PAYMENTS);

  return { initPayment: mutate, initRes: data, initLoading: loading };
};

const useCreatePayment = () => {
  const [mutate, { data, loading }] = useMutation(CREATE_PAYMENTS);

  return {
    createPayment: mutate,
    createPayRes: data,
    createPayLoading: loading,
  };
};

const useUpdatePayment = () => {
  const [mutate, { data, loading }] = useMutation(UPDATE_PAYMENT_AND_MEMBER, {
    refetchQueries: [
      { query: GET_PAYMENTS, variables: { page: 1, pageSize: 10 } },
      { query: GET_MEMBER_DETAILS },
    ],
    awaitRefetchQueries: true,
  });

  return {
    updatePayment: mutate,
    updatePayRes: data,
    updatePayLoading: loading,
  };
};

const useGetPayments = (variables: useGetPaymentsType) => {
  return useQuery(GET_PAYMENTS, { variables });
};

export { useInitializePayment, useCreatePayment, useUpdatePayment, useGetPayments };
export type { useGetPaymentsType };
