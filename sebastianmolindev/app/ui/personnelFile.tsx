"use client";
import { motion } from "framer-motion";

export default function PersonnelFile() {
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
        <div className="xl:w-1/2 lg:w-2/3 w-full flex-col items-center lg:border-2 border-0 border-emerald-300 border-dashed mt-5 lg:mt-14 xl:mt-40">
          <div className="flex items-top justify-between">
            <div className="flex-col">
              <h1 className="text-emerald-300 p-5 text-2xl lg:text-3xl xl:text-4xl">
                Personnel File:{" "}
                <span className="text-emerald-100">Sebastian Molin</span>
              </h1>
              <h1 className="text-emerald-300 pl-5 lg:text-2xl xl:text-3xl text-xl">
                Download Resume PDF:{" "}
                <a
                  href="/SebastianMolinResume.pdf"
                  download="SebastianMolinResume.pdf"
                  className="text-emerald-100 hover:text-emerald-300 decoration-dashed underline"
                >
                  Download
                </a>
              </h1>
            </div>
            <div className="text-lg lg:text-xl xl:text-2xl m-0 border-2 border-emerald-300 border-dashed pl-2 pr-2 mt-5 mr-5">
              <h2 className="pt-1">UserId: 5763C31XE8A</h2>
              <h2 className="">Clearance: ?? </h2>
              <h2 className="pb-1">Age: 28 </h2>
              <h2 className="pb-1">Situated: Sweden </h2>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <h2 className="xl:text-3xl lg:text-2xl text-xl">
              Occupation:{" "}
              <span className="text-emerald-100">
                Fullstack Web Developer (Backend biased)
              </span>
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2">
              Current Assignment:{" "}
              <span className="text-emerald-100">Intern at Winlas AB</span>
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2">
              Contact:{" "}
              <span className="text-emerald-100">Download resume </span>
              <a
                href="/SebastianMolinResume.pdf"
                download="SebastianMolinResume.pdf"
                className="text-emerald-300 hover:text-emerald-100 decoration-dashed underline"
              >
                here
              </a>
              <span className="text-emerald-100">
                {" "}
                for a full list of skills and experiences including extensive
                contact information.
              </span>
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2">
              Last Known Location:{" "}
              <span className="text-emerald-100">Falköping, Sweden</span>
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2">
              Portfolio:{" -> "}
              <span className="text-emerald-100 hover:text-emerald-300 decoration-dashed underline">
                <a href="/personnel/sebastian/portfolio">Continue</a>
              </span>
            </h2>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
