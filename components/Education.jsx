import React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Titan_One } from "next/font/google";
import { education } from "@/data/Education";
import { experiences } from "@/data/Experience";
import EducationCard from "./EducationCard";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts off-screen
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }, // Animates into view
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeInOut" } }, // Animates out of view
};

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col justify-center relative z-[1] items-center px-0 pb-16 sm:pb-0"
    >
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] py-10 gap-3 sm:flex-col">
        <h2
          className={`text-7xl text-center font-semibold text-white mt-5 sm:text-2xl ${titan.className}`}
        >
          Education.
        </h2>
        <div className="text-sm text-center max-w-lg text-gray-400 sm:text-xs mb-8">
          <p>My education has been a journey of self-discovery and growth.</p>
          <p>My educational details are as follows.</p>
        </div>
        <Timeline className="w-full max-w-[1000px] mt-2 flex flex-col items-center justify-center gap-3">
          {education.map((education, index) => (
            <TimelineItem key={index}>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the card is visible
                  className="w-full"
                >
                  <EducationCard education={education} />
                </motion.div>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== experiences.length && (
                  <TimelineConnector style={{ background: "#854CE6" }} />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
