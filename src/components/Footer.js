import React from "react";
import SocialMedias from "../utils/SocialMedias";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="text-center">
        <h1 className="text-4xl">Faysal Ahmad</h1>
        <p className="my-5 text-2xl font-serif">
          Thanks again for watching my website. I’m always active in this social
          media under included.
          <br /> So you can connect with me
        </p>
        <SocialMedias extraStyle={"w-fit mx-auto"} />
        <hr className="border border-green-600 w-1/3 mx-auto my-5" />
        <h6>
          All Right Reserved - <a href="/">Faysal Ahmad</a>
        </h6>
      </div>
    </footer>
  );
}
