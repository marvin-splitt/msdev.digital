import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Logo from "@/public/logos/msdev.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between items-center container !py-0">
      <Link href="/">
        <Image
          src={Logo}
          height={100}
          width={100}
          alt="Logo msdev.digital - Marvin Splitt"
          priority
        />
        <span className="sr-only">Marvin Splitt</span>
      </Link>
      <Button asChild size="wide" className="rounded-3xl">
        <Link href="mailto:moin@msdev.digital" className="font-semibold">
          moin@msdev.digital
        </Link>
      </Button>
    </header>
  );
};
