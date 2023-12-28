import Image from "next/image";

import Dsid from "@/public/logos/dsid.svg";
import Globaleye from "@/public/logos/globaleye.svg";
import Lbs from "@/public/logos/lbs.svg";
import Mutabor from "@/public/logos/mutabor.svg";
import Spyce5 from "@/public/logos/spyce5.svg";
import Neverfinal from "@/public/logos/neverfinal.svg";

export const LogoSection: React.FC = () => {
  return (
    <div className="bg-primary h-[146px] w-full mt-24 flex items-center overflow-hidden">
      <div className="hidden lg:flex flex-row items-center gap-10 justify-center w-full mx-auto container">
        <Image
          src={Mutabor}
          height={52}
          alt="Mutabor Logo"
          className="object-contain max-h-8"
        />
        <Image
          src={Dsid}
          height={52}
          alt="DigitalSocial.id (DSID) Logo"
          className="object-contain max-h-10"
        />
        <Image
          src={Globaleye}
          height={52}
          alt="Globaleye Logo"
          className="object-contain max-h-8"
        />
        <Image
          src={Lbs}
          height={52}
          alt="LBS Logo"
          className="object-contain max-h-8"
        />

        <Image
          src={Spyce5}
          height={52}
          alt="Spyce5 Logo"
          className="object-contain max-h-8"
        />
        <Image
          src={Neverfinal}
          height={52}
          alt="Neverfinal Logo"
          className="object-contain max-h-10"
        />
      </div>
      <div
        className="flex w-[400%] animate-scrolling-container sm:w-[100%] lg:hidden gap-12 px-8 items-center"
        aria-hidden={true}
      >
        <Image
          src={Mutabor}
          height={52}
          loading="eager"
          alt="Mutabor Logo"
          className="object-contain max-h-8"
        />
        <Image
          src={Dsid}
          height={52}
          loading="eager"
          alt="DigitalSocial.id (DSID) Logo"
          className="object-contain max-h-10"
        />

        <Image
          src={Lbs}
          height={52}
          loading="eager"
          alt="LBS Logo"
          className="object-contain max-h-8"
        />

        <Image
          src={Globaleye}
          height={52}
          loading="eager"
          alt="Globaleye Logo"
          className="object-contain max-h-8"
        />
        <Image
          src={Neverfinal}
          height={52}
          loading="eager"
          alt="Neverfinal Logo"
          className="object-contain max-h-10"
        />
        <Image
          src={Spyce5}
          height={52}
          loading="eager"
          alt="Spyce5 Logo"
          className="object-contain max-h-8"
        />
      </div>
    </div>
  );
};
