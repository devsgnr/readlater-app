import { useGetMemberDetails } from "@/app/api/hooks/member";
import { MemberDetailsContext } from "@/context/MemberDetailsContext";

interface Props {
  children: React.ReactNode;
}

const MemberDetailsProvider = ({ children }: Props) => {
  const { data, loading } = useGetMemberDetails();

  return (
    <MemberDetailsContext.Provider value={{ member: data?.fetchMember, isLoadingMember: loading }}>
      {children}
    </MemberDetailsContext.Provider>
  );
};

export default MemberDetailsProvider;
