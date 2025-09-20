import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import ServerClient from "@/lib/server-graphql-client";
import Link from "next/link";
import { ExcoResponse, SectionResponse } from "@/types/home";
import Membership from "./components/membership";
import { GET_ABOUT_SECTION, GET_NSS_EXCOS } from "../api/hooks/queries";
import About from "./components/about";
import { prisma } from "@/lib/prisma-client";
import Excos from "./components/excos";
import Invite from "./components/invite";

const Home = async () => {
  const tiers = await prisma.membershipFee.findMany();
  const about = await ServerClient.request<SectionResponse>(GET_ABOUT_SECTION);
  const excos = await ServerClient.request<ExcoResponse>(GET_NSS_EXCOS);

  return (
    <div className="flex flex-col gap-px">
      <div className="h-[calc(100vh-100px)] flex flex-col gap-px items-start">
        <div className="container mx-auto max-w-7xl flex flex-col h-full">
          <div className="bg-white w-full h-full flex flex-col gap-7 px-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)]">
            <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400">
              [<TextScramble>Nigerian Sleep Society</TextScramble>]
            </div>

            <h1 className="text-slate-900 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl text-3xl font-bold tracking-tight max-w-[20ch]">
              Improving sleep care and enhancing sleep health to improve lives in Nigeria as part of
              a global effort.
            </h1>
            <p className="2xl:text-lg sm:text-base text-sm text-zinc-700 font-medium tracking-[-0.020rem] max-w-[50ch]">
              The Nigerian Sleep Society (affiliated with the World Sleep Society) is focused on
              promoting the sharing of medical knowledge and research surrounding sleep care and
              health, advocate for the interests of its members and the public—and organize
              conferences, seminars, and workshops.
            </p>
          </div>
        </div>

        <div className="w-full shadow-[0_0_0_1px_var(--color-zinc-200)]">
          <div className="container mx-auto max-w-7xl flex sm:flex-row flex-col items-center gap-px font-mono uppercase font-semibold">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="bg-white py-10 rounded-none w-full transition-colors duration-300 text-zinc-700 hover:bg-zinc-900 hover:text-white shadow-[0_0_0_1px_var(--color-zinc-200)]"
            >
              <Link href="/membership/sign-up">Become a Member</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="bg-white py-10 rounded-none w-full transition-colors duration-300 text-zinc-700 hover:bg-zinc-900 hover:text-white shadow-[0_0_0_1px_var(--color-zinc-200)]"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/** About Section */}
      <About data={about} />

      {/** Excos Section */}
      <Excos data={excos} />

      {/** Membership Section */}
      <Membership data={tiers} />

      {/** Invite Section */}
      <Invite />
    </div>
  );
};

export default Home;
