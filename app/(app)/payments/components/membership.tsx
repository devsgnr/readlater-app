import { useAuthContext } from "@/lib/hooks";

interface Props {
  amount: number;
}

const Membership = ({ amount }: Props) => {
  const { tiers } = useAuthContext();
  const membership = tiers && tiers.find((v) => v.amount === amount)?.tier;

  return <>{membership}</>;
};

export default Membership;
