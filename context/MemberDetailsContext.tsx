import { Member } from "@/types/member";
import { createContext } from "react";

type MemberDetailsContextType = {
  member: Member;
  isLoadingMember: boolean;
};

const MemberDetailsContext = createContext<MemberDetailsContextType>(
  {} as MemberDetailsContextType,
);

export type { MemberDetailsContextType };
export { MemberDetailsContext };
