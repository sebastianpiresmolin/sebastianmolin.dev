"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleClick = () => {
    setIsInitializing(true);
  };

  return (
    <section className="bg-black min-h-screen min-w-screen max-h-screen max-w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Image
            className="object-cover"
            fill={true}
            src="/TerminalBlank.png"
            alt="Old Terminal Screen Background with Green Distinct Pixels."
          />
        </div>
        <div className="relative flex flex-col justify-center items-center min-h-screen text-center z-10">
          {!isInitializing && (
            <div
              className="text-4xl text-emerald-300 border-2 border-emerald-300 m-0 p-4 cursor-pointer hover:scale-95"
              onClick={handleClick}
            >
              PRESS TO INITIALIZE
            </div>
          )}

          {/* Visa "INITIALIZING" endast om det initialiseras */}
          {isInitializing && (
            <div className="text-4xl text-emerald-300 m-0 w-1/2">
              INITIALIZING
              <span className="loading-dots absolute"></span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
