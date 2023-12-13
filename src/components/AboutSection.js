import React from "react";
// import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { GrLinkedin } from "react-icons/gr";
import { RxGithubLogo } from "react-icons/rx";

const skills = [
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "w/Sass" },
  { skill: "Bootstrap" },
  { skill: "Thymeleaf" },
  { skill: "Tailwind CSS" },
  { skill: "React" },
  { skill: "Ajax" },
  { skill: "jQuery" },
  { skill: "Razor Pages(ASP.net Core) " },
  { skill: "WPF" },
  { skill: "NodeJS" },
  { skill: "Laravel" },
  { skill: "Java Spring Boot" },
  { skill: "MySQL" },
  { skill: "SQLite" },
  { skill: "MongoDB" },
  { skill: "ORM(Sequelize/Mongoose)" },
  { skill: "PostgreSQL" },
  { skill: "S3/EC2/RDS" },
  { skill: "Azure(VMs)" },
  { skill: "Heroku" },
  { skill: "Docker" },
  { skill: "Vercel" },
  { skill: "VSCode" },
  { skill: "NetBeans" },
  { skill: "IntelliJ" },
  { skill: "Eclipse" },
  { skill: "GitHub" },
  { skill: "Agile" },
  { skill: "Scrum" },
  { skill: "Kanban" },
  { skill: "Postman" },
  { skill: "Junit" },
  { skill: "Figma" },
  { skill: "Trello" },
];

const AboutSection = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "assets/Xiaoxing Pan-Full Stack Developper.pdf"; // Replace with the actual file URL
    downloadLink.download = "Xiaoxing Pan-Full Stack Developper.pdf"; // Set the desired filename
    downloadLink.click();
  };
  return (
    <section id="about">
      <div className="my-12 pb-3 md:pt-12 md:pb-12 font-Poppins">
        <h1 className="text-center font-bold text-4xl mb-6">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col my-3 space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Xiaoxing and I am a{" "}
              <span className="font-bold text-teal-600">{"highly ambitious"}</span>,
              <span className="font-bold text-teal-600">{" self-motivated"}</span>, and
              <span className="font-bold text-teal-600">{" driven"}</span> full stack developer
              based in Montreal, QC, Canada.
            </p>
            <br />
            <p>
              I have a proven ability to
              {" "}<span className="font-bold text-teal-600">adapt quickly</span>{" "}
              to new technologies and environments, and I excel both
              {" "}<span className="font-bold text-teal-600">independently</span>{" "}
              and as part of
              {" "}<span className="font-bold text-teal-600">a collaborative team</span>{" "}.
              My approach to work is defined by being a{" "}
              <span className="font-bold text-teal-600">quick learner</span>{" "},
              {" "}<span className="font-bold text-teal-600">meticulous in every detail</span>{" "},
              {" "}<span className="font-bold text-teal-600">rigorously organized</span>{" "}, and
              {" "}<span className="font-bold text-teal-600">unwaveringly efficient</span>{" "}.
            </p>
            <br />
            <div>
              <ul className="list-disc pl-4">
                <li>Email: panxx1988@gmail.com</li>
                <li>Telephone: 514-553-1279</li>
                <li>
                  <div className="flex">Social Media:
                    <a href="https://www.linkedin.com/in/xiaoxingpan" target="_blank" rel="noreferrer">
                      <GrLinkedin
                        size={25}
                        className="hover:-translate-y-1 transition-transform cursor-pointer me-2 ms-4" />
                    </a>
                    <a href="https://www.github.com/xiaoxingpan" target="_blank" rel="noreferrer">
                      <RxGithubLogo
                        size={25}
                        className="hover:-translate-y-1 transition-transform cursor-pointer mx-2" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-2">My Skills</h1>
            <div className="text-sm flex flex-wrap flex-row justify-center z-10 md:justify-center pt-3">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 hover:bg-gray-300 rounded font-medium"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

          </div>
        </div>
        <div className="flex relative items-center justify-center h-20 w-full">
          <img
            src="assets/resume.png"
            alt=""
            width={80}
            height={80}
            onClick={() => handleDownload()}
            // className="hidden md:block md:relative  md:bottom-0 md:left-28 md:z-0"
            className="hidden md:block absolute md:z-0 cursor-pointer h-20 w-20"
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className="animate-bounce cursor-pointer"><img
            src="assets/mouse2.png"
            alt="scroll-down" className="rotate-180 transform origin-center"
          /></div>
        </Link>
      </div>
    </section>
  );
};
export default AboutSection;
