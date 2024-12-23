import React, { useState } from "react";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple-600/10 to-transparent z-10 clip-path-[polygon(0_0,_100%_0,_100%_100%,_100%_98%,_0_100%)]"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] gap-3 px-0 py-10 md:py-24">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mt-5 md:mt-3 md:text-3xl">
          Projects
        </h2>

        {/* Description */}
        <p className="max-w-[600px] text-lg text-center text-gray-600 md:text-base">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>

        {/* Toggle Button Group */}
        <div className="flex items-center justify-center border border-purple-500 text-purple-500 text-sm font-medium rounded-lg mt-5 md:text-xs">
          {/* Toggle Buttons */}
          {["all", "web app", "android app", "machine learning"].map(
            (category, index) => (
              <React.Fragment key={category}>
                <div
                  className={`px-5 py-2 cursor-pointer rounded-md ${
                    toggle === category
                      ? "bg-purple-500/20"
                      : "hover:bg-purple-500/10"
                  }`}
                  onClick={() => setToggle(category)}
                >
                  {category.toUpperCase()}
                </div>
                {index !== 3 && (
                  <div className="w-[2px] h-auto bg-purple-500" />
                )}
              </React.Fragment>
            )
          )}
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap items-center justify-center gap-7">
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
