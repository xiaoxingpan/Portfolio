import React from "react";
import About from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import Hero from "../components/HeroSection";
// import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero />
      <About />
      <ProjectsSection />
      <EducationSection />
      {/* <ContactSection /> */}
    </main>
  );
};

export default Home;
