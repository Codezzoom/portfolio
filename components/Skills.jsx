import React from "react";
import { motion } from "framer-motion";
import skills from "../data/Skills";
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
      className="relative flex flex-col justify-center items-center bg-gradient-to-r from-primary to-[#1c2d4a] py-16"
    >
      {/* Top Arc */}
      <div className="absolute -top-1 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#213555" />
              <stop offset="100%" stopColor="#1c2d4a" />
            </linearGradient>
          </defs>
          <path
            d="M0 120L1440 120V80C1440 80 1120 0 720 0C320 0 0 80 0 80V120Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-between items-center w-full max-w-5xl mt-12">
        <h2
          className={`text-4xl md:text-5xl lg:text-2xl text-center font-semibold text-secondary mt-5 sm:text-2xl ${titan.className} first-letter:text-[80px] first-letter:font-bold first-letter:text-secondary`}
        >
          Skills.
        </h2>
        <div className="text-sm text-center max-w-lg text-gray-300 sm:text-xs mb-8">
          <p>
            These skills showcase my commitment to building exceptional digital
            experiences.
          </p>
          <p>
            They reflect my drive for growth, and crafting solutions that
            matter.
          </p>
        </div>

        {/* Skills Balls with Animation */}
        <div className="flex flex-row flex-wrap justify-center gap-10 xl:grid xl:grid-cols-7 xl:gap-12 lg:grid lg:grid-cols-5 lg:gap-10 md:grid md:grid-cols-5 md:gap-8 sm:grid sm:grid-cols-3 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-20 h-20 sm:w-16 sm:h-16 lg:w-28 lg:h-28 cursor-pointer"
              variants={dropInVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.25 }}
            >
              <BallCanvas icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
