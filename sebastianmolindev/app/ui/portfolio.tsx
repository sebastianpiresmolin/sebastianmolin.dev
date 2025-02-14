"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="text-emerald-300 h-[90vh] flex flex-col items-center grow">
        <div className="w-2/3 flex-col items-center border-2 border-emerald-300 border-dashed m-10 overflow-y-scroll">
          {/* Portfolio Header */}
          <div className="flex items-top justify-between">
            <h1 className="text-emerald-300 p-5 text-4xl">
              Portfolio of Personnel File:{" "}
              <span className="text-emerald-100">Sebastian Molin</span>
              <br />
              Github:{" ->"}{" "}
              <span className="text-emerald-100 decoration-dashed underline">
                <a
                  target="_blank"
                  href="https://github.com/sebastianpiresmolin"
                >
                  Link
                </a>
              </span>
              <h1 className="text-emerald-300">
                Download Resume PDF:{" "}
                <a
                  href="/SebastianMolinResume.pdf"
                  download="SebastianMolinResume.pdf"
                  className="text-emerald-100 decoration-dashed underline"
                >
                  Download
                </a>
              </h1>
            </h1>
            <div className="text-2xl m-0 border-2 border-emerald-300 border-dashed pl-2 pr-2 mt-5 mr-5">
              <h2 className="pt-1">UserId: 5763C31XE8A</h2>
              <h2>Clearance: ?? </h2>
              <h2 className="pb-1">Age: 28 </h2>
              <h2 className="pb-1">Situated: Sweden </h2>
            </div>
          </div>

          {/* SpecGurka Project */}
          <ProjectSection
            name="SpecGurka"
            type="Intern Project"
            description="SpecGurka is a collection of tools for working with the test result of an automated BDD process, based on gherkin-feature files and a test automation tool (like reqnroll). During my internship at Winlas AB, I worked on the development of the SpecGurka tool."
            technologies={["C#", ".NET", "Gherkin", "Javascript"]}
            githubLink="https://github.com/Nonsultant/specgurka"
            previewTitle="Preview of the SpecGurka tool"
            previewImage="/specgurka.png"
          />

          {/* Heroes of Hearthglow Project */}
          <ProjectSection
            name="Heroes of Hearthglow"
            type="Client"
            description="Fullstack web application that aims to help the client Tempura Tabby to market their product, boost sales, and increase revenue. The project preview is deployed here."
            deploymentLink="https://heroes-of-hearthglow.vercel.app/"
            technologies={["Typescript", "Next", "MongoDB"]}
            githubLink="https://github.com/sebastianpiresmolin/heroes-of-hearthglow"
            previewTitle="https://heroes-of-hearthglow.vercel.app/"
            previewImage="/HeroesOfHearthglow.png"
          />

          {/* Spring Boot REST-API Project */}
          <ProjectSection
            name="Spring Boot REST-API"
            type="School"
            description="Spring Boot REST-API that is used to store and retrieve data from a SQL database. Including geometrical data, Role-Based Spring Security, and Spring Data JPA."
            technologies={["Java", "Spring Boot", "SQL"]} // Lägg till SQL här
            githubLink="https://github.com/sebastianpiresmolin/spring-rest-api"
            previewTitle="Spring Boot REST-API"
            previewImage="/springApi.png"
          />

          {/* Spring Boot REST-API Project */}
          <ProjectSection
            name="Implement ElastiSearch in a Spring Boot REST-API"
            type="School Group Project"
            description="This pull request introduces several new features and improvements related to file management and search capabilities, including the integration of Hibernate Search with Lucene for full-text search functionality. The most important changes include adding new dependencies, creating new classes and interfaces for file operations, and updating configuration files."
            technologies={["Java", "Spring Boot", "SQL"]} // Lägg till SQL här
            githubLink="https://github.com/fungover/system2024/pull/42"
            previewTitle="Main PullRequest for My Implementation of ElastiSearch"
            previewImage="/ElastiSearch.png"
          />
        </div>
      </section>
    </motion.div>
  );
}

interface ProjectSectionProps {
  name: string;
  type: string;
  description: string;
  technologies: string[];
  githubLink: string;
  deploymentLink?: string;
  previewTitle?: string;
  previewImage: string;
}

function ProjectSection({
  name,
  type,
  description,
  technologies,
  githubLink,
  deploymentLink,
  previewTitle,
  previewImage,
}: ProjectSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-5 border-2 border-emerald-300 border-dashed m-10">
        <div className="flex flex-row justify-between">
          {/* Beskrivning */}
          <div className="flex flex-col w-1/2 p-5 pt-0">
            <h2 className="text-3xl">
              Project: <span className="text-emerald-100">{name}</span>
            </h2>
            <h2 className="text-3xl pt-2">
              Type: <span className="text-emerald-100">{type}</span>
            </h2>
            <div className="pt-5">
              <h2 className="text-3xl pb-2">
                Description:{" "}
                <span className="text-emerald-100">{description}</span>
              </h2>
              {deploymentLink && (
                <h2 className="text-3xl pb-2">
                  Deployment:{" "}
                  <span className="text-emerald-300 decoration-dashed underline">
                    <a target="_blank" href={deploymentLink}>
                      {deploymentLink}
                    </a>
                  </span>
                </h2>
              )}
              <h2 className="text-3xl pt-2 pb-2">
                Technologies:{" "}
                {technologies.map((tech, index) => (
                  <span key={index} className={getTechnologyColor(tech)}>
                    {tech}
                    {index < technologies.length - 1 && ", "}
                  </span>
                ))}
              </h2>
              <h2 className="text-3xl pt-2 pb-2">
                Github:{" ->"}{" "}
                <span className="text-emerald-100 decoration-dashed underline">
                  <a target="_blank" href={githubLink}>
                    Link
                  </a>
                </span>
              </h2>
            </div>
          </div>

          {/* Bild / Förhandsgranskning */}
          <div className="flex flex-col justify-center items-center max-w-[45%] h-fit">
            {/* Lägg till en separat titel */}
            {previewTitle && (
              <h1 className="min-w-[100%] text-xl bg-black text-center border-2 border-b-0 border-emerald-300 border-dashed">
                {previewTitle}
              </h1>
            )}
            {/* Se till att bilden inte är en del av länken */}
            <img
              src={previewImage}
              alt={`Preview of ${name}`}
              className="border-2 border-emerald-300 border-dashed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function getTechnologyColor(tech: string): string {
  switch (tech.toLowerCase()) {
    case "c#":
      return "text-green-500";
    case ".net":
      return "text-white";
    case "gherkin":
      return "text-purple-500";
    case "javascript":
      return "text-yellow-300";
    case "typescript":
      return "text-blue-500";
    case "next":
      return "text-white";
    case "mongodb":
      return "text-green-500";
    case "java":
      return "text-orange-600";
    case "spring boot":
      return "text-green-500";
    default:
      return "text-gray-300";
  }
}
