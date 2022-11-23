import React from "react";

export default function HeroSections() {
  return (
    <div className="bg-gray-900 lg:px-72 px-12 lg:text-left text-center lg:py-24 py-12">
      <div className="lg:flex justify-center items-center gap-40">
        <div id="banner-section" className="text-white">
          <div className="flex flex-col gap-2">
            <p className="lg:text-5xl text-4xl font-bold">
              Hey, I'm Faysal Ahmad
            </p>
            <p className="lg:text-xl">
              A software engineer and MERN Stack Developer
            </p>
            <p className="lg:text-6xl text-4xl font-bold italic text-green-500">
              I Design and Build Websites
            </p>
            <p className="lg:text-xl">
              I love to visualise ideas and make them come alive in a website.
            </p>
          </div>
          <a
            href="/Faysal Ahmad.pdf"
            download
            className="p-2 bg-white text-green-800 rounded font-bold mt-5 inline-block tracking-widest lg:mx-0 hover:bg-gray-100"
          >
            Download CV
          </a>
        </div>
        <img
          className="lg:inline-block w-2/5 self-center hidden"
          src="./images/banner-image.png"
          alt=""
        />
      </div>
      <div className="text-white flex gap-5 justify-center mt-10">
        <a
          href="https://github.com/faysalewucse"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <ion-icon size="large" name="logo-github"></ion-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/faysal-ahmed-me/"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-900 duration-300"
        >
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="https://www.facebook.com/faysalahmad.me"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
        >
          <ion-icon size="large" name="logo-facebook"></ion-icon>
        </a>
        <a
          href="https://wa.me/1634495020"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-500 duration-300"
        >
          <ion-icon size="large" name="logo-whatsapp"></ion-icon>
        </a>
        <div
          onClick={() => navigator.clipboard.writeText("+8801634495020")}
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
        >
          <ion-icon size="large" name="call-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
