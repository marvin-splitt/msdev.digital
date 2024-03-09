import Image from "next/image";
import { Button } from "./button";
import LightBulb from "@/public/services/light-bulb.svg";
import Phone from "@/public/services/phone.svg";
import Link from "next/link";
import { meetingLink } from "@/config/global";
import { SectionWrapper } from "./section-wrapper";

export const ServiceSection: React.FC = () => {
  return (
    <SectionWrapper
      title="Ideation and development of lean products"
      description="I support you where your challenges lie. Be it in the initial validation of your idea or in further product development."
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 mt-14 gap-5">
        <div className="border-2 rounded-lg border-black p-8 bg-[#D2572D1A] flex flex-row gap-5 items-center">
          <div>
            <div className="flex flex-col">
              <h4 className="uppercase text-xl">For Startups</h4>
              <h3 className="font-semibold text-3xl mt-5">Validate ideas</h3>
              <p className="mt-4">
                Have you discovered a market opportunity? I&apos;ll help you
                create the first prototype, immediately building a solid
                technical foundation.
                <br />
                If you already have a core team of developers, I&apos;ll help
                you get your product off the ground and increase your
                development velocity with your product vision as a north star.
              </p>
            </div>
            <Button asChild className="mt-5 rounded-full text-lg font-medium">
              <Link href={meetingLink}>Let&apos;s talk</Link>
            </Button>
          </div>
          <Image
            src={LightBulb}
            alt="Light Bulb"
            className="h-52 w-auto object-contain hidden sm:block"
          />
        </div>

        <div className="border-2 rounded-lg border-black p-8 bg-[#1363811A] flex flex-row gap-5 items-center">
          <div>
            <div className="flex flex-col">
              <h4 className="uppercase text-xl">For Scale-Ups</h4>
              <h3 className="font-semibold text-3xl mt-5">
                Scale your product
              </h3>
              <p className="mt-4">
                Do you want your application to perform well with a growing user
                base? I help you scale your product quickly from prototype to
                mature product through product discovery and shipping the
                features users actually care about.
              </p>
            </div>
            <Button asChild className="mt-5 rounded-full text-lg font-medium">
              <Link href={meetingLink}>Let&apos;s talk</Link>
            </Button>
          </div>
          <Image
            src={Phone}
            alt="Phone"
            className="h-52 w-auto object-contain hidden sm:block"
          />
        </div>
      </div>
      {/* <div className="border-2 md:col-span-2 md:row-span-2 h-fit rounded-lg border-black p-8 flex flex-row gap-5 w-full">
          <div className="max-w-sm">
            <div className="flex flex-col">
              <h3 className="font-semibold text-3xl">Drink a digital coffee</h3>
              <p className="mt-4">
                Would you like to find out more about how I work or are you
                generally unsure whether my service is the right fit for your
                product? Then let&apos;s just have a digital coffee.
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="mt-5 rounded-full text-lg font-medium"
            >
              <Link href={coffeeLink}>Book a call</Link>
            </Button>
          </div>
          <Image
            src={Coffee}
            alt="Coffee"
            className="h-20 w-auto object-contain hidden sm:block"
          />
        </div> */}
      {/* </div> */}
    </SectionWrapper>
  );
};
