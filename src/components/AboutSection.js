import React from "react";

const skills = [
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "w/Sass" },
  { skill: "Bootstrap" },
  { skill: "Thymeleaf" },
  { skill: "React" },
  { skill: "JSX" },
  { skill: "Ajax" },
  { skill: "jQuery" },
  { skill: "Razor Pages(ASP.net Core) " },
  { skill: "WPF" },
  { skill: "NodeJS" },
  { skill: "Express" },
  { skill: "Laravel" },
  { skill: "Java Spring Boot" },
  { skill: "React/Next.JS" },
  { skill: "MySQL" },
  { skill: "SQLite" },
  { skill: "MongoDB" },
  { skill: "Sequelize ORM" },
  { skill: "PostgreSQL" },
  { skill: "GraphQL" },
  { skill: "AWS Cloud Service" },
  { skill: "S3/EC2" },
  { skill: "Azure(VMs)" },
  { skill: "Heroku" },
  { skill: "Putty" },
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
    downloadLink.href = "assets/CV-WeiJin.pdf"; // Replace with the actual file URL
    downloadLink.download = "CV-WeiJin.pdf"; // Set the desired filename
    downloadLink.click();
  };
  return (
    <section id="about">
      <div className="my-6 pb-3 md:pt-3 md:pb-3">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Xiaoxing and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> full stack developer
              based in Montreal, QC, Canada.
            </p>
            <br />
            <p>
              I will graduate from John Abbott College in Jaunary next year and
              start working in full stack development field.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <div className="flex relative justify-center z-10 h-32 w-full">
              <img
                src="assets/resume.png"
                alt=""
                width={80}
                height={80}
                onClick={() => handleDownload()}
                // className="hidden md:block md:relative  md:bottom-0 md:left-28 md:z-0"
                className="hidden md:block absolute md:bottom-0  md:z-0 cursor-pointer h-20 w-20 "
              />
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-2">My Skills</h1>
            <div className="text-sm flex flex-wrap flex-row justify-center z-10 md:justify-center">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 hover:bg-gray-300 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
