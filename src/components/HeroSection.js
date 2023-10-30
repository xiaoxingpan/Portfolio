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
          <h1 className="text-4xl text-center font-bold mt-6 md:mt-0 md:text-4xl font-sans font-Poppins">
            <span className="text-3xl">Hi, I&#39;m </span>{" "}
            <span className="text-teal-600">Xiaoxing</span> !
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center  font-Poppins">
            A{" "}
            <span className="font-semibold text-teal-600">
              Full Stack developer{" "}
            </span>
            student at John Abbott College that is seeking for internship or employment starting Jan 15, 2024.
          </p>
          <p className="text-base mt-4 mb-6 md:text-xl text-center font-Poppins">I'm committed to learning and growing in my skills, and looking forward to contribute to projects that demand a blend of technicaland adaptability.</p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold w-32 px-6 py-3 bg-teal-600 rounded shadow hover:bg-sky-600 cursor-pointer flex items-center justify-center mx-auto "
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
          <div className="animate-bounce cursor-pointer flex flex-row ">
            {/* <div className="font-Poppins font-medium flex items-center justify-center">Scroll down</div> */}
            <div className="rotate-180 transform origin-center"><img
              src="assets/mouse2.png"
              alt="scroll-down"
            /></div>
          </div>
          {/* <HiArrowDown size={35} className="animate-bounce cursor-pointer" /> */}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
