import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import Logo from "@/public/logos/msdev.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between items-center container !pt-8">
      <Link href="/">
        <Image
          src={Logo}
          height={100}
          width={100}
          alt="Logo msdev.digital - Marvin Splitt Product Developer"
          priority
        />
        <span className="sr-only">Marvin Splitt</span>
      </Link>
      <Button asChild size="wide" className="rounded-3xl">
        <Link
          href="mailto:hi@msdev.digital"
          className="font-semibold tracking-wide"
        >
          hi@msdev.digital
        </Link>
      </Button>
    </header>
  );
};
