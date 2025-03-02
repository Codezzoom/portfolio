import * as React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import ExperienceCard from "./ExperienceCard";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Titan_One } from "next/font/google";
import { experiences } from "@/data/Experience";
import Button from "./Button";
import { useState } from "react";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts off-screen
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }, // Animates into view
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  }, // Animates out of view
};

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pb-16 bg-gradient-to-r from-primary to-[#1c2d4a]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
      }}
    >
      <div className="w-full max-w-[1350px] py-10 gap-3 flex flex-col items-center">
        <h2
          className={`text-4xl md:text-5xl lg:text-2xl text-center font-semibold text-secondary mt-5 sm:text-2xl ${titan.className} first-letter:text-[80px] first-letter:font-bold first-letter:text-secondary`}
        >
          Experience.
        </h2>
        <div className="text-sm text-center max-w-lg text-gray-300 sm:text-xs mb-8">
          <p>I have hands-on experience in web and mobile app development.</p>
          <p>
            I strive to create impactful solutions with a focus on innovation
            and results.
          </p>
        </div>

        <Timeline className="w-full max-w-[1000px] flex flex-col items-center gap-6">
          {displayedExperiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineContent>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full"
                >
                  <ExperienceCard experience={experience} index={index} />
                </motion.div>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="inherit" />
                {index !== experiences.length + 1 && (
                  <TimelineConnector style={{ background: "#B8C1EC" }} />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
        {/* Toggle Button */}
        <Button
          type="solid"
          text={showAll ? "Show Less" : "Show More"}
          onClickHandler={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};

export default Experience;
