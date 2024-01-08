export const meetingLink = "https://app.cal.com/msplitt/product-audit";
export const coffeeLink = "https://app.cal.com/msplitt/coffee-chat";

type LinkEntry = {
  name: string;
  href: string;
};

export const navigation: LinkEntry[] = [{ name: "Home", href: "/" }];

export const socials: LinkEntry[] = [
  { name: "Say hi!", href: "mailto:hey@msdev.digital" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/marvin-splitt/" },
  { name: "GitHub", href: "https://github.com/marvin-splitt" },
  { name: "X", href: "https://x.com/marvinsplitt" },
  { name: "Medium", href: "https://medium.com/@marvin-splitt" },
];

export const legals: LinkEntry[] = [
  { name: "Privacy", href: "/privacy" },
  { name: "Imprint", href: "/imprint" },
];
