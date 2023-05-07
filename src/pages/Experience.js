import ReactCursorPosition from "react-cursor-position";
import ExperienceCard from "../components/ExperienceCard";

export const Experience = () => {
  const experience = [
    {
      name: "Frontend",
      items: [
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
    },
    {
      name: "Backend & Database",
      items: [
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
    },
    {
      name: "Languages",
      items: [
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
    },
    {
      name: "App Development",
      items: [
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
    },
    {
      name: "Documents & Presentations",
      items: [
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
    },
    {
      name: "Editors",
      items: [
        {
          icon: "vs-code",
          name: "VS Code",
        },
        {
          icon: "android",
          name: "Android Studio",
        },
      ],
    },
    {
      name: "Materials",
      items: [
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
    },
  ];

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
          {experience.map((exp, index) => (
            <ReactCursorPosition key={index}>
              <ExperienceCard topic={exp.name} experiences={exp.items} />
            </ReactCursorPosition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
