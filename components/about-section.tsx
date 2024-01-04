import Image from "next/image";
import Marvin from "@/public/images/marvin.png";
import Sparkle from "@/public/icons/sparkle.svg";

const perks = [
  {
    name: "Barista Lover",
    emoji: "☕️",
  },
  {
    name: "Techlabs Educator",
    emoji: "👨‍🏫",
  },
  {
    name: "Web3 Builder",
    emoji: "👾",
  },
  {
    name: "Indie Hacker",
    emoji: "👨‍💻",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-14 ">
        <div className="relative lg:w-[55%] w-full">
          <Image
            src={Marvin}
            alt="Marvin Splitt - A Freelance Full-Stack Product Developer with focus on the conception and development of lean MVP's"
            className="rounded-md w-full h-auto object-contain"
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <Image
            src={Sparkle}
            alt="Sparkle icon"
            className="h-8 w-8 hidden lg:block absolute bottom-4 left-2"
          />
          <Image
            src={Sparkle}
            alt="Sparkle icon"
            className="h-8 w-8 absolute hidden xl:block -bottom-12 left-10"
          />
          <Image
            src={Sparkle}
            alt="Sparkle icon"
            className="h-8 w-8 hidden lg:block xl:hidden absolute bottom-12 -left-10"
          />
        </div>
        <div className="flex-1 flex gap-5 flex-col my-auto">
          <h2 className="font-semibold text-2xl md:text-4xl">
            Moin, <br className="hidden xl:block" />I am Marvin
          </h2>
          <p className="text-lg md:text-xl">
            A Freelance Full-Stack Product Developer with a focus on the
            discovery and development of lean prototype-driven products.
          </p>
          <p>
            Since 5+ years I help startups and scale-ups with my technical
            expertise to quickly validate their ideas through modern approaches,
            to scale even better while at the same time acting in a
            cost-efficient manner.
          </p>
          <div className="flex-row gap-3 flex-wrap hidden xl:flex">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="flex flex-row items-center whitespace-nowrap gap-1 text-sm text-gray-500 bg-gray-100 rounded-2xl px-3 py-1.5"
              >
                <span>{perk.emoji}</span>
                <span>{perk.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 flex-wrap mt-6 xl:hidden">
        {perks.map((perk) => (
          <div
            key={perk.name}
            className="flex flex-row items-center whitespace-nowrap gap-1 text-sm text-gray-500 bg-gray-100 rounded-2xl px-3 py-1.5"
          >
            <span>{perk.emoji}</span>
            <span>{perk.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
