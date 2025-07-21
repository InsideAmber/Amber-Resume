import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsLightbulb } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaBriefcase,
  FaGraduationCap,
  FaHandsHelping,
  FaLaptopCode,
} from "react-icons/fa";
import CustomExperienceTimeline from "./components/CustomExperienceTimeline";
import CustomProjectTimeline from "./components/CustomProjectTimeline";
import { contacts } from "./constants";
import EducationCard from "./components/EducationCard";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+918603926797"; // 🔁

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide tooltip after 2 seconds
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

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
        <IntroSection />
        <SkillsSection />

        <div className="dark:bg-slate-600 dark:text-white pt-12 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <motion.h1
              className="text-2xl md:text-3xl font-bold flex items-center gap-3 font-display"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaBriefcase className="text-blue-500 hover:scale-110 transition-transform" />
              Work Experience
            </motion.h1>
          </div>
          <div className="mt-8 ml-8">
            <CustomExperienceTimeline />
            {/* <ExperienceTimeline theme={theme} /> */}
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-6 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <motion.h1
              className="text-2xl md:text-3xl font-bold flex items-center gap-3 font-display"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGraduationCap className="text-green-600 hover:scale-110 transition-transform" />
              Education
            </motion.h1>
          </div>
          <div className="xs:ml-4 ml-12 mt-4 pb-6">
            <EducationCard />
          </div>
        </div>

        <div className="dark:bg-slate-600 dark:text-white pt-12 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
          <div className="flex ml-12 items-center xs:ml-4">
            <motion.h1
              className="text-2xl md:text-3xl font-bold flex items-center gap-3 font-display"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaLaptopCode className="text-indigo-500 hover:text-indigo-700 hover:scale-110 transition-transform duration-200" />
              Client & Personal Projects
            </motion.h1>
          </div>
          <div className="mt-8 ml-8">
            {/* <ProjectTimeline theme={theme} /> */}
            <CustomProjectTimeline />
          </div>
        </div>

        <div
          id="contact"
          className="dark:bg-slate-600 dark:text-white pt-12 pb-10 px-6 sm:px-4 w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 dark:border dark:border-slate-500 rounded-xl mt-6 mx-auto shadow-md transition-all"
        >
          <div className="text-center">
            <motion.h1
              className="text-2xl md:text-3xl font-bold flex items-center gap-3 font-display justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaHandsHelping className="text-pink-500 hover:scale-110 transition-transform" />
              Let's Connect
            </motion.h1>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              I’m just a click away. Let’s connect and create something amazing!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Gmail Button */}
            <button
              onClick={() =>
                (window.location.href = "mailto:khanamber093@gmail.com")
              }
              className="contact-btn group"
              title="Email me on Gmail"
            >
              <SiGmail className="mr-2 group-hover:text-red-500 transition-colors" />
              <span>Gmail</span>
            </button>

            {/* Phone Button */}
            <div className="relative">
              <button
                onClick={handleCopy}
                className="contact-btn group"
                title="Click to copy phone number"
              >
                <FaPhoneAlt className="mr-2 group-hover:text-green-500 transition-colors" />
                <span>Phone</span>
              </button>
              {/* Tooltip */}
              {copied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 shadow-lg dark:bg-white dark:text-black transition-opacity duration-300">
                  Copied!
                </div>
              )}
            </div>

            {/* Dynamic Contacts */}
            {contacts.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                <button
                  className="contact-btn group"
                  title={`Visit ${item.name}`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
