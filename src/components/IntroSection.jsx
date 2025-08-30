import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const IntroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="dark:bg-slate-800 container bg-white w-10/12 xs:w-11/12 h-max pb-8 m-auto rounded-xl"
    >
      <div className="pt-8 pl-14">
        <h1 className="text-6xl dark:text-blue-800 font-display">
          <span className="dark:text-blue-800 font-bold font-display">
            Amber
          </span>{" "}
          <span className="font-display">Khan</span>
        </h1>

        {/* Typewriter effect */}
        <motion.h3
          className="text-2xl mt-2 font-light font-serif dark:text-white min-h-[32px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typewriter
            words={["Full Stack Engineer (MERN)"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h3>
      </div>

      <motion.div
        className="pt-5 pl-14 pr-14 mt-1 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p className="font-light leading-relaxed">
          A passionate and results-driven MERN Stack Developer with a strong
          focus on building scalable, high-performance web applications using
          MongoDB, Express.js, React.js, and Node.js. Experienced in crafting
          pixel-perfect, responsive UIs with React.js, Tailwind CSS, and
          TypeScript. Adept at designing and integrating RESTful APIs,
          optimizing front-end performance, and implementing efficient state
          management solutions using Redux and Zustand. Committed to writing
          clean, maintainable code and collaborating effectively within
          cross-functional Agile teams. Enthusiastic about creating real-world
          solutions through modern web technologies — always ready to take on
          new challenges and deliver meaningful digital experiences.
        </p>

        <p className="font-light font-sans mt-6">
          Thanks for stopping by — let’s create something awesome together! 😊
        </p>
      </motion.div>

      <div className="mt-6 pl-14 flex gap-4 flex-wrap">
        <motion.a
          href="/Amber_Khan_Resume.pdf"
          download
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold font-sans py-2 px-4 border border-gray-400 rounded shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 Download CV
        </motion.a>

        <motion.button
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans py-2 px-4 border border-blue-700 rounded shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📬 Contact Me
        </motion.button>
      </div>
    </motion.div>
  );
};

export default IntroSection;
