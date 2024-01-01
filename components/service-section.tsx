import Image from "next/image";
import { Button } from "./button";
import LightBulb from "@/public/services/light-bulb.svg";

export const ServiceSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <h2 className="font-semibold text-4xl">
        Conception and development of lean MVP&apos;s
      </h2>
      <p className="max-w-3xl text-center text-xl">
        I support you where your challenges lie. Be it in the initial validation
        of your idea or in the further development of your product.
      </p>

      <div className="grid grid-cols-2">
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
            className="h-52 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
