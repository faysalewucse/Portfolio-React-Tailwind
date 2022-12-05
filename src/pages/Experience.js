import React from "react";

export const Experience = () => {
  const experience = {
    coding: [
      {
        icon: "c",
        name: "C",
      },
      {
        icon: "cpp",
        name: "C++",
      },
      {
        icon: "java",
        name: "JAVA",
      },
      {
        icon: "python",
        name: "Python",
      },
    ],
    frontEnd: [
      {
        icon: "html",
        name: "HTML",
      },
      {
        icon: "css",
        name: "CSS",
      },
      {
        icon: "sass",
        name: "SASS",
      },
      {
        icon: "bootstrap",
        name: "Bootstrap",
      },
      {
        icon: "js",
        name: "JavaScript",
      },
      {
        icon: "typescript",
        name: "TypeScript",
      },
      {
        icon: "react",
        name: "REACT",
      },
      {
        icon: "redux",
        name: "Redux",
      },
      {
        icon: "tailwind",
        name: "Tailwind",
      },
    ],
    backend: [
      {
        icon: "node-js",
        name: "Node JS",
      },
      {
        icon: "flask",
        name: "Flask",
      },
      {
        icon: "mysql",
        name: "MySql",
      },
      {
        icon: "firebase",
        name: "Firebase",
      },
      {
        icon: "mongodb",
        name: "MongoDB",
      },
    ],
    mobileApp: [
      {
        icon: "java",
        name: "Java",
      },
      {
        icon: "dart",
        name: "Dart",
      },
      {
        icon: "flutter",
        name: "Flutter",
      },
    ],
    editors: [
      {
        icon: "vs-code",
        name: "VS Code",
      },
      {
        icon: "android",
        name: "Android Studio",
      },
    ],
    design: [
      {
        icon: "illustrator",
        name: "Adobe Illustrator",
      },
      {
        icon: "photoshop",
        name: "Adobe Photoshop",
      },
      {
        icon: "figma",
        name: "Figma",
      },
      {
        icon: "premier-pro",
        name: "Premier Pro",
      },
      {
        icon: "audition",
        name: "Adobe Audition",
      },
    ],
    others: [
      {
        icon: "ms-word",
        name: "Office",
      },
      {
        icon: "excel",
        name: "Excel",
      },
      {
        icon: "ppt",
        name: "Power Point",
      },
    ],
  };

  const section = (topic, experiences) => {
    return (
      <div className="border border-green-500 text-center p-5 rounded mt-5">
        <h1 className="font-bold text-xl mb-5">{topic}</h1>
        <div className="grid grid-cols-3 lg:grid-cols-5 place-items-center items-baseline gap-5">
          {experiences.map((item, index) => {
            return (
              <div key={index}>
                <img
                  width={30}
                  src={`images/experience/${item.icon}.png`}
                  alt=""
                  className="mb-2 mx-auto"
                />
                <h1 className="text-sm">{item.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section
      id="experience-section"
      className="py-12 bg-gray-800 text-white px-6 lg:px-[10%]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h6 className="font-bold">What I have Learned So Far?</h6>
          <i className="fa fa-arrow-down text-green-500 font-bold" />
          <h1 className="text-4xl font-bold">Experiences</h1>
          <i className="fa fa-arrow-down text-green-500 font-bold" />
        </div>

        <div className="grid min-[1300px]:grid-cols-3 min-[600px]:grid-cols-2 grid-cols-1 gap-5">
          {section("Frontend", experience.frontEnd)}
          {section("Backend & Database", experience.backend)}
          {section("Languages", experience.coding)}
          {section("App Development", experience.mobileApp)}
          {section("Documents and Presentation", experience.others)}
          {section("Editors", experience.editors)}
          {section("Materials", experience.design)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
