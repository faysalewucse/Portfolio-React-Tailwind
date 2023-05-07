import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../utils/projects";

export default function AllProjects({ length, category }) {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        layout
        className="grid grid-cols-1 min-[1600px]:grid-cols-3 md:grid-cols-2 p-5 gap-5 my-10"
      >
        {projects
          .filter((project) => {
            if (category !== "all") {
              if (project.type === category) return project;
            } else return project;
            return 0;
          })
          .slice(0, length)
          .map((project, index) => {
            return (
              <AnimatePresence key={index}>
                <motion.div
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(1)" }}
                  className="group/item rounded-lg bg-gray-800 transform hover:bg-gray-700 transition duration-500 lg:hover:scale-105 flex flex-col justify-between p-3"
                >
                  <img
                    className="relative rounded-b object-cover h-60 rounded-lg"
                    src={`./images/portfolio/${project.image}`}
                    alt={project.name}
                  />
                  <h1 className="font-bold tracking-wider left-5 my-2 text-2xl">
                    {project.name}
                  </h1>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.live_demo}
                      target="blank"
                      className="border border-green-500 px-4"
                    >
                      Live
                    </a>
                    <a href={project.source_code} target="blank" className="">
                      <img
                        className="w-10"
                        src="/images/github-mark.png"
                        alt="github"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
      </motion.div>
    </div>
  );
}
