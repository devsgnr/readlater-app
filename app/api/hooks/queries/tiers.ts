import { gql } from "@apollo/client";

const GetTiers = gql`
  query GetTiers {
    nSSMembershipTiers {
      id
      price
      tier
      description
      markdown
    }
  }
`;

export { GetTiers };
