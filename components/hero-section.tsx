import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";

export const HeroSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="relative">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-20">
          Realize your product idea
          <br />
          through <span className="text-accent">user-centric</span>
          <br /> prototypes
        </h1>
        <p className="max-w-3xl text-center lg:text-xl mt-6">
          Production-ready applications for start and scale-ups.
          <br />
          Fast, efficient and without unnecessary costs.
        </p>
        <Image
          className="absolute h-9 w-9 top-16 -right-14"
          src={Arrow}
          alt="Arrow Icon"
        />
      </div>
      <Button asChild className="rounded-3xl px-8 py-4 mt-14">
        <Link
          target="_blank"
          href="https://cal.com/msplitt/prototype-audit"
          className="font-semibold"
        >
          Get a free Prototype Audit
        </Link>
      </Button>
      <p className="text-gray-700 text-sm mt-2">20min MVP Feedback</p>
    </div>
  );
};
