import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialui,
  SiAngularjs,
  SiNodedotjs,
  SiApollographql,
} from "react-icons/si";
import { HiOutlineWrench } from "react-icons/hi2"
import { motion } from "framer-motion";

const skillsData = [
  { id: 1, title: "Reactjs", level: "Advanced" },
  { id: 2, title: "Redux", level: "Advanced" },
  { id: 3, title: "Angularjs", level: "Intermediate" },
  { id: 4, title: "HTML,CSS", level: "Advanced" },
  { id: 5, title: "Nextjs", level: "Advanced" },
  { id: 6, title: "Nodejs", level: "Intermediate" },
  { id: 7, title: "Javascript", level: "Advanced" },
  { id: 8, title: "Typescript", level: "Advanced" },
  { id: 9, title: "MongoDB", level: "Intermediate" },
  { id: 10, title: "GraphQL", level: "Intermediate" },
  { id: 11, title: "Apollo Client", level: "Intermediate" },
  { id: 12, title: "Tailwind CSS", level: "Advanced" },
  { id: 13, title: "Material UI", level: "Advanced" },
];

const icons = {
  Reactjs: <FaReact size={20} color="#61DBFB" />,
  Redux: <SiRedux size={20} color="#764abc" />,
  Angularjs: <SiAngularjs size={20} color="#dd0031" />,
  "HTML,CSS": (
    <span className="flex gap-1 items-center">
      <SiHtml5 size={20} color="#e34c26" />
      <SiCss3 size={20} color="#264de4" />
    </span>
  ),
  Nextjs: <SiNextdotjs size={20} />,
  Nodejs: <SiNodedotjs size={20} color="#68A063" />,
  Javascript: <SiJavascript size={20} color="#f0db4f" />,
  Typescript: <SiTypescript size={20} color="#007acc" />,
  MongoDB: <SiMongodb size={20} color="#4DB33D" />,
  GraphQL: <SiGraphql size={20} color="#e535ab" />,
  "Apollo Client": <SiApollographql size={20} color="#311C87" />,
  "Tailwind CSS": <SiTailwindcss size={20} color="#38bdf8" />,
  "Material UI": <SiMaterialui size={20} color="#007fff" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function SkillsSection() {
  return (
    <div className="dark:bg-slate-600 dark:text-white pt-6 flex flex-col m-auto w-10/12 xs:w-11/12 xs:pr-2.5 bg-slate-100 rounded-xl mt-4">
      <div className="flex ml-12 items-center xs:ml-4">
        <motion.h1
          className="text-2xl md:text-3xl font-bold flex items-center gap-3 font-display"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineWrench className="text-indigo-500 hover:scale-110 transition-transform" />
          Tech Stack
        </motion.h1>
      </div>
      <div className="xs:ml-4 ml-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 pb-6">
        {skillsData.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center gap-3 bg-white dark:bg-slate-700 px-4 py-3 rounded-xl shadow-md w-full min-w-[150px] max-w-[200px] cursor-pointer transition-all"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <div className="text-xl">{icons[item.title]}</div>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {item.level}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
