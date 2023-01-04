import React from "react";
import "../components/AllProjects";
import AllProjects from "../components/AllProjects";
import { projects } from "../utils/projects";

export default function Projects() {
  return (
    <section
      id="portfolio-section"
      className="py-5 bg-gray-900 opacity-95 text-white text-center px-2 min-[1600px]:px-72 md:px-24"
    >
      <AllProjects length={projects.length} category={"all"} />
    </section>
  );
}
