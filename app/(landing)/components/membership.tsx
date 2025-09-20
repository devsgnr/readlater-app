import Currency from "@/components/custom/Currency";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { TiersResponse } from "@/types/home";
import { Crown, LucideIcon, Plus, Shield, Sprout } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  data: TiersResponse;
}
interface IconProp {
  tier: string;
}

const Icons: Record<string, JSX.Element> = {
  "Associate Member": <Sprout strokeWidth={3} size={14} />,
  Member: <Shield strokeWidth={3} size={14} />,
  Fellow: <Crown strokeWidth={3} size={14} />,
};

const Icon = ({ tier }: IconProp) => {
  const Resolved = () => Icons[tier];
  return <Resolved />;
};

const Membership = ({ data }: Props) => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col gap-px h-full">
      <div className="w-full h-full flex flex-col gap-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)] relative">
        <Plus
          strokeWidth={1}
          size={32}
          className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-black"
        />

        <div className="h-full py-10 flex flex-col gap-5 shadow-[0_0_0_1px_var(--color-zinc-200)] bg-white">
          <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400 px-5">
            [<TextScramble>Membership Tiers</TextScramble>]
          </div>

          <p className="2xl:text-lg xl:text-base lg:text-lg md:text-base text-base text-zinc-500 font-medium tracking-[-0.020rem] max-w-[50ch] px-5">
            Our membership tiers reflect the progressive stages of medical professionalism — guiding
            members from training to leadership and distinction
          </p>
        </div>

        <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 px-0 relative shadow-[0_0_0_1px_var(--color-zinc-200)]">
          <Plus
            strokeWidth={1}
            size={32}
            className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-black"
          />

          {data.map((tier) => (
            <div
              className="shadow-[0_0_0_1px_var(--color-zinc-200)] pt-5 flex flex-col gap-2 min-h-[450px] bg-white"
              key={tier.id}
            >
              <div className="flex items-center gap-1 text-zinc-600 px-5">
                <Icon tier={tier.tier} />
                <p className="font-mono font-semibold uppercase h-[18px] text-[13px] tracking-wider">
                  {tier.tier}
                </p>
              </div>

              <p className="h-fit sm:text-5xl text-4xl text-zinc-900 font-bold tracking-tight px-5">
                <Currency amount={tier.amount} />
              </p>

              <div className="h-fit text-zinc-700 text-sm mt-auto px-5">
                <Markdown>{tier.description}</Markdown>
              </div>

              <Button
                key={tier.id}
                asChild
                size="lg"
                variant="ghost"
                className="bg-white py-8 rounded-none w-full transition-colors duration-300 text-zinc-700 hover:bg-zinc-900 hover:text-white shadow-[0_0_0_1px_var(--color-zinc-200)] text-[13px] font-mono uppercase font-semibold"
              >
                <Link
                  href={{
                    pathname: "/membership/sign-up",
                    query: { id: tier.id },
                  }}
                >
                  Join as {tier.tier}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
