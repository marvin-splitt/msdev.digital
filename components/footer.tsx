import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/public/logos/msdev-light.svg";

type LinkEntry = {
  name: string;
  href: string;
};

const navigation: LinkEntry[] = [{ name: "Home", href: "/" }];

const socials: LinkEntry[] = [
  { name: "Hit me up", href: "mailto:hey@msdev.digital" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/marvin-splitt/" },
  { name: "GitHub", href: "https://github.com/marvin-splitt" },
  { name: "X", href: "https://x.com/marvinsplitt" },
  { name: "Medium", href: "https://medium.com/@marvin-splitt" },
];

const legals: LinkEntry[] = [
  { name: "Privacy", href: "/privacy" },
  { name: "Imprint", href: "/imprint" },
];

const footerLinks = [
  {
    name: "Navigation",
    links: navigation,
  },
  {
    name: "Contact",
    links: socials,
  },
  {
    name: "Legal",
    links: legals,
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="container flex flex-col-reverse items-start justify-between gap-x-12 gap-y-16 md:flex-row">
        <div className="flex flex-col">
          <Image
            src={LogoLight}
            alt="Logo msdev.digital - Marvin Splitt Product Developer"
          />
          <span className="mt-3 text-sm text-white">
            &copy; {year} Marvin Splitt.
          </span>
          <span className="text-sm text-white">Hamburg, Germany</span>
          <span className="mt-5 block text-sm text-white">
            All rights reserved.
          </span>
        </div>
        <nav className="md:w-3/5 grid grid-cols-3 gap-20 text-sm text-white whitespace-nowrap">
          {footerLinks.map(({ name, links }) => {
            return (
              <div key={name} className="flex flex-col gap-3">
                <span className="font-semibold">{name}</span>
                <nav className="flex flex-col gap-3">
                  {links.map(({ name, href }) => {
                    return (
                      <Link key={href} href={href}>
                        {name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};
