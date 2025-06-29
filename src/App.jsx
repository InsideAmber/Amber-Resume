import React, { useState } from "react";
import { BsLightbulb } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import CustomExperienceTimeline from "./components/CustomExperienceTimeline";
import CustomProjectTimeline from "./components/CustomProjectTimeline";
import { skillsData, contacts } from "./constants";
import EducationCard from "./components/EducationCard";

const App = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "dark bg-gray-900" : ""}>
      <div className=" pt-16 pb-12">
        <div className="float-right absolute top-2 right-12 xs:right-2 xs:absolute xs:top-2">
          <button
            onClick={changeTheme}
            className="dark:bg-white bg-white py-1 px-1 mr-8 hover:bg-gray-100 text-gray-800 font-semibold  rounded-full shadow"
          >
            {theme ? <BsLightbulb size={35} /> : <MdDarkMode size={35} />}
          </button>
        </div>
        <div className="dark:bg-slate-800 container bg-white w-10/12 xs:w-11/12 h-max pb-8 m-auto rounded-xl">
          <div className="pt-8 pl-14">
            <h1 className="text-6xl dark:text-blue-800 font-display">
              <span className="dark:text-blue-800 font-bold font-display">
                Amber
              </span>{" "}
              <span className="font-display">Khan</span>
            </h1>
            <h3 className="text-2xl mt-2 font-light font-serif dark:text-white">
              Full Stack Engineer (MERN)
            </h3>
          </div>
          <div className="pt-5 pl-14 pr-14 mt-1 dark:text-white">
            <p className="font-light font-sans leading-relaxed">
              Seeking a challenging position as a MERN Stack Developer
              specializing in ReactJS, where I can leverage my strong technical
              skills and hands-on experience to contribute to the development
              and enhancement of cutting-edge web applications. Passionate about
              crafting elegant user interfaces, optimizing performance, and
              collaborating with cross-functional teams to deliver exceptional
              user experiences. Eager to apply my expertise in ReactJS, along
              with my proficiency in other MERN technologies, to create
              innovative and efficient solutions that drive business growth and
              exceed client expectations.
            </p>
            <p className="font-light font-sans mt-6">
              Nice to have you here, Stranger 😊
            </p>
          </div>
          <div className="mt-6 pl-14">
            <a
            href="/Amber_Khan_MERN_Stack_Resume_2025.pdf"
             download
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold font-sans py-2 px-4 border border-gray-400 rounded shadow">
              Download CV
            </a>
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-6 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <h1 className="text-3xl font-bold font-display">Skills</h1>
          </div>
          <div className="xs:ml-4 ml-12 grid grid-cols-4 xs:grid-cols-3 gap-4 mt-4 pb-6">
            {skillsData.map((item) => (
              <div key={item.id} className="flex flex-col">
                <h3 className="text-lg font-semibold font-sans">
                  {item.title}
                </h3>
                <p className="text-sm font-extralight font-serif text-gray-700 dark:text-gray-300">
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-12 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <h1 className="text-3xl font-semibold">Work Experience</h1>
          </div>
          <div className="mt-8 ml-8">
            <CustomExperienceTimeline />
            {/* <ExperienceTimeline theme={theme} /> */}
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-6 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <h1 className="text-3xl font-semibold">Education</h1>
          </div>
          <div className="xs:ml-4 ml-12 mt-4 pb-6">
            <EducationCard />
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-12 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <h1 className="text-3xl font-semibold">
              Client & Personal Projects
            </h1>
          </div>
          <div className="mt-8 ml-8">
            {/* <ProjectTimeline theme={theme} /> */}
            <CustomProjectTimeline />
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-12 pb-8 flex flex-col m-auto w-10/12 xs:w-11/12 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <h1 className="text-3xl font-semibold">Contact Me</h1>
          </div>
          <div className="ml-12 xs:ml-4 mt-8 xs:mt-0 grid grid-cols-4 xs:grid-cols-2 gap-4">
            <div>
              <button
                onClick={() =>
                  (window.location = "mailto:khanamber093@gmail.com")
                }
                className="xs:text-xs bg-white hover:bg-slate-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 xs:px-1 rounded-lg inline-flex items-center"
              >
                <SiGmail /> &nbsp;
                <span>Gmail</span>
              </button>
            </div>
            {contacts.map((item) => (
              <div key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <button className="xs:text-xs bg-white hover:bg-slate-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 xs:px-1 rounded-lg inline-flex items-center">
                    {item.icon} &nbsp;
                    <span>{item.name}</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
