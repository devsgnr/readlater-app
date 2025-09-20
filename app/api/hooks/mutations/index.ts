import { gql } from "@apollo/client";

const INITIALIZE_PAYMENTS = gql`
  mutation InitializePayment($initPay: InitPaymentInput!) {
    initializePayment(initPay: $initPay) {
      message
      status
      data {
        access_code
        authorization_url
        reference
      }
    }
  }
`;

const CREATE_PAYMENTS = gql`
  mutation CreatePayment($createPay: CreatePaymentInput!) {
    createPayment(createPay: $createPay) {
      id
      userId
    }
  }
`;

const CREATE_PAYMENT_AND_MEMBER = gql`
  mutation CreateMemberAndPayment($createPay: CreatePaymentInput!, $member: MemberInput!) {
    createPayment(createPay: $createPay) {
      id
      userId
    }
    createMember(member: $member) {
      id
      userId
    }
  }
`;

const UPDATE_PAYMENT_AND_MEMBER = gql`
  mutation UpdatePaymentAndMember(
    $updatePay: UpdatePaymentInput!
    $updateMember: UpdateMemberInput!
    $updateTotalDue: UpdateTotalDue!
  ) {
    updatePayment(updatePay: $updatePay) {
      id
      userId
    }
    updateMember(updateMember: $updateMember) {
      id
      userId
    }
    updateTotalDue(updateTotalDue: $updateTotalDue)
  }
`;

const CREATE_MEMBER = gql`
  mutation CreateMember($member: MemberInput!) {
    createMember(member: $member) {
      id
      userId
    }
  }
`;

const UPDATE_MEMBER = gql`
  mutation UpdateMember($updateMember: UpdateMemberInput!) {
    updateMember(updateMember: $updateMember) {
      id
      profession
    }
  }
`;

export {
  INITIALIZE_PAYMENTS,
  CREATE_PAYMENTS,
  CREATE_PAYMENT_AND_MEMBER,
  UPDATE_PAYMENT_AND_MEMBER,
  CREATE_MEMBER,
  UPDATE_MEMBER,
};
