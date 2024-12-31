import React from "react";
import { motion } from "framer-motion";
import HeaderSmall from "./HeaderSmall";
import Button from "./Button";
import ParticlesContainer from "./ParticlesContainer";
import { fadeIn } from "@/variants";
import Avatar from "./Avatar";
import SocialBar from "./SocialBar";
import Cookies from "./Cookies";

const HeroSection = () => {
  const config = {
    type: "spring",
    damping: 10,
    stiffness: 80,
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Background Explosion */}
      <div
        className="absolute inset-0 bg-[#121929] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full translate-z-0"
        aria-hidden="true"
      />
      <Cookies />

      {/* Bottom Arc */}
      {/* <div className="absolute bottom-0 left-0 w-full ">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120V80C1440 80 1120 0 720 0C320 0 0 80 0 80V120Z"
            className="fill-[#232946]"
          />
        </svg>
      </div> */}

      {/* Particles */}
      {/* <ParticlesContainer className="absolute inset-0 z-10 pointer-events-none" /> */}
      <SocialBar />
      <img
        src="/Home/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
      />

      {/* Content Section */}
      <div id="home" className="relative z-20 mt-28">
        <motion.div
          transition={config}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transitionDuration: "0.2s" }}
          exit={{ x: 0, opacity: 0 }}
        >
          <div className="grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 mt-2 relative z-20">
                <img
                  src="/Home/triangle.svg"
                  alt="Triangle 3d Vector"
                  className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
                />
                <HeaderSmall text="Who I am?" />
                <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
                  Harsh Goel
                </h1>
                <h5 className="text-7xl font-light text-violet text-justify">
                  "A fresher with experience", this line says exactly who he is.
                  He is a software developer who crafts beautiful web and apps.
                  His perfect balance of technical & managerial skills stands
                  him apart from the crowd.
                </h5>
                <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
                  <div className="sm:col-span-1 xl:col-span-1">
                    <Button
                      type="solid"
                      text="Know More"
                      onClickHandler={() => router.push("#journey")}
                    />
                  </div>
                  <div className="sm:col-span-1 xl:col-span-1">
                    <Button
                      type="outlined"
                      text="Download Resume"
                      onClickHandler={() =>
                        window.open(personalDetails.resume, "_blank")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Avatar Section */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full max-w-[737px] max-h-[678px] bottom-2 right-[5%] z-20"
      >
        {/* <Avatar /> */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
