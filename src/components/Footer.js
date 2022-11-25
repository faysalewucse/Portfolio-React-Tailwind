import React from "react";
import SocialMedias from "../utils/SocialMedias";

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="bg-gray-900 text-white py-12">
        <div className="row text-center">
          <div className="col">
            <h1 className="text-4xl" style={{ fontFamily: "Black Ops One" }}>
              Faysal Ahmad
            </h1>
            <p className="my-5 text-2xl font-serif">
              Thanks again for watching my website. I’m always active in this
              social media under included.
              <br /> So you can connect with me
            </p>
            <SocialMedias />
            <hr className="border border-green-600 w-1/3 mx-auto" />
            <h6>
              All Right Reserved - <a href="/">Faysal Ahmad</a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
