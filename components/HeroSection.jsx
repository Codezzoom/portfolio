import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderSmall from "./HeaderSmall";
import Button from "./Button";
import { useRouter } from "next/router";
import ParticlesContainer from "./ParticlesContainer";
import SocialBar from "./SocialBar";
import Cookies from "./Cookies";
import titan from "@/font/titan";
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();
  const [buttonText, setButtonText] = useState("Download Resume");
  const [isDownloading, setIsDownloading] = useState(false);

  const config = {
    type: "spring",
    damping: 10,
    stiffness: 80,
  };

  const downloadResume = () => {
    if (isDownloading) return; // Prevent multiple clicks during download

    setIsDownloading(true);
    // Simulate "Preparing Download..."
    setButtonText("Downloading...");

    setTimeout(() => {
      // Trigger file download and open the "Save As" dialog
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.setAttribute("download", "Amrit_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate "Downloading..." for 2 seconds
      setTimeout(() => {
        setTimeout(() => {
          // Revert to the original text
          setButtonText("Download Resume");
          setIsDownloading(false);
        }, 3000);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Primary Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1c2d4a] to-primary w-full h-full"
        aria-hidden="true"
      />

      {/* Background Explosion */}
      {/* <div
        className="absolute inset-0 bg-explosion mix-blend-color-dodge xl:bg-cover xl:bg-right xl:bg-no-repeat w-64 h-64 translate-z-0"
        aria-hidden="true"
      /> */}

      {/* Cookies Component */}
      <Cookies />

      {/* Particles */}
      {/* <ParticlesContainer className="absolute inset-0 z-10 pointer-events-none" /> */}
      <SocialBar />
      <Image
        src="/Home/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
        layout="intrinsic"
        width={100}
        height={100}
      />

      {/* Content Section */}
      <div id="home" className="relative z-20 mt-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "linear" }}
          exit={{ x: 0, opacity: 0 }}
        >
          <div className="grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 mt-2 relative z-20">
                <HeaderSmall text="Who I am?" />
                <h1
                  className={`text-3xl sm:text-2xl xl:text-1xl font-extrabold text-secondary leading-none mb-3 ${titan.className}`}
                >
                  Amrit
                </h1>
                <h5 className="text-7xl font-normal text-gray-200 text-justify font-sans">
                  "An aspiring developer with hands-on experience" —this line
                  defines me. As a skilled web and mobile app developer, I craft
                  beautiful and impactful digital solutions, blending technical
                  expertise with creative problem-solving to stand out from the
                  crowd.
                </h5>
                <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-8 mt-6">
                  <div className="sm:col-span-1 xl:col-span-1">
                    <Button
                      type="solid"
                      text="Know More"
                      onClickHandler={() => router.push("#skills")}
                    />
                  </div>
                  <div className="sm:col-span-1 xl:col-span-1">
                    <Button
                      type="outlined"
                      text={buttonText}
                      onClickHandler={downloadResume}
                      disabled={isDownloading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
