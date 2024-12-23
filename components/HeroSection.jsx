import React from "react";
import HeroBgAnimation from "./HeroBGAnimation";

const HeroSection = () => {
  return (
    <div id="about" className="relative bg-gray-100">
      <div
        className="relative flex justify-center items-center py-20 px-8 lg:px-12 z-10 
        bg-gray-100 clip-path-[polygon(0_0,_100%_0,_100%_100%,_70%_95%,_0_100%)]"
      >
        {/* Background */}
        <div className="absolute inset-0 w-full h-full max-w-[1360px] mx-auto flex justify-end overflow-hidden">
          <HeroBgAnimation />
        </div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full max-w-[1100px]">
          {/* Left Section */}
          <div className="order-2 lg:order-1 w-full text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="font-bold text-5xl leading-tight text-gray-800 mb-4">
              Hi, I am <br /> {""}
            </h1>
            <div className="flex items-center gap-3 font-semibold text-2xl text-gray-800 mb-4">
              I am a <span className="text-blue-500 cursor-pointer"></span>
            </div>
            <p className="text-lg leading-8 text-gray-700/90 mb-8">
              {""}
            </p>
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-[300px] text-center px-4 py-4 bg-gradient-to-br from-purple-500 to-pink-500 
              text-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              Check Resume
            </a>
          </div>

          {/* Right Section */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end items-center">
            <img
              src={
                "https://img.indiaforums.com/article/900x900/20/8385-bhavika-sharma-savis-new-look-is-simple-yet-elegant.jpg"
              }
              alt="hero"
              className="w-full max-w-[400px] h-auto rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
