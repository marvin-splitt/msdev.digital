import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";

export const HeroSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Realize your <br className="block xs:hidden" />
          product idea
          <br />
          through{" "}
          <span className="text-accent whitespace-nowrap">user-centric</span>
          <br /> prototypes
        </h1>
        <p className="max-w-3xl text-center text-lg lg:text-2xl mt-6">
          Production-ready applications for start and scale-ups.{" "}
          <br className="hidden xs:block" />
          Fast, efficient and without unnecessary costs.
        </p>
        <Image
          className="absolute h-6 w-6 md:h-9 md:w-9 xs:-right-10 -top-4 -right-4 md:-right-14"
          src={Arrow}
          alt="Arrow Icon"
        />
      </div>
      <Button
        asChild
        size="lg"
        className="rounded-3xl mt-14 font-semibold text-base"
      >
        <Link
          target="_blank"
          href="https://cal.com/msplitt/prototype-audit"
          className="font-semibold"
        >
          Book Prototype Audit
        </Link>
      </Button>
      <p className="text-gray-700 text-sm mt-2">20min MVP Feedback</p>
    </div>
  );
};
