import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/" },
    { name: "Projects", link: "/lessons" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="text-white px-10 lg:py-5 lg:px-72 py-5 lg:bg-gray-900 bg-gray-900 lg:flex justify-between lg:items-center">
      <Link to="/" className="text-xl">
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
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="border border-green-500 text-white hover:bg-green-600 lg:px-10 px-5 py-1 rounded">
          Hire Me
        </button>
      </div>
    </div>
  );
}
