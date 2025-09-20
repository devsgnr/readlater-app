type Tiers = {
  id: string;
  tier: string;
  amount: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type SeedTiers = {
  id: string;
  tier: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type Section = {
  id: string;
  title: string;
  image: {
    url: string;
  };
  content: string;
};

type Exco = {
  id: string;
  positionId: number;
  fullName: string;
  position: string;
  emailAddress: string;
  qualifications: string;
  institutionalAffliation: string;
  picture: {
    url: string;
  };
};

type ExcoResponse = {
  nssExcos: Array<Exco>;
};

type TiersResponse = Array<Tiers>;
type SeedTierResponse = {
  nSSMembershipTiers: Array<SeedTiers>;
};

type SectionResponse = {
  section: Section;
};

export type {
  Tiers,
  TiersResponse,
  SeedTiers,
  SeedTierResponse,
  Section,
  SectionResponse,
  Exco,
  ExcoResponse,
};
