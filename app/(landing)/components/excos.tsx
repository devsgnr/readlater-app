import { DayterNextImage } from "@/components/custom/Image";
import { TextScramble } from "@/components/ui/text-scramble";
import { ExcoResponse } from "@/types/home";
import { Mail, Plus } from "lucide-react";
import Link from "next/link";

interface Props {
  data: ExcoResponse;
}

const Excos = ({ data }: Props) => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col gap-px h-full">
      <div className="w-full h-full flex flex-col gap-5 justify-center shadow-[0_0_0_1px_var(--color-zinc-200)] py-5">
        <div className="h-full py-10 flex flex-col gap-5 shadow-[0_0_0_1px_var(--color-zinc-200)] relative bg-white ">
          <Plus
            strokeWidth={1}
            size={32}
            className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-black"
          />

          <Plus
            strokeWidth={1}
            size={32}
            className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-black"
          />

          <div className="flex items-center font-mono text-sm font-semibold tracking-wider uppercase text-zinc-400 px-5">
            [<TextScramble>NSS Leadership</TextScramble>]
          </div>

          <p className="2xl:text-lg xl:text-base lg:text-lg md:text-base text-base text-zinc-500 font-medium tracking-[-0.020rem] max-w-[50ch] px-5">
            The leadership of our society consists of outstanding individuals dedicated both to
            advancing their fields and to the collective progress of the society
          </p>
        </div>

        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 px-0 relative shadow-[0_0_0_1px_var(--color-zinc-200)]">
          {data.nssExcos.map((exco) => (
            <div
              className="shadow-[0_0_0_1px_var(--color-zinc-200)] flex flex-col gap-3 pb-3 bg-white"
              key={exco.id}
            >
              <DayterNextImage
                className="w-full h-80 object-cover object-top bg-white"
                src={exco.picture.url}
                alt={exco.fullName}
              />

              <div className="flex flex-col gap-1 text-zinc-600 px-3">
                <p className="font-mono font-semibold uppercase h-[18px] text-xs tracking-wide">
                  {exco.position}
                </p>
                <p className="h-fit sm:text-xl text-lg text-zinc-900 font-bold tracking-tight">
                  {exco.fullName}
                </p>
              </div>

              <div className="flex flex-col gap-2 px-3 text-xs text-zinc-700">
                <p className="tracking-wide">{exco.qualifications}</p>
                <p className="tracking-wide">{exco.institutionalAffliation}</p>
                <div className="flex items-center gap-1">
                  <Mail size={13} />
                  <Link href={`mailto:${exco.emailAddress}`}>
                    <p className="tracking-wide">{exco.emailAddress}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excos;
