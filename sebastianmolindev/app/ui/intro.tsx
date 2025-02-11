"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Uppdaterat till 'next/navigation'

export default function Intro() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const router = useRouter(); // Använd useRouter från 'next/navigation'

  const handleClick = () => {
    setIsInitializing(true);
  };

  useEffect(() => {
    if (isInitializing) {
      const timer = setTimeout(() => {
        setShowImage(true); // Visa bilden efter 3 sekunder
      }, 4000);

      return () => clearTimeout(timer); // Rensa timeout vid ändringar
    } else {
      setShowImage(false); // Dölj bilden om initialisering avbryts
    }
  }, [isInitializing]);

  useEffect(() => {
    if (showImage) {
      const redirectTimer = setTimeout(() => {
        router.push("/personnel/sebastian"); // Omdirigera efter 3 sekunder
      }, 3000);

      return () => clearTimeout(redirectTimer); // Rensa timer vid demontering
    }
  }, [showImage, router]);

  return (
    <section className="bg-black min-h-screen min-w-screen max-h-screen max-w-screen">
      {/* Fade-in animation för hela sektionen med framer-motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="relative flex flex-col justify-center items-center min-h-screen text-center z-10">
          {!isInitializing && (
            <motion.div
              className="text-4xl text-emerald-300 border-2 border-emerald-300 m-0 p-4 cursor-pointer hover:scale-95"
              onClick={handleClick}
              whileHover={{ scale: 0.95 }}
            >
              PRESS TO INITIALIZE
            </motion.div>
          )}

          {/* Visa "INITIALIZING" */}
          {isInitializing && !showImage && (
            <motion.div
              className="text-4xl text-emerald-300 m-0 w-fit typing-effect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              INITIALIZING
            </motion.div>
          )}

          {/* Visa "TerminalSplash.png" och omdirigera efter 3 sekunder */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                className="fit"
                fill={true}
                src={"/TerminalSplash.png"}
                alt={"NOSTROMOLINK"}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
