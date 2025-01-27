import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen } from "lucide-react"; // Importing a book icon from Lucide or use your preferred icon library

const EducationCard = ({ education }) => {
  return (
    <motion.div
      className="group xl:w-[864px] w-[324px] lg:w-[864px] md:w-[624px] rounded-lg bg-[#19263e] shadow-xl shadow-[rgba(0,0,0,0.4)] p-8 flex flex-col gap-3 relative overflow-visible transition-all duration-300 ease-in-out hover:cursor-pointer"
      initial="collapsed"
      whileHover="expanded"
    >
      {/* Top Image Positioned Outside */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={education.building}
          alt="Education Icon"
          width={100}
          height={100}
          className="rounded-full shadow-lg w-24 h-24"
        />
      </div>

      {/* Top section with logo and details */}
      <div className="flex items-center gap-3 mt-8">
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
      <div className="relative w-full mt-4">
        <motion.div
          className="w-full text-[15px] font-medium text-gray-400 leading-relaxed"
          variants={{
            collapsed: { maxHeight: "6rem" }, // Approximately 4 lines
            expanded: { maxHeight: "100%" }, // Full height
          }}
          transition={{
            duration: 1.5, // Smooth animation duration
            ease: "easeInOut", // Applies ease-in-out effect
          }}
          style={{ overflow: "hidden" }}
        >
          {education.desc}

          {/* Relevant Courses */}
          {education.courses && education.courses.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={20} className="text-gray-400" />
                <span className="text-[14px] font-semibold text-gray-400">
                  Relevant Courses:
                </span>
              </div>
              <ul className="list-disc pl-8 space-y-1 text-gray-300 text-[14px]">
                {education.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#18253a] to-transparent"
          variants={{
            collapsed: { opacity: 1 },
            expanded: { opacity: 0 },
          }}
          transition={{
            duration: 2.5, // Slightly quicker fade animation
            ease: "easeInOut", // Ensures smooth fading
          }}
        />
      </div>
    </motion.div>
  );
};

export default EducationCard;
