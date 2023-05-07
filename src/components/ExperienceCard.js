import { motion } from "framer-motion";
export default function ExperienceCard(props) {
  return (
    <div className="border border-green-500 border-dashed text-center p-5 rounded mt-5 h-72">
      <h1 className="font-bold text-xl mb-5">{props.topic}</h1>
      <div className="grid grid-cols-3 lg:grid-cols-4 place-items-center items-baseline gap-5">
        {props.experiences.map((experience, index) => {
          return (
            <div key={index}>
              <img
                width={30}
                src={`images/experience/${experience.icon}.png`}
                alt=""
                className="mb-2 mx-auto"
              />
              <h1 className="text-sm">{experience.name}</h1>
            </div>
          );
        })}
      </div>
      <motion.div
        animate={{ x: props.position.x - 300, y: props.position.y - 300 }}
        className="h-40 w-40 bg-green-400 blur-3xl rounded-full opacity-20"
      ></motion.div>
    </div>
  );
}
