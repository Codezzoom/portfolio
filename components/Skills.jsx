import React from "react";
import { motion } from "framer-motion";
import skills from "../data/Skills"; // Array of skills with icons
import { Titan_One } from "next/font/google";
import BallCanvas from "./canvas/Ball";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const dropInVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative flex flex-col justify-center items-center bg-[#232946] py-16"
    >
      {/* Top Arc */}
      <div className="absolute top-0 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120V80C1440 80 1120 0 720 0C320 0 0 80 0 80V120Z"
            className="fill-[#121929]"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-between items-center w-full max-w-5xl mt-12">
        <h2
          className={`text-7xl text-center font-semibold text-white mt-5 sm:text-2xl ${titan.className}`}
        >
          Skills.
        </h2>
        <div className="text-sm text-center max-w-lg text-gray-400 sm:text-xs mb-8">
          <p>
            These skills highlight my expertise and dedication to creating
            impactful solutions.
          </p>
          <p>They reflect my passion for continuous learning and innovation.</p>
        </div>

        {/* Skills Balls with Animation */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-28 h-28"
              variants={dropInVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.25 }}
            >
              <BallCanvas icon={skill.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
