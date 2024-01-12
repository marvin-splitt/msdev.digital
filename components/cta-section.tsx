import Image from "next/image";
import SparklesIcon from "../public/icons/sparkles.svg";
import Link from "next/link";
import { meetingLink } from "@/config/global";

export const CtaSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex flex-col items-center">
        <Image src={SparklesIcon} alt="Sparkles" className="h-16 w-auto" />
        <h2 className="font-semibold text-3xl md:text-5xl text-center max-w-3xl mt-5">
          Let&apos;s challenge your product
        </h2>
        <p className="max-w-3xl text-center text-lg md:text-xl mt-5">
          Schedule a free call in which we will tackle your product challenges
          and find out if a further collaboration makes sense.
        </p>
        <Link
          target="_blank"
          href={meetingLink}
          className="py-5 px-28 border rounded-3xl border-white mt-8 hover:bg-white hover:text-black"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};
