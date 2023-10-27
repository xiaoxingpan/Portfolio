import React from "react";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "BookEasy - Online book purchasing website",
    description:
      "Maven, Java Spring Boot, Hibernate, JPA, Thymeleaf, Bootstrap, CSS3, RestAPI",
    image: "assets/ecommerce.png",
    github: "https://github.com/xiaoxingpan/MavenJavaSpringBoot/tree/main/bookeasy",
    link: "",
  },
  {
    name: "Photobazaar - Online photo sharing and trading platform, Team project of 3",
    description:
      "HTML5, CSS3, Bootstrap, Javascript, jQuery",
    image: "assets/my-daily-wellness.png",
    github: "",
    link: "",
  },
  {
    name: "GoldenHorizonResort - Online hotel reservation website",
    description:
      "Laravel, Twig, PHP, MySQL, XAMPP,CSS3, Bootstrap, Lanched on Docker with AWS EC2, VPC, DNS, NACL, WAF, load-balancers",
    image: "assets/employee_management.png",
    github: "",
    link: "",
  },
  {
    name: "BlackJack - Online browser-based game, Team project of 2",
    description:
      "HTML5, CSS3, Bootstrap, Javascript, jQuery",
    image: "assets/my-daily-wellness.png",
    github: "https://github.com/xiaoxingpan/BlackJack",
    link: "",
  },
  {
    name: "Auction - Online bidding platform",
    description:
      "React, NodeJS, Sequelize, JWT, Bootstrap, RestAPI, MySQL",
    image: "assets/my-daily-wellness.png",
    github: "https://github.com/xiaoxingpan/REACT-NODEJS-MYSQL/tree/main/Auctions",
    link: "",
  },


];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <a href={project.github}>
                    <img
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </a>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </a>
                    {project.link !== "" ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
}
