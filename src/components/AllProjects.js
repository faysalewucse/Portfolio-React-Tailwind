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
                  className="group/item rounded-lg bg-gray-800 transform hover:bg-gray-700 transition duration-500 lg:hover:scale-105 flex flex-col justify-between"
                >
                  <h1 className="font-bold tracking-wider my-2">
                    {project.name}
                  </h1>
                  <img
                    className="relative rounded-b object-cover h-60 w-full"
                    src={`./images/portfolio/${project.image}`}
                    alt={project.name}
                  />
                  <div className="lg:invisible group-hover/item:visible absolute bottom-1 left-1 transform flex gap-5 mt-10 text-sm w-full">
                    <a
                      href={project.live_demo}
                      target="blank"
                      className="bg-green-500 px-5 py-2 hover:bg-green-600 rounded-md"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.source_code}
                      target="blank"
                      className="bg-gray-600 px-5 py-2 hover:bg-gray-700 rounded-md"
                    >
                      Github
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
