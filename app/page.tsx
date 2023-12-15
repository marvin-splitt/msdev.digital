import Image from "next/image";
import Construction from "@/public/construction.svg";
import Logo from "@/public/msdev-logo.svg";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex flex-row justify-between pt-24 px-32 items-center w-full">
        <div>
          <Image src={Logo} height={100} width={100} alt="Logo" />
          <span className="sr-only">Marvin Splitt</span>
        </div>
        <Button>Kontakt</Button>
      </header>
      <Image
        className="mt-14"
        src={Construction}
        height={250}
        alt="Under Construction"
      />
      <h1 className="text-6xl font-bold mt-8">
        Error 503: <span className="text-accent">Baustelle</span>
      </h1>
      <p className="max-w-3xl text-center text-xl mt-6">
        Bald gibt es hier mehr zu sehen als nur virtuellen Baustaub. Ich arbeite
        gerade daran meine Website auf den neuesten Stand zu bringen.
      </p>
      <div className="bg-black h-[146px] w-full mt-28"></div>
    </main>
  );
}
