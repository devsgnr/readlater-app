type MembershipFees = {
  id: string;
  tier: string;
  amount: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type Member = {
  id: string;
  userId: string;
  certification: string;
  profession: string;
  role: string;
  status: string;
  totalDue: number;
  phoneNumber: string;
  lastPaymentDate: Date;
  membershipFee: MembershipFees;
  membershipFeeId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type { MembershipFees, Member };
