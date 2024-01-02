import Image from "next/image";
import { Button } from "./button";
import LightBulb from "@/public/services/light-bulb.svg";
import Phone from "@/public/services/phone.svg";
import Coffee from "@/public/services/coffee.svg";

export const ServiceSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <h2 className="font-semibold text-2xl md:text-4xl text-center max-w-3xl">
        Conception and development of lean MVP&apos;s
      </h2>
      <p className="max-w-3xl text-center text-lg md:text-xl mt-5">
        I support you where your challenges lie. Be it in the initial validation
        of your idea or in the further development of your product.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-5 mt-14 gap-5">
        <div className="flex flex-col gap-4 col-span-3">
          <div className="border-2 rounded-lg border-black p-8 bg-[#D2572D1A] flex flex-row gap-5 items-center">
            <div>
              <div className="flex flex-col">
                <h4 className="uppercase text-xl">For Startups</h4>
                <h3 className="font-semibold text-3xl mt-5">Validate ideas</h3>
                <p className="mt-4">
                  Have you discovered a market opportunity? I&apos;ll help you
                  create the first prototypes - without no-code or low-code, but
                  with a solid technical foundation.
                </p>
              </div>
              <Button className="mt-5 rounded-full text-lg font-medium">
                Let&apos;s talk
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
                  Do you want your infrastructure to scale with growing user
                  numbers? I help to scale products quickly from prototype to
                  mature product through targeted feature expansion.
                </p>
              </div>
              <Button className="mt-5 rounded-full text-lg font-medium">
                Let&apos;s talk
              </Button>
            </div>
            <Image
              src={Phone}
              alt="Phone"
              className="h-52 w-auto object-contain hidden sm:block"
            />
          </div>
        </div>
        <div className="border-2 md:col-span-2 md:row-span-2 h-fit rounded-lg border-black p-8 flex flex-row gap-5 w-full">
          <div className="max-w-sm">
            <div className="flex flex-col">
              <h3 className="font-semibold text-3xl">Drink a digital coffee</h3>
              <p className="mt-4">
                Would you like to find out more about how I work or are you
                generally unsure whether my service is right for your product?
                Then let&apos;s just have a digital coffee.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-5 rounded-full text-lg font-medium"
            >
              Book a Call
            </Button>
          </div>
          <Image
            src={Coffee}
            alt="Coffee"
            className="h-20 w-auto object-contain hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};
