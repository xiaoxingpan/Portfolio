import React from "react";
import { HiArrowDown } from "react-icons/hi";

var Scroll = require("react-scroll");
let Link = Scroll.Link;

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-12 py-16 sm:py-16 md:py-12 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <img
            src="assets/headshot.jpg"
            alt=""
            width={"390"}
            height={"425"}
            className="rounded-full shadow-2xl"
            priority="true"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl text-center font-bold mt-6 md:mt-0 md:text-4xl ">
            <span className="text-3xl">Hi, I&#39;m </span>{" "}
            <span className="text-teal-600">Xiaoxing</span> !
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Development{" "}
            </span>
            student at John Abbott College.
            I&#39;m Seeking internship or employment starting Jan 15, 2024.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold w-32 px-6 py-3 bg-teal-600 rounded shadow hover:bg-sky-600 cursor-pointer flex items-center justify-center mx-auto"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
