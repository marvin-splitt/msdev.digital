import Image from "next/image";
import Construction from "@/public/construction.svg";
import Logo from "@/public/msdev-logo.svg";
import { Button } from "@/components/button";
import Link from "next/link";
import GitHub from "@/public/icons/github.svg";
import Twitter from "@/public/icons/twitter.svg";
import LinkedIn from "@/public/icons/linkedin.svg";

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between pt-10 px-32 items-center w-full">
        <div>
          <Image src={Logo} height={100} width={100} alt="Logo" />
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
          className="mt-14"
          src={Construction}
          height={250}
          alt="Under Construction"
        />
        <h1 className="text-6xl font-bold mt-8">
          Error 503: <span className="text-accent">Under Construction</span>
        </h1>
        <p className="max-w-3xl text-center text-xl mt-6">
          Bald gibt es hier mehr zu sehen als nur virtuellen Baustaub. Ich
          arbeite gerade daran meine Website auf den neuesten Stand zu bringen.
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
        <div className="bg-black h-[146px] w-full mt-24"></div>
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
