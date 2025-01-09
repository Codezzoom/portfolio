import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EducationCard = ({ education }) => {
  return (
    <motion.div
      className="group w-[650px] rounded-lg bg-[#121929] shadow-xl shadow-[rgba(0,0,0,0.4)] p-8 flex flex-col gap-3 relative overflow-hidden transition-all duration-300 ease-in-out hover:cursor-pointer"
      initial="collapsed"
      whileHover="expanded"
    >
      {/* Top section with logo and details */}
      <div className="flex items-center gap-3">
        <Image
          src={education.img}
          alt={education.school}
          width={50}
          height={50}
          className="rounded-lg bg-white"
          objectFit="cover"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-200">
            {education.school}
          </h3>
          <div className="text-base font-medium text-gray-400">
            {education.degree}
          </div>
          <div className="text-sm text-gray-500">{education.date}</div>
        </div>
      </div>

      {/* Grade */}
      <div>
        <span className="text-[12px] font-semibold text-gray-400 md:text-[14px]">
          Grade:{" "}
        </span>
        <span className="text-[12px] font-medium text-gray-400 md:text-[14px]">
          {education.grade}
        </span>
      </div>

      {/* Description with animation */}
      <div className="relative w-full">
        <motion.div
          className="w-full text-[15px] font-medium text-gray-400 leading-relaxed"
          variants={{
            collapsed: { maxHeight: "6rem" }, // Approximately 4 lines
            expanded: { maxHeight: "100%" }, // Full height
          }}
          transition={{
            duration: 0.5, // Smooth animation duration
            ease: "circInOut", // Applies ease-in-out effect
          }}
          style={{ overflow: "hidden" }}
        >
          {education.desc}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#121929] to-transparent"
          variants={{
            collapsed: { opacity: 1 },
            expanded: { opacity: 0 },
          }}
          transition={{
            duration: 0.5, // Slightly quicker fade animation
            ease: "easeInOut", // Ensures smooth fading
          }}
        />
      </div>
    </motion.div>
  );
};

export default EducationCard;
