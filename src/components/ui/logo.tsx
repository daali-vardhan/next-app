import { LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex place-items-center align-items-center gap-1.5 text-2xl p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text "
    >
      <span className="font-mono text-cyan-500">Daali</span>
      <LightningBoltIcon className="aspect-square scale-110 text-cyan-500" />
    </Link>
  );
}
