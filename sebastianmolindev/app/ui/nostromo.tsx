"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nostromo() {
  const [isFirstVisible, setIsFirstVisible] = useState(true); // Första elementet
  const [isSecondVisible, setIsSecondVisible] = useState(false); // Andra elementet

  // Timer för att visa första elementet i 3 sekunder och sedan byta till det andra
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstVisible(false); // Dölj första elementet
      setIsSecondVisible(true); // Visa andra elementet
    }, 3000); // Vänta 3 sekunder
    return () => clearTimeout(timer); // Rensa timer vid avmontering
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <section className="text-emerald-300 h-[90vh] flex flex-col items-center grow">
        {/* Första elementet med glitch-effekt */}
        {isFirstVisible && (
          <div className="lg:w-1/2 w-full lg:text-2xl text-lg flex-col items-center lg:border-2 border-emerald-300 border-dashed m-5 lg:mt-40 p-5 glitch">
            <h1 className="text-4xl pb-5">USCSS Nostromo</h1>
            <p>
              The United States Cargo Star Ship (USCSS) Nostromo (reg.
              180924609) was owned by the Weyland-Yutani Corporation (The
              Company) and used as a commercial hauler between Thedus and Earth.
              In the Alien timeline, it was the first human ship to land on
              LV-426.
            </p>
            <br />
            <h2 className="text-3xl pb-5">Features</h2>
            <p>
              The Nostromo, an M-Class Lockmart CM 88B Bison starfreighter, was
              property of the Weyland-Yutani Corporation. It hauled a mile-long
              ore refinery that, on its final voyage, processed 20 million tons
              of raw ore. Valued at $42 million in adjusted dollars, the
              Nostromo was 334 metres (1095 feet) in length, 215 metres (705
              feet) wide and 98 metres (320 feet) height.[1] The ore refinery it
              towed was 1,927 metres (6,322 feet) long, 1,257 metres (4,124
              feet) wide, and 1,131 metres (3,712 feet) high, processing raw
              material on the long trip to Earth. The ship itself weighed more
              than 60,000 metric (66,138 US) tons, included three decks, four
              holds, stores, and engines and a shuttle named Narcissus. It was
              connected to the ore refinery platform via an umbilical detachment
              system.
            </p>
            <br />
            <p>
              The ship was equipped with a MU-TH-UR 182 model 2.1 terabyte AI
              mainframe (called "Mother" by the crew), available to command
              officers through a special interface room. The mainframe piloted
              the ship while the crew were in hypersleep and monitored their
              activities.
            </p>
            <br />
            <p>
              The ship had numerous industrial areas, a central eating area, a
              hypersleep chamber, a kitchen, a cockpit, and an infirmary. The
              ship also had a self-destruct system, which shut off the reactor
              cooling units, causing the engines to overheat and detonate
              precisely 10 minutes after initiation. There was an option to
              override the process prior to the last 5 minutes of the countdown.
              Cancelling the self-destruct sequence was a complicated procedure.
              Ripley's failure to complete the process resulted in the ship's
              destruction.
            </p>
          </div>
        )}

        {/* Andra elementet som visas efter första döljs */}
        {isSecondVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Fade-in animation för andra elementet
            className="text-center mt-5 lg:mt-40"
          >
            <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-sm lg:p-10 pt-10 pb-10 typing-heading">
              The Data You Tried To Access Requires A-1 Clearance.
            </h1>
            <h1 className="xl:text-4xl lg:text-2xl md:text-xl text-sm typing-heading-delayed">
              Weyland-Yutani Corporation Have Been Notified.
            </h1>
          </motion.div>
        )}
      </section>
    </motion.div>
  );
}
