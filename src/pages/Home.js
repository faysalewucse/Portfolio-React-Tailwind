import React from "react";
import Experience from "./Experience";
import HeroSections from "./HeroSections";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div>
      <HeroSections />
      <Experience />
      <Portfolio />
    </div>
  );
}
