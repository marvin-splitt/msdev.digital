import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Logo from "@/public/logos/msdev-logo.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between items-center container">
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
      <Button asChild size="wide" className="rounded-3xl">
        <Link href="mailto:hi@msdev.digital" className="font-semibold">
          moin@msdev.digital
        </Link>
      </Button>
    </header>
  );
};
