import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
import { meetingLink } from "@/config/global";

export const HeroSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-20">
          Realize your <br className="block xs:hidden" />
          product ideas
          <br />
          through{" "}
          <span className="text-accent whitespace-nowrap">user-centric</span>
          <br /> prototypes
        </h1>
        <p className="max-w-3xl text-center text-lg lg:text-2xl mt-10">
          Helping startups and scale-ups transform product vision into
          production-ready features.
          {/* that enable products that customers love. */}
          {/* <br className="hidden xs:block sm:hidden" /> */}
          {/* Fast, efficient and without unnecessary costs. */}
        </p>
        <Image
          className="absolute h-7 w-7 md:h-9 md:w-9 top-5 sm:top-20 right-0 md:top-16 lg:-right-14"
          src={Arrow}
          alt="Arrow Icon"
        />
      </div>
      <Button
        asChild
        size="lg"
        className="rounded-3xl mt-14 font-semibold text-base"
      >
        <Link target="_blank" href={meetingLink} className="font-semibold">
          Book Product Audit
        </Link>
      </Button>
      <p className="text-gray-700 text-sm mt-2">Free 20min Product Feedback</p>
    </div>
  );
};
