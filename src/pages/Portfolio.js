import React, { useState } from "react";

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
  const projects = [
    {
      name: "Online Food Delivery System",
      image: "FoodsBd.jpg",
      live_demo: "https://foodsbd.netlify.app/",
      source_code: "",
      type: "web",
    },
    {
      name: "Quran Learning System",
      image: "LLQ.jpg",
      live_demo: "https://dreamy-creponne-8d2692.netlify.app",
      source_code: "",
      type: "web",
    },
    {
      name: "Perfume Eccommerce Shop",
      image: "Assuzud.jpg",
      live_demo: "",
      source_code: "",
      type: "web",
    },
    {
      name: "6 Redux Projects",
      image: "redux.png",
      live_demo:
        "https://learnwithsumit.com/certificates/verify/LWSCTXN-8JXIW67G",
      source_code: "",
      type: "web",
    },
    {
      name: "An Islamic App",
      image: "Muhasaba.jpg",
      live_demo: "",
      source_code: "",
      type: "mobile",
    },
  ];

  console.log(
    projects.filter((project) => {
      if (category !== "all") {
        if (category === project.type) return project;
      }
      return project;
    })
  );
  return (
    <section
      id="portfolio-section"
      className="py-5 bg-gray-900 text-white text-center px-2 lg:px-72"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 min-[1600px]:grid-cols-3 md:grid-cols-2 p-5 gap-5 my-10">
          {projects
            .filter((project) => {
              if (category !== "all") {
                if (project.type === category) return project;
              } else return project;
              return 0;
            })
            .map((project, index) => {
              return (
                <div
                  key={index}
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
                </div>
              );
            })}
        </div>
        <p className="border border-green-500 p-2 inline-block">
          Load More Projects...
        </p>
      </div>
    </section>
  );
}
