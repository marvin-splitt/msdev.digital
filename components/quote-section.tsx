import Image from "next/image";
import Quote from "@/public/icons/quote.svg";
import Avatar from "@/public/avatars/kai-avatar.svg";

export const QuoteSection: React.FC = () => {
  return (
    <div className="bg-[#1363811A]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <Image src={Quote} alt="Quote icon" className="h-5 w-5" />
          <p className="font-aeonik text-xl md:text-2xl lg:text-3xl font-semibold mt-5">
            Thanks to Marvin&apos;s expertise, we were not only able to create a
            modern web app with a CMS integration, but also gained the know-how
            to successfully implement future prototypes independently.
          </p>
          <div className="flex flex-row items-center gap-2 mt-4">
            <div className="p-2.5 w-12 h-12 bg-white flex items-center rounded-full">
              <Image
                src={Avatar}
                alt="Kai Baumann - Lead Entwickler @ Strehlow"
                className=" object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Kai Baumann</span>
              <span className="text-sm">Lead Developer @ Strehlow GmbH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
