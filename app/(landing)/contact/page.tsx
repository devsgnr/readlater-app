import type { Metadata } from "next";
import { TextScramble } from "@/components/ui/text-scramble";
import ServerClient from "@/lib/server-graphql-client";
import { SectionResponse } from "@/types/home";
import { GET_CONTACT_SECTION } from "../../api/hooks/queries";
import RenderMarkdown from "@/components/custom/RenderMarkdown";
import { Plus } from "lucide-react";

const Contact = async () => {
  const contact = await ServerClient.request<SectionResponse>(GET_CONTACT_SECTION);

  return (
    <div className="flex flex-col gap-px">
      <div className="h-[calc(100vh-100px)] flex flex-col gap-px items-start">
        <div className="container mx-auto max-w-7xl flex flex-col h-full">
          <div className="bg-white w-full h-full flex flex-col gap-7 px-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)] relative">
            <Plus
              strokeWidth={1}
              size={32}
              className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-black"
            />

            <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400">
              [<TextScramble>Contact Us</TextScramble>]
            </div>

            <h1 className="text-slate-900 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl text-3xl font-bold tracking-tight max-w-[20ch]">
              Your questions, ideas, and collaborations start here, building better sleep health
            </h1>
            <p className="2xl:text-lg sm:text-base text-sm text-zinc-700 font-medium tracking-[-0.020rem] max-w-[50ch]">
              Reach out to the Nigerian Sleep Society—we&apos;re here to listen, connect, and work
              with you toward advancing sleep health across Nigeria.
            </p>

            <div className="text-sm prose prose-sm prose-a:block">
              <RenderMarkdown markdown={contact.section.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Nigerian Sleep Society - Contact",
  description:
    "Your questions, ideas, and collaborations start here, building better sleep health. Reach out to the Nigerian Sleep Society—we're here to listen, connect, and work with you toward advancing sleep health across Nigeria.",
  openGraph: {
    title: "Nigerian Sleep Society - Contact",
    images: "https://nss.org.ng/og-image-contact.png",
    description:
      "Your questions, ideas, and collaborations start here, building better sleep health. Reach out to the Nigerian Sleep Society—we're here to listen, connect, and work with you toward advancing sleep health across Nigeria.",
    url: "https://nss.org.ng/contact",
    siteName: "Nigerian Sleep Society",
    type: "website",
    locale: "en-US",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default Contact;
