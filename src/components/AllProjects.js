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
                  <h1 className="font-bold text-left tracking-wider text-2xl mt-4">
                    {project.name}
                  </h1>
                  <p className="text-left my-5">
                    {project.features?.slice(0, 3).map((feature, index) => (
                      <p>
                        {index + 1}. {feature}
                      </p>
                    ))}
                    {project.features && project.features.length > 3 && (
                      <small className="underline">See More</small>
                    )}
                  </p>
                  <div className="flex gap-5 justify-between items-center">
                    <a
                      href={project.live_demo}
                      target="blank"
                      className="text-black font-bold bg-gradient-to-tr from-green-400 to-yellow-300 py-2 w-full rounded-lg"
                    >
                      Live
                    </a>
                    <a
                      href={project.source_code}
                      target="blank"
                      className="bg-gray-700 text-white py-2 rounded-lg w-full"
                    >
                      GitHub
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
