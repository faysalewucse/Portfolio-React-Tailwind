import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialMedias from "../utils/SocialMedias";

export default function HeroSections() {
  return (
    <div className="relative bg-gray-900 lg:text-left text-center">
      <div className="lg:flex justify-between items-center gap-40 max-w-7xl mx-auto md:min-h-[90vh] py-10">
        <div id="banner-section" className="text-white">
          <div className="flex flex-col gap-3">
            <p className="lg:text-4xl text-4xl font-bold">
              Hey, I'm <br />{" "}
              <span className="md:text-6xl text-md font-bold text-transparent bg-gradient-to-r to-yellow-300 from-green-600 bg-clip-text">
                Faysal Ahmad
              </span>
            </p>
            <p className="lg:text-4xl md:text-4xl text-xl font-bold italic text-green-500">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Web Developer",
                  "App Developer",
                  "UI Designer",
                ]}
                loop={10}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </p>
            <p className="lg:text-xl">
              I love to visualise ideas and make them come alive in a website.
            </p>
          </div>
          <div className="py-2 px-4 bg-white text-green-800 rounded font-bold mt-5 inline-block lg:mx-0 hover:bg-gray-100">
            <a href="/Faysal Ahmed.pdf" download>
              Download CV
            </a>
            <i className="fa-solid fa-download ml-4"></i>
          </div>
          <SocialMedias extraStyle={"justify-center md:justify-start"} />
        </div>
        <div className="md:block hidden w-1/2 relative">
          <h1 className="border-4 border-green-700 border-dashed bg-yellow-50 bg-opacity-80 text-center absolute py-4 px-8 font-bold text-2xl rounded -left-20 -bottom-5">
            <span>10+</span>
            <br /> Projects
          </h1>
          <img
            src="images/profile.jpg"
            alt="profile"
            className="w-3/4 rounded-3xl"
          />
        </div>
      </div>
      <div className="lg:visible invisible animate-spin border-4 border-green-500 h-10 absolute top-60 right-52 w-10"></div>
      <div className="lg:visible invisible animate-spin border-4 border-green-500 h-10 absolute top-50 left-48 w-10"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-20 left-1/3 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-80 left-2/5 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-24 right-80 w-5"></div>
      <img
        src="images/wave2.png"
        alt="wave"
        width={400}
        className="absolute bottom-0 right-0 animate-pulse hidden lg:inline-block"
      />
    </div>
  );
}
