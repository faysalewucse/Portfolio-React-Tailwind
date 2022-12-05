import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialMedias from "../utils/SocialMedias";

export default function HeroSections() {
  return (
    <div className="relative bg-gray-900 lg:px-[10%] px-12 lg:text-left text-center lg:py-[10%] py-12">
      <div className="lg:flex justify-between items-center gap-40 max-w-7xl mx-auto">
        <div id="banner-section" className="text-white">
          <div className="flex flex-col gap-2">
            <p className="lg:text-5xl text-4xl font-bold">
              Hey, I'm Faysal Ahmad
            </p>
            <p className="lg:text-6xl text-4xl font-bold italic text-green-500">
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
          <a
            href="/Faysal Ahmad.pdf"
            download
            className="animate-pulse p-2 bg-white text-green-800 rounded font-bold mt-5 inline-block tracking-widest lg:mx-0 hover:bg-gray-100"
          >
            Download CV
          </a>
        </div>
        <img
          className="lg:inline-block w-2/5 self-center hidden animate-pulse"
          src="./images/banner-image.png"
          alt=""
        />
      </div>
      <SocialMedias />
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-60 right-52 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-50 left-48 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-20 left-1/3 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-80 left-2/5 w-5"></div>
      <div className="lg:visible invisible animate-ping border-4 border-green-500 rounded-full h-5 absolute top-24 right-80 w-5"></div>
      <img
        src="images/wave2.png"
        alt="wave"
        width={500}
        className="absolute bottom-0 right-0 animate-pulse hidden lg:inline-block"
      />
    </div>
  );
}
