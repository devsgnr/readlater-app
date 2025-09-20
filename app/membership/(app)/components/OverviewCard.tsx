import { Card, CardContent } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
}
const OverviewCard = ({ children }: Props) => {
  return <Card className="bg-neutral-200/80 p-[3px] border-none">{children}</Card>;
};

const TopSection = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-between font-mono uppercase tracking-wider font-semibold text-[11.5px] py-0.5 pb-1 px-1.5 text-zinc-500">
      {children}
    </div>
  );
};

const Content = ({ children }: Props) => {
  return (
    <CardContent className="bg-white p-3 rounded-md flex flex-col gap-1.5 ring-1 ring-neutral-950/10 drop-shadow-sm">
      {children}
    </CardContent>
  );
};

TopSection.displayName = "OverviewCard.TopSection";
Content.displayName = "OverviewCard.Content";

OverviewCard.TopSection = TopSection;
OverviewCard.Content = Content;

export default OverviewCard;
