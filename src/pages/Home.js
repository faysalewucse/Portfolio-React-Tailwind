import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import HeroSections from "./HeroSections";
import Portfolio from "./Portfolio";
import Service from "./Service";
import WorkFlow from "./WorkFlow";

export default function Home() {
  return (
    <div>
      <HeroSections />
      <Experience />
      <Portfolio />
      <Service />
      <WorkFlow />
      <Contact />
    </div>
  );
}
