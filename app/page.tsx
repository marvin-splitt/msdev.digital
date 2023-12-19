import Image from "next/image";
import Construction from "@/public/construction.svg";
import { Button } from "@/components/button";
import { LogoSection } from "@/components/logo-section";

import Logo from "@/public/logos/msdev-logo.svg";
// Icons
import Link from "next/link";
import GitHub from "@/public/icons/github.svg";
import Twitter from "@/public/icons/twitter.svg";
import LinkedIn from "@/public/icons/linkedin.svg";

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between pt-10 items-center container">
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
      <main>
        <div className="container flex flex-col items-center">
          <Image
            priority
            className="mt-14 px-8 w-full h-auto max-w-md lg:max-w-xl"
            src={Construction}
            height={280}
            alt="Under Construction"
          />
          <h1 className="text-4xl lg:text-6xl font-bold mt-8 text-center">
            Error 503: <br className="md:hidden" />
            <span className="text-accent">Under Construction</span>
          </h1>
          <p className="max-w-3xl text-center lg:text-xl mt-6">
            Soon there will be more to see than just virtual building dust.
            <br />
            I&apos;m currently working on revamping my website.
          </p>
          <Button asChild className="rounded-3xl px-8 py-4 mt-12">
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
        <LogoSection />
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
        <Link href="/imprint" className="text-gray-700 text-sm">
          Imprint
        </Link>
        {/* <Link
          href="/privacy"
          className="text-gray-700 text-sm"
        >
          Privacy
        </Link> */}
      </footer>
    </>
  );
}
