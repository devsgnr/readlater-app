import { TextScramble } from "@/components/ui/text-scramble";
import { ExcoResponse } from "@/types/home";
import { Plus } from "lucide-react";

const Invite = () => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col gap-px h-full">
      <div className="w-full h-full flex flex-col gap-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)] py-5">
        <div className="h-full py-10 px-5 flex flex-col items-center text-center gap-5 shadow-[0_0_0_1px_var(--color-zinc-200)] bg-white relative">
          <Plus
            strokeWidth={1}
            size={32}
            className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-black"
          />

          <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400 px-5">
            [<TextScramble>Join Today</TextScramble>]
          </div>

          <p className="2xl:text-lg xl:text-base lg:text-lg md:text-base text-base text-zinc-500 font-medium tracking-[-0.020rem] max-w-[40ch]">
            &quot;Sleep is an essential part of life — but more important, sleep is a gift.&quot;
          </p>

          <p className="2xl:text-lg xl:text-base lg:text-lg md:text-base text-base text-zinc-500 font-medium tracking-[-0.020rem] max-w-[45ch] italic">
            — William C. Dement
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invite;
