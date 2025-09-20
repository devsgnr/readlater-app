import { useMutation, useQuery } from "@apollo/client";
import { CREATE_MEMBER, CREATE_PAYMENT_AND_MEMBER, UPDATE_MEMBER } from "./mutations";
import { GET_MEMBER_DETAILS } from "./queries";

const useCreateMember = () => {
  const [mutate, { data, loading, ...rest }] = useMutation(CREATE_MEMBER);

  return {
    createMember: mutate,
    createMemberRes: data,
    createMemberLoading: loading,
    ...rest,
  };
};

const useCreatePaymentAndMember = () => {
  const [mutate, { data, loading, ...rest }] = useMutation(CREATE_PAYMENT_AND_MEMBER, {
    refetchQueries: [{ query: GET_MEMBER_DETAILS }],
  });

  return {
    createPaymentAndMember: mutate,
    createPaymentAndMemberLoading: loading,
    ...rest,
  };
};

const useUpdateMember = () => {
  const [mutate, { data, loading, ...rest }] = useMutation(UPDATE_MEMBER, {
    refetchQueries: [{ query: GET_MEMBER_DETAILS }],
  });

  return {
    updateMember: mutate,
    updateMemberRes: data,
    updateMemberLoading: loading,
    ...rest,
  };
};

const useGetMemberDetails = () => {
  return useQuery(GET_MEMBER_DETAILS);
};

export { useCreateMember, useUpdateMember, useCreatePaymentAndMember, useGetMemberDetails };
