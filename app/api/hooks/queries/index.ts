import { gql } from "@apollo/client";

const GET_MEMBER_DETAILS = gql`
  query GetMemberDetails {
    fetchMember {
      profession
      certification
      role
      status
      totalDue
      phoneNumber
      lastPaymentDate
      membershipFeeId
      membershipFee {
        id
        tier
        amount
      }
      createdAt
      updatedAt
    }
  }
`;

const GET_PAYMENTS = gql`
  query GetPayments($page: Int!, $pageSize: Int!) {
    getPayments(page: $page, pageSize: $pageSize) {
      items {
        id
        accessCode
        amount
        description
        reference
        trans
        status
        transaction
        trxref
        paymentDate
        createdAt
        updatedAt
      }
      totalCount
      totalPages
      currentPage
      pageSize
    }
  }
`;

const GET_MEMBERSHIP_FEES = gql`
  query GetMembershipFees {
    getMembershipFees {
      id
      tier
      amount
      description
      createdAt
      updatedAt
    }
  }
`;

const GET_ABOUT_SECTION = gql`
  query GetAboutSection {
    section(where: { slug: "about-nss" }) {
      id
      title
      image {
        url
      }
      content
    }
  }
`;

const GET_NSS_EXCOS = gql`
  query NSSExcos {
    nssExcos(orderBy: positionId_ASC) {
      id
      positionId
      fullName
      position
      emailAddress
      qualifications
      institutionalAffliation
      picture {
        url
      }
    }
  }
`;

const GET_CONTACT_SECTION = gql`
  query GetContactSection {
    section(where: { slug: "contact-us" }) {
      id
      title
      image {
        url
      }
      content
    }
  }
`;

export {
  GET_MEMBER_DETAILS,
  GET_PAYMENTS,
  GET_ABOUT_SECTION,
  GET_NSS_EXCOS,
  GET_CONTACT_SECTION,
  GET_MEMBERSHIP_FEES,
};
