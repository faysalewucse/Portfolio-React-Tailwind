import React from "react";

export default function SocialMedias() {
  return (
    <div className="lg:mt-36 mt-10 text-white flex gap-5 justify-center">
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
  );
}
