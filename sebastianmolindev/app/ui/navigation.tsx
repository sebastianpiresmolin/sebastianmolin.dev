"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
    >
      <nav className="h-[10vh] sticky top-0 left-0 flex flex-row text-emerald-300 justify-between items-center border-b-2 border-emerald-300 border-dashed p-4">
        <div className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2">
          <h2>UserId: 3531A97YZ4C</h2>
          <h2>Clearance: B-1</h2>
        </div>
        <div className="flex flex-row gap-6 ">
          <Link
            className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95"
            href="/personnel/sebastian"
          >
            Start
          </Link>
          <Link
            className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95"
            href="/personnel/sebastian/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95"
            href="/personnel/sebastian/resume"
          >
            Resume
          </Link>
          <Link
            className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95"
            href="/personnel/sebastian/contact"
          >
            Contact
          </Link>
          <Link
            className="text-2xl border-2 border-emerald-300 border-dashed pl-2 pr-2 hover:scale-95"
            href="/personnel/sebastian/nostromo"
          >
            The UCSS Nostromo
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}
