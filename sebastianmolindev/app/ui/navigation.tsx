"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <nav className="  h-[10vh] w-screen sticky top-0 left-0 flex flex-row text-emerald-300 justify-evenly lg:justify-between items-center border-b-2 border-emerald-300 border-dashed p-4">
      <div className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hidden lg:flex lg:flex-col">
        <h2>UserId: 3531A97YZ4C</h2>
        <h2>Clearance: B-1</h2>
      </div>
      <div className="flex flex-row gap-6 ">
        <Link
          className={`text-xl lg:text-2xl h-10 border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95 ${
            isActive("/personnel/sebastian") ? "bg-emerald-400 text-black" : ""
          }`}
          href="/personnel/sebastian"
        >
          Start
        </Link>

        <Link
          className={`text-xl lg:text-2xl h-10  border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95 ${
            isActive("/personnel/sebastian/portfolio")
              ? "bg-emerald-400 text-black"
              : ""
          }`}
          href="/personnel/sebastian/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`text-xl lg:text-2xl h-10  border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95 ${
            isActive("/personnel/sebastian/nostromo")
              ? "bg-emerald-400 text-black"
              : ""
          }`}
          href="/personnel/sebastian/nostromo"
        >
          Nostromo
        </Link>
      </div>
    </nav>
  );
}
