import Link from "next/link";

export const Footer: React.FC = () => {
  return (
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
  );
};
