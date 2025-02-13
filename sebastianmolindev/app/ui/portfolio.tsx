"use client";
import {motion} from "framer-motion";

export default function Portfolio() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
            <section className="text-emerald-300 h-[90vh] flex flex-col items-center grow">
                <div
                    className="w-2/3 flex-col items-center border-2 border-emerald-300 border-dashed m-10 overflow-y-scroll ">
                    <div className="flex items-top justify-between">
                        <h1 className="text-emerald-300 p-5 text-4xl">
                            Portfolio of Personnel File:{" "}
                            <span className="text-emerald-100">Sebastian Molin</span>
                            <br/>
                            Github:{" ->"}{" "}
                            <span className="text-emerald-100 decoration-dashed underline"><a target="_blank"
                                                                                              href="https://github.com/sebastianpiresmolin">Link</a></span>
                        </h1>
                        <div className="text-2xl m-0 border-2 border-emerald-300 border-dashed pl-2 pr-2 mt-5 mr-5">
                            <h2 className="pt-1">UserId: 5763C31XE8A</h2>
                            <h2 className="">Clearance: ?? </h2>
                            <h2 className="pb-1">Age: 28 </h2>
                            <h2 className="pb-1">Situated: Sweden </h2>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col p-5 border-2 border-emerald-300 border-dashed m-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-1/2 p-5 pt-0">
                                    <h2 className="text-3xl">
                                        Project:{" "}
                                        <span className="text-emerald-100">SpecGurka</span>
                                    </h2>
                                    <h2 className="text-3xl pt-2">
                                        Type:{" "}
                                        <span className="text-emerald-100">Intern Project</span>
                                    </h2>
                                    <div className="pt-5">
                                        <h2 className="text-3xl pb-2">
                                            Description:
                                            <span className="text-emerald-100 ">
                                               SpecGurka is a collection of tools for working with the test result of an automated
                                                BDD process, based on gherkin-feature files and a test automation tool
                                                (like reqnroll). During my internship at Winlas AB, I worked on the
                                                development of the SpecGurka tool.
                                </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Technologies:{" "}
                                            <span className="text-green-500">
                    C#
                  </span>
                                            {", "}
                                            <span className="text-white">
                    .NET
                  </span>
                                            {", "}
                                            <span className="text-purple-500">
                    Gherkin
                  </span>
                                            {", "}
                                            <span className="text-yellow-300">
                    Javascript
                  </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Github:{" ->"}{" "}
                                            <span className="text-emerald-100 decoration-dashed underline"><a
                                                target="_blank"
                                                href="https://github.com/Nonsultant/specgurka">Link</a></span>
                                        </h2>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center max-w-[45%] h-fit">
                                    <h1  className="min-w-[100%] text-xl bg-black text-center border-2 border-b-0 border-emerald-300 border-dashed">Preview of the SpecGurka tool</h1>
                                    <img src="/specgurka.png" alt="Preview of the SpecGurka tool" className="border-2 border-emerald-300 border-dashed"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col p-5 border-2 border-emerald-300 border-dashed m-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-1/2 p-5 pt-0">
                                    <h2 className="text-3xl">
                                        Project:{" "}
                                        <span className="text-emerald-100">Heroes of Hearthglow</span>
                                    </h2>
                                    <h2 className="text-3xl pt-2">
                                        Type:{" "}
                                        <span className="text-emerald-100">Client</span>
                                    </h2>
                                    <div className="pt-5">
                                        <h2 className="text-3xl pb-2">
                                            Description:
                                            <span className="text-emerald-100 ">
                                    {" "} Fullstack web application that aims to help the client Tempura Tabby to market their product, Boost sales and increase revenue.
                                    The project preview is deployed {" "}
                                                <a
                                                    target="_blank"
                                                    href="https://heroes-of-hearthglow.vercel.app/"
                                                    className="decoration-dashed underline text-emerald-300"
                                                >
                                    here
                                </a>
                                </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Technologies:{" "}
                                            <span className="text-blue-500">
                    Typescript
                  </span>
                                            {", "}
                                            <span className="text-white">
                    Next
                  </span>
                                            {", "}
                                            <span className="text-green-500">
                    MongoDB
                  </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Github:{" ->"}{" "}
                                            <span className="text-emerald-100 decoration-dashed underline"><a
                                                target="_blank"
                                                href="https://github.com/sebastianpiresmolin/heroes-of-hearthglow">Link</a></span>
                                        </h2>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center max-w-[45%] h-fit">
                                    <a target="_blank" href="https://heroes-of-hearthglow.vercel.app/" className="min-w-[100%] text-xl bg-black text-center border-2 border-b-0 border-emerald-300 border-dashed">https://heroes-of-hearthglow.vercel.app/</a>
                                    <a target="_blank" href="https://heroes-of-hearthglow.vercel.app/"><img src="/HeroesOfHearthglow.png" alt="Heroes of Hearthglow"
                                            className="border-2 border-emerald-300 border-dashed"/></a>

                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="flex flex-col">
                        <div className="flex flex-col p-5 border-2 border-emerald-300 border-dashed m-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-1/2 p-5 pt-0">
                                    <h2 className="text-3xl">
                                        Project:{" "}
                                        <span className="text-emerald-100">Spring Boot REST-API</span>
                                    </h2>
                                    <h2 className="text-3xl pt-2">
                                        Type:{" "}
                                        <span className="text-emerald-100">School</span>
                                    </h2>
                                    <div className="pt-5">
                                        <h2 className="text-3xl pb-2">
                                            Description:
                                            <span className="text-emerald-100 ">
                                    {" "} Spring Boot REST-API that is used to store and retrieve data from a SQL database. Including geometrical data, Role-Based Spring Security, and Spring Data JPA. {" "}
                                </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Technologies:{" "}
                                            <span className="text-orange-600">
                    Java
                  </span>
                                            {", "}
                                            <span className="text-green-500">
                    Spring Boot
                  </span>
                                        </h2>
                                        <h2 className="text-3xl pt-2 pb-2">
                                            Github:{" ->"}{" "}
                                            <span className="text-emerald-100 decoration-dashed underline"><a
                                                target="_blank"
                                                href="https://github.com/sebastianpiresmolin/spring-rest-api">Link</a></span>
                                        </h2>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center max-w-[45%] h-fit">
                                    <h1  className="min-w-[100%] text-xl bg-black text-center border-2 border-b-0 border-emerald-300 border-dashed">Spring Boot REST-API</h1>
                                    <img src="/springApi.png" alt="Spring Boot REST-API" className="border-2 border-emerald-300 border-dashed"/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </motion.div>
    );
}
