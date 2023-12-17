import Image from "next/image";
import Construction from "@/public/construction.svg";
import { Button } from "@/components/button";
// Icons
import Link from "next/link";
import GitHub from "@/public/icons/github.svg";
import Twitter from "@/public/icons/twitter.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
// Logos
import Logo from "@/public/logos/msdev-logo.svg";
import Dsid from "@/public/logos/dsid.svg";
import Globaleye from "@/public/logos/globaleye.svg";
import Lbs from "@/public/logos/lbs.svg";
import Mutabor from "@/public/logos/mutabor.svg";
import Spyce5 from "@/public/logos/spyce5.svg";
import Neverfinal from "@/public/logos/neverfinal.svg";

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between pt-10 px-32 items-center w-full">
        <div>
          <Image
            src={Logo}
            height={100}
            width={100}
            alt="Logo msdev.digital - Marvin Splitt"
            priority
          />
          <span className="sr-only">Marvin Splitt</span>
        </div>
        <Button asChild className="rounded-3xl px-5">
          <Link href="mailto:marvin@msdev.digital" className="font-semibold">
            Contact
          </Link>
        </Button>
      </header>
      <main className="flex flex-col items-center">
        <Image
          priority
          className="mt-14"
          src={Construction}
          height={250}
          alt="Under Construction"
        />
        <h1 className="text-6xl font-bold mt-8">
          Error 503: <span className="text-accent">Under Construction</span>
        </h1>
        <p className="max-w-3xl text-center text-xl mt-6">
          Soon there will be more to see than just virtual building dust.
          <br />
          I&apos;m currently working on revamping my website.
        </p>

        <Button asChild className="rounded-3xl px-8 py-4 mt-12">
          <Link
            href="https://cal.com/msplitt/prototype-audit"
            className="font-semibold"
          >
            Get a Prototype Audit
          </Link>
        </Button>
        <p className="text-gray-700 text-sm mt-2">20min MVP Feedback</p>
        <div className="bg-black h-[146px] w-full mt-24 flex items-center">
          <div className="flex flex-row items-center gap-10 justify-center w-full mx-auto max-w-7xl px-8">
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
              height={40}
              alt="Neverfinal Logo"
              className="object-contain max-h-10"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 mt-8 items-center">
          <Link href="https://www.linkedin.com/in/marvin-splitt/">
            <Image src={LinkedIn} height={24} width={24} alt="LinkedIn" />
          </Link>
          <Link href="https://twitter.com/marvinsplitt">
            <Image src={Twitter} height={24} width={24} alt="Twitter" />
          </Link>
          <Link href="https://github.com/marvin-splitt">
            <Image src={GitHub} height={24} width={24} alt="GitHub" />
          </Link>
        </div>
      </main>
      <footer className="flex flex-row justify-center items-center gap-4 mt-8">
        <Link
          href="https://msdev.digital/imprint"
          className="text-gray-700 text-sm"
        >
          Imprint
        </Link>
        <Link
          href="https://msdev.digital/privacy"
          className="text-gray-700 text-sm"
        >
          Privacy
        </Link>
      </footer>
    </>
  );
}
