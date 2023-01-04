import React, { useState } from "react";
import AllProjects from "../components/AllProjects";
import { projects } from "../utils/projects";

export default function Portfolio() {
  const [category, setCategory] = useState("all");
  const categories = [
    {
      name: "All",
      filter: "all",
    },
    {
      name: "Web App",
      filter: "web",
    },
    {
      name: "Mobile App",
      filter: "mobile",
    },
  ];

  const [length, setLength] = useState(6);
  return (
    <section
      id="portfolio-section"
      className="py-5 bg-gray-900 text-white text-center px-2 min-[1600px]:px-72 md:px-24"
    >
      <h6 className="border border-green-500 py-2 px-5 inline-block">
        <i className="fa fa-arrow-left"></i> What I have Made?
        <i className="fa fa-arrow-right"></i>
      </h6>
      <h1 className="text-3xl font-bold my-3">Portfolio Showcase</h1>
      <hr className="lg:w-1/12 w-1/2 mx-auto border border-green-500 my-2" />
      <i className="fa fa-arrow-down"></i>
      <br />
      <i className="fa fa-arrow-down"></i>
      <div className="flex justify-center gap-2 my-5">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => setCategory(category.filter)}
              className="bg-white text-black px-2 rounded hover:bg-green-500 hover:text-white transition-all duration-300"
              type="button"
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <AllProjects length={length} category={category} />
      {length < projects.length ? (
        <p
          onClick={() => setLength(length + 3)}
          className="border border-green-500 p-2 inline-block cursor-pointer hover:bg-gray-800"
        >
          Load More Projects...
        </p>
      ) : null}
    </section>
  );
}
