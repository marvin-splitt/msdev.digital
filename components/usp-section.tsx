import Image from "next/image";
import Quote from "@/public/icons/quote-orange.svg";
import Avatar from "@/public/avatars/simon-avatar.svg";

export const UspSection: React.FC = () => {
  return (
    <div className="bg-accent-blue">
      <div className="container flex flex-col items-center">
        <h2 className="font-semibold text-2xl md:text-4xl text-center max-w-3xl">
          In any case, you will receive...
        </h2>
        <p className="max-w-3xl text-center text-lg md:text-xl mt-5">
          Swift adjustments without bureaucratic burden. 100% commitment to your
          idea.
        </p>
        <div className="grid md:grid-cols-2 mt-14 gap-10">
          <div className="bg-white rounded-xl p-8">
            <Image
              src={Quote}
              alt="Quote icon"
              className="h-5 w-5 fill-accent text-accent"
            />
            <p className="font-aeonik text-xl md:text-2xl font-semibold mt-5">
              Marvin was a great help for our young company as we were trying to
              ramp up production and develop our first proof-of-concept type
              application. He stands for dev capabilities made in Germany:
              punctual, honest and reliable.
            </p>
            <div className="flex flex-row items-center gap-2 mt-4">
              <div className="w-12 h-12 flex items-center rounded-full">
                <Image
                  src={Avatar}
                  alt="Simon Molitor Co-Founder & CEO @ digitalsocial.id"
                  className=" object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Simon Molitor</span>
                <span className="text-sm">
                  Co-Founder & CEO @ digitalsocial.id
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-md order-first md:order-last">
            <div>
              <p className="font-semibold text-lg md:text-xl">
                Rapid & cost-effective development
              </p>
              <p className="mt-2">
                Quick adjustments to scope or requirements. Without complex
                communication processes or agency overhead.
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">
                Full focus on your idea
              </p>
              <p className="mt-2">
                No individual projects but 100% commitment to your idea and your
                target group to guarantee the highest quality.
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">
                Awareness of the product vision
              </p>
              <p className="mt-2">
                To eliminate unnecessary features and drive a successful market
                launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
