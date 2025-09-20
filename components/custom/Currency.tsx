import numeral from "numeral";

type Props = {
  amount: number;
};

const Currency = ({ amount }: Props) => {
  return <>₦{numeral(amount / 100).format("0,0.00")}</>;
};

export default Currency;
