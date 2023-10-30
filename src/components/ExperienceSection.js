import React from "react";
import { useState } from "react";

var Scroll = require("react-scroll");
let Link = Scroll.Link;


const ExperienceSection = () => {
    const workData = [
        {
            title: "Analyst 1",
            company: "Bureau Veritas Laboratoires, Montreal, QC",
            date: "2019-2023",
            description: "Perform complex sample preparatoion and microbiological analysis on food and water samples, as well as data analysis,reporting and , and investigation of out-of-specification (OOS) results.",
        },
        {
            title: "QA Engineer",
            company: "PerkinElmer Subsidiary, Shanghai, China",
            date: "2015-2016",
            description: "Be responsible for the quality control of the products, software applications and service. Investigate customer complaints. Perform internal audit for compliance and continuous improvement.",
        },
    ];
    const educationData = [
        {
            title: "Full Stack Developer AEC Program",
            company: "John Abbott College, Sainte-Anne-de-Bellevue, QC",
            date: "2023-2024",
            description: "1305-hour full-time intensive program that provides hands-on training, as well as individual and team projects.",
        },
        {
            title: "Master's Degree in Microbiology",
            company: "Huazhong University of Science&Technology, Wuhan, China",
            date: "2009-2012",
            description: "Study and research on the isolation of microorganisms that secrete lipase, purification, and characterization of lipase, as well as the manufacture of recombinant plasmids and transformation.",
        },
    ];

    const [activeData, setActiveData] = useState(educationData);
    const [educationButtonBg, setEducationButtonBg] = useState('bg-teal-600');
    const [workButtonBg, setWorkButtonBg] = useState('bg-green-100');

    const handleEducationClick = () => {
        setActiveData(educationData);
        setEducationButtonBg('bg-teal-600');
        setWorkButtonBg('bg-green-100');
    };

    const handleWorkClick = () => {
        setActiveData(workData);
        setEducationButtonBg('bg-green-100');
        setWorkButtonBg('bg-teal-600');
    };
    return (
        <section id="experience">
            <div className="my-12 pb-3 md:pt-12 md:pb-12 font-Poppins">
                <h1 className="text-center font-bold text-4xl mb-6">
                    Experience
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="">
                    <div className="rounded-full bg-green-100 w-180 h-20 flex justify-center p-3 mx-12 z-10 relative">
                        <button
                            onClick={handleEducationClick}
                            className={`rounded-full ${educationButtonBg} w-80 uppercase font-medium text-base mx-7`}>Education - 01</button>
                        <button
                            onClick={handleWorkClick}
                            className={`rounded-full ${workButtonBg} w-80 uppercase font-medium text-base mx-7`}>Work - 02 </button>
                    </div>
                    <div className="bg-slate-100 border-2 border-white rounded -mt-5">
                        <div className="flex p-5 mt-12 mx-3">
                            {activeData.map((data, index) => (
                                <div
                                    key={index}
                                    className="px-5 animate-fadeInLeft w-1/2 border-l-2 border-teal-600 relative"
                                >
                                    <div className="absolute top-0 left-0 -ml-2.5">
                                        <div className="w-4 h-4 rounded-full border-4 border-teal-600 bg-white"></div>
                                    </div>
                                    <div className="pl-2">
                                        <h1 className="font-semibold text-lg mb-3">{data.title}</h1>
                                        <h2 className="text-base mb-3">{data.company}</h2>
                                        <div className="mb-5">
                                            <span className="bg-teal-600 text-white p-1 px-2">{data.date}</span>
                                        </div>
                                        <p className="text-sm">{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center">
                <Link
                    to="contact"
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
export default ExperienceSection;
