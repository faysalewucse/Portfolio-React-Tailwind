import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let Links = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Projects", route: "/projects" },
    { name: "BLOG'S", route: "/" },
    { name: "CONTACT", route: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div
      id="navbar"
      className="text-white px-10 lg:py-5 lg:px-[10%] py-5 lg:bg-gray-900 bg-gray-900"
    >
      <div className="lg:flex justify-between lg:items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl animate-pulse">
          <p style={{ fontFamily: "Black Ops One", fontSize: "1.7rem" }}>
            <span
              style={{ fontFamily: "Black Ops One" }}
              className="text-green-500"
            >
              Faysal
            </span>{" "}
            Ahmad.
          </p>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          <ion-icon size="large" name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`lg:flex justify-between lg:items-center gap-40 mt-0 ${
            !open && "hidden"
          }`}
        >
          <ul className="lg:flex justify-around font-sandwip">
            {/* hover:text-navdark cursor-pointer transition-all duration-300 */}
            {Links.map((link) => (
              <li key={link.name} className="lg:ml-8 lg:my-0 my-2">
                <a
                  href={link.route}
                  className="text-white hover:text-gray-400 duration-500 font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="border border-green-600 text-white hover:bg-gradient-to-br hover:to-green-600 hover:from-green-400 lg:px-10 px-5 py-1 rounded font-bold">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
}
