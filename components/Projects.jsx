import React, { useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple-600/10 to-transparent z-10 clip-path-[polygon(0_0,_100%_0,_100%_100%,_100%_98%,_0_100%)]"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] gap-3 px-0 py-10 md:py-24">
        {/* Title */}
        <h2
          className={`text-7xl text-center font-semibold text-white mt-5 sm:text-2xl ${titan.className}`}
        >
          Projects
        </h2>

        {/* Description */}
        <div className="text-sm text-center max-w-lg text-gray-400 sm:text-xs">
          <p>
            I have worked on a wide range of projects. From web apps to android
            apps.
          </p>
          <p>Here are some of my projects.</p>
        </div>

        {/* Toggle Button Group */}
        <div className="flex items-center justify-center border border-purple-500 text-purple-500 text-sm font-medium rounded-lg m-5 md:text-xs">
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
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                index={index}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
