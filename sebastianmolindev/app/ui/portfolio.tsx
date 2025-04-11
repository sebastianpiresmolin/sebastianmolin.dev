"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      name: "SpecGurka",
      type: "Intern Project",
      description:
        "SpecGurka is a collection of tools for working with the test result of an automated BDD process, based on gherkin-feature files and a test automation tool (like reqnroll). During my internship at Winlas AB, I worked on the development of the SpecGurka tool.",
      technologies: ["C#", ".NET", "Gherkin", "Javascript"],
      githubLink: "https://github.com/Nonsultant/specgurka",
      previewTitle: "Preview of the SpecGurka tool",
      previewImage: "/specgurka.png",
    },
    {
      name: "Mini MES API",
      type: "Personal Project",
      description:
          "Originally it was just supposed to be a tutorial project to teach myself how to work with MinimalAPI and Handlers. But at this time I was also diving deeper into ISA-95 and more specifically level three - Manufacturing Execution Systems (MES). So the result became a project that was now both a platform to help me hone my API skills, but also shaped as a miniature MES-API. To make the MES-API have some sort of interactivity I let the SwaggerUI act as a small level 4 (Business Layer) by enabling POST/PUT requests.",
      technologies: ["C#", ".NET", "SQL", "Xunit", "MinimalAPI", "Entity Framework"],
      githubLink: "https://github.com/sebastianpiresmolin/Mini-MES-API",
      previewTitle: "Preview of the Mini MES API Swagger UI",
      previewImage: "/minimesapi.png",
    },
    {
      name: "Heroes of Hearthglow",
      type: "Client",
      description:
        "Fullstack web application that aims to help the client Tempura Tabby to market their product, boost sales, and increase revenue. The project preview is deployed here.",
      deploymentLink: "https://heroes-of-hearthglow.vercel.app/",
      technologies: ["Typescript", "Next", "MongoDB"],
      githubLink: "https://github.com/sebastianpiresmolin/heroes-of-hearthglow",
      previewTitle: "https://heroes-of-hearthglow.vercel.app/",
      previewImage: "/HeroesOfHearthglow.png",
    },
    {
      name: "Spring Boot REST-API",
      type: "School",
      description:
        "Spring Boot REST-API that is used to store and retrieve data from a SQL database. Including geometrical data, Role-Based Spring Security, and Spring Data JPA.",
      technologies: ["Java", "Spring Boot", "SQL"],
      githubLink: "https://github.com/sebastianpiresmolin/spring-rest-api",
      previewTitle: "Spring Boot REST-API",
      previewImage: "/springApi.png",
    },
    {
      name: "Implement ElastiSearch in a Spring Boot REST-API",
      type: "School Group Project",
      description:
        "This pull request introduces several new features and improvements related to file management and search capabilities, including the integration of Hibernate Search with Lucene for full-text search functionality. The most important changes include adding new dependencies, creating new classes and interfaces for file operations, and updating configuration files.",
      technologies: ["Java", "Spring Boot", "SQL"],
      githubLink: "https://github.com/fungover/system2024/pull/42",
      previewTitle: "Main PullRequest for My Implementation of ElastiSearch",
      previewImage: "/ElastiSearch.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="text-emerald-300 h-[90vh] flex flex-col items-center grow">
        <div className="lg:w-5/6 w-screen flex-col items-center lg:border-2 border-emerald-300 border-dashed m-10 overflow-y-scroll">
          <PortfolioHeader />
          <div>
            {projects.map((project, index) => (
              <ProjectSection key={index} number={index + 1} {...project} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function PortfolioHeader() {
  return (
    <div className="flex items-top justify-between w-full">
      <h1 className="text-emerald-300 p-5 xl:text-4xl lg:text-3xl text-2xl">
        Portfolio of Personnel File:{" "}
        <span className="text-emerald-100">Sebastian Molin</span>
        <br />
        Github:{" ->"}{" "}
        <span className="text-emerald-100 decoration-dashed underline">
          <a
            target="_blank"
            href="https://github.com/sebastianpiresmolin"
            className="hover:text-emerald-300"
          >
            Link
          </a>
        </span>
        <div>
          <h1 className="text-emerald-300">
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
      </h1>
    </div>
  );
}

interface ProjectSectionProps {
  number: number;
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
  number,
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
      <div className="flex flex-col p-5 border-2 border-emerald-300 border-dashed m-2 lg:m-10">
        <div className="flex flex-row justify-between">
          {/* Beskrivning */}
          <div className="flex flex-col lg:w-1/2 w-full lg:p-5 lg:pt-0 pt-0">
            <p className="xl:text-2xl lg:text-xl">{`No. ${number} / 4`}</p>
            <h2 className="xl:text-4xl lg:text-2xl text-xl">
              Project: <span className="text-emerald-100">{name}</span>
            </h2>
            <h2 className="xl:text-4xl lg:text-2xl text-xl pt-2">
              Type: <span className="text-emerald-100">{type}</span>
            </h2>
            <div className="pt-5">
              <h2 className="xl:text-3xl lg:text-2xl text-xl pb-2">
                Description:{" "}
                <span className="text-emerald-100">{description}</span>
              </h2>
              {deploymentLink && (
                <h2 className="xl:text-3xl lg:text-2xl text-xl pb-2">
                  Deployment:{" "}
                  <span className="text-emerald-300 decoration-dashed underline">
                    <a
                      target="_blank"
                      className="hover:text-emerald-100"
                      href={deploymentLink}
                    >
                      {deploymentLink}
                    </a>
                  </span>
                </h2>
              )}
              <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2 pb-2">
                Technologies:{" "}
                {technologies.map((tech, index) => (
                  <span key={index} className={getTechnologyColor(tech)}>
                    {tech}
                    {index < technologies.length - 1 && ", "}
                  </span>
                ))}
              </h2>
              <h2 className="xl:text-3xl lg:text-2xl text-xl pt-2 pb-2">
                Github:{" ->"}{" "}
                <span className="text-emerald-100 decoration-dashed underline">
                  <a
                    target="_blank"
                    className="hover:text-emerald-300"
                    href={githubLink}
                  >
                    Link
                  </a>
                </span>
              </h2>
            </div>
          </div>

          {/* Bild / Förhandsgranskning */}
          <div className=" hidden lg:flex flex-col justify-center items-center max-w-[45%] h-fit">
            {previewTitle && (
              <h1 className="min-w-[100%] text-xl bg-black text-center border-2 border-b-0 border-emerald-300 border-dashed">
                {previewTitle}
              </h1>
            )}
            <a href={githubLink}>
              <img
                src={previewImage}
                alt={`Preview of ${name}`}
                className="border-2 border-emerald-300 border-dashed"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTechnologyColor(tech: string): string {
  switch (tech.toLowerCase()) {
    case "c#":
      return "text-green-300";
    case ".net":
      return "text-gray-400";
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
      return "text-blue-300";
    default:
      return "text-gray-300";
  }
}
