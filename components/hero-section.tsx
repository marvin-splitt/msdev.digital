import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
import { meetingLink } from "@/config/global";
import HeroProfile from "@/public/hero/hero-profile.png";
import HeroAvatarBadges from "@/public/hero/hero-avatar-badges.png";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="container flex flex-col items-center">
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-0 md:mt-20 mx-auto">
          Realize your <br className="block xs:hidden" />
          product ideas
          <br />
          through{" "}
          <span className="text-accent whitespace-nowrap">user-centric</span>
          <br /> prototypes
        </h1>

        <Image
          className="absolute hidden md:block md:h-9 md:w-9 top-5 sm:top-12 right-0 md:-right-8 md:top-6 lg:-right-14"
          src={Arrow}
          alt="Arrow Icon"
        />
      </div>
      <p className="max-w-3xl text-center text-lg lg:text-2xl mt-10 relative">
        Helping startups and scale-ups transform product vision into
        production-ready features.
        {/* that enable products that customers love. */}
        {/* <br className="hidden xs:block sm:hidden" /> */}
        {/* Fast, efficient and without unnecessary costs. */}
        <Image
          src={HeroProfile}
          alt="Marvin Splitt drinking coffee and smiling."
          className="invisible lg:visible h-48 w-auto absolute -left-52 -top-5"
          priority
        />
      </p>
      <div className="flex flex-row gap-2 items-center font-aeonik text-[#515151] text-sm mt-6">
        <p>You and</p>
        <Image
          src={HeroAvatarBadges}
          alt="An avatar list of some nice people I worked with. Are you ready to join them?"
          className="h-8 w-auto"
          priority
        />
        <p>kick things off...</p>
      </div>
      <Button
        asChild
        size="lg"
        className="rounded-3xl mt-14 font-semibold text-base"
      >
        <Link target="_blank" href={meetingLink} className="font-semibold">
          Book product review
        </Link>
      </Button>
      <p className="text-gray-700 text-sm mt-2">
        Free 20 min. Product Feedback
      </p>
    </section>
  );
};
