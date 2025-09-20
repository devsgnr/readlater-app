import { DayterNextImage } from "@/components/custom/Image";
import { TextScramble } from "@/components/ui/text-scramble";
import { SectionResponse } from "@/types/home";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  data: SectionResponse;
}

const About = ({ data }: Props) => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col gap-px h-full">
      <div className="w-full h-full flex flex-col gap-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)]">
        <div className="bg-white h-full flex flex-col gap-5 py-10 shadow-[0_0_0_1px_var(--color-zinc-200)]">
          <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400 px-5">
            [<TextScramble>{data.section.title}</TextScramble>]
          </div>

          <p className="2xl:text-lg xl:text-base lg:text-lg md:text-base text-base text-zinc-500 font-medium tracking-[-0.020rem] max-w-[50ch] px-5">
            The Nigerian Sleep Society, in partnership with the World Sleep Society, is dedicated to
            advancing sleep health through research, education, and collaboration — improving lives
            in Nigeria and beyond.
          </p>
        </div>

        <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 gap-px shadow-[0_0_0_1px_var(--color-zinc-200)]">
          <div className="relative z-0 w-full h-[500px] shadow-[0_0_0_1px_var(--color-zinc-200)]">
            <DayterNextImage
              className="w-full h-full object-cover object-top bg-white"
              src={data.section.image.url}
              alt={data.section.title}
            />
          </div>

          <div className="h-fit text-zinc-700 sm:text-base text-sm mt-auto px-5 py-3 prose prose-sm">
            <Markdown>{data.section.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
