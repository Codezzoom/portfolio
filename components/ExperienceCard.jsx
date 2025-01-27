import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { differenceInMonths } from "date-fns";
import { IoDiamondOutline } from "react-icons/io5";
import { FastAverageColor } from "fast-average-color";

const ExperienceCard = ({ experience, index }) => {
  const [gradientBg, setGradientBg] = useState("");
  const imgRef = useRef(null);
  const randomRotationNumber = Math.random() * 20 - 5;
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const setGradientFromImage = async () => {
      const fac = new FastAverageColor();
      try {
        const img = imgRef.current;
        if (img && img.complete) {
          const color = await fac.getColorAsync(img);
          const gradient = `linear-gradient(to bottom right, ${color.rgba}, rgba(0, 0, 0, 0.8))`;
          setGradientBg(gradient);
        }
      } catch (error) {
        console.error("Failed to generate gradient from image:", error);
        setGradientBg("linear-gradient(to bottom right, #333, #555)"); // Fallback gradient
      }
    };

    if (imgRef.current) {
      if (imgRef.current.complete) {
        setGradientFromImage();
      } else {
        imgRef.current.addEventListener("load", setGradientFromImage);
      }
    }

    // Cleanup event listener
    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener("load", setGradientFromImage);
      }
    };
  }, []);

  const handleToggle = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const calculateDuration = (start_month, start_year, end_month, end_year) => {
    const startDate = new Date(`${start_month} 1, ${start_year}`);
    const endDate =
      end_month && end_year
        ? new Date(`${end_month} 1, ${end_year}`)
        : new Date();
    const totalMonths = differenceInMonths(endDate, startDate);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let duration = "";
    if (years > 0) {
      duration += years === 1 ? `${years} yr` : `${years} yrs`;
    }
    if (months > 0) {
      duration += years > 0 ? " " : "";
      duration += months === 1 ? `${months} mo` : `${months} mos`;
    }

    return duration;
  };

  return (
    <motion.div
      className="flex-1 relative"
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Number */}
      <div
        className={`absolute text-[120px] xl:text-[220px] lg:text-[175px] md:text-[135px] font-extrabold text-gray-200 pointer-events-none transition-all duration-500 ease-in-out z-20 ${
          expandedItems[experience.id]
            ? "xl:left-16 xl:top-[144px] md:left-16 md:top-[186px] -left-[44px] top-0"
            : "xl:-left-[74px] xl:-top-10 -left-[44px] top-0"
        }`}
        style={{
          transform: `rotate(${randomRotationNumber}deg)`,
        }}
      >
        {index + 1}
      </div>

      <div className="flex flex-col sm:flex-row xl:w-[864px] lg:w-[748px] md:w-[624px] w-72 rounded-lg shadow-xl p-6 sm:p-8 gap-6 bg-[#19263e] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer">
        <img
          ref={imgRef}
          src={experience.img}
          alt={experience.company}
          className="h-48 w-48 bg-black sm:h-44 sm:w-44 shadow-lg object-cover mx-auto"
          crossOrigin="anonymous"
        />
        {/* Content Details */}
        <div className="flex flex-col flex-grow gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col w-full leading-normal">
              <div className="text-[18px] font-bold text-white sm:text-[16px]">
                {experience.title}
              </div>
              <div className="text-[16px] font-medium text-[#E5E6E6] sm:text-[14px]">
                {experience.company} • {experience.employment_type}
              </div>
              <div className="text-[16px] font-medium text-[#A4A5A7] sm:text-[14px]">
                {experience?.duration?.start_month}{" "}
                {experience?.duration?.start_year} -{" "}
                {experience?.duration?.end_month &&
                experience?.duration?.end_year
                  ? `${experience?.duration?.end_month} ${experience?.duration?.end_year}`
                  : "Present"}{" "}
                •{" "}
                {calculateDuration(
                  experience?.duration?.start_month,
                  experience?.duration?.start_year,
                  experience?.duration?.end_month,
                  experience?.duration?.end_year
                )}{" "}
              </div>
              <div className="text-[16px] font-medium text-[#A4A5A7] sm:text-[14px]">
                {experience.location} • {experience.location_type}
              </div>
            </div>
          </div>
          <div className="w-full text-[14px] font-normal text-white mb-2 sm:text-[12px] relative">
            <motion.div
              className="w-full text-[14px] font-normal text-[#E5E6E6] relative"
              initial="collapsed"
              animate={expandedItems[experience.id] ? "expanded" : "collapsed"}
              variants={{
                collapsed: { maxHeight: "5rem" },
                expanded: { maxHeight: "100%" },
              }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
              }}
              style={{ overflow: "hidden" }}
            >
              {experience?.description && (
                <span className="block overflow-hidden text-ellipsis">
                  {expandedItems[experience.id]
                    ? experience?.description
                        .split("•")
                        .filter((bullet) => bullet.trim()) // Remove empty entries
                        .map((bullet, index) => (
                          <span key={index} className="block">
                            • {bullet.trim()}
                          </span>
                        ))
                    : experience?.description
                        .split("•")
                        .filter((bullet) => bullet.trim())
                        .slice(0, 3)
                        .map((bullet, index) => (
                          <span key={index} className="block">
                            • {bullet.trim()}
                          </span>
                        ))}
                  {!expandedItems[experience.id] &&
                    experience?.description.split("•").length > 3 && (
                      <span className="text-[#A4A5A7]">...see more</span>
                    )}
                </span>
              )}
            </motion.div>

            {/* Button Positioned Responsively */}
            <div className="w-full flex justify-end lg:justify-start mt-2">
              <button
                onClick={() => handleToggle(experience.id)}
                className="text-[#A4A5A7] text-[14px] font-medium lg:absolute lg:-bottom-4 lg:right-0"
              >
                {expandedItems[experience.id] ? "show less" : "...see more"}
              </button>
            </div>
          </div>

          {experience?.skills && (
            <div className="flex items-start gap-2 mt-2">
              {/* Diamond Icon */}
              <IoDiamondOutline color="white" className="mt-[2px]" />
              {/* Skills */}
              <div className="flex flex-wrap gap-2 items-center">
                {expandedItems[experience.id]
                  ? experience?.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-[16px] font-bold text-white sm:text-[14px] flex items-center gap-1"
                      >
                        {skill}
                        {index < experience?.skills.length - 1 ? "," : ""}
                      </span>
                    ))
                  : experience?.skills.slice(0, 5).map((skill, index) => (
                      <span
                        key={index}
                        className="text-[16px] font-bold text-white sm:text-[14px] flex items-center gap-1"
                      >
                        {skill}
                        {index < experience?.skills.slice(0, 5).length - 1
                          ? ","
                          : ""}
                      </span>
                    ))}
                {!expandedItems[experience.id] &&
                  experience?.skills.length > 5 && (
                    <span className="text-[16px] font-bold text-white sm:text-[14px]">
                      and +{experience.skills.length - 5} more
                    </span>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
