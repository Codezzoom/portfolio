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
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple-600/10 to-[#1c2d4a] z-10"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] gap-3 px-0 py-10 md:py-16">
        {/* Title */}
        <h2
          className={`text-7xl text-center font-semibold text-secondary mt-5 sm:text-2xl ${titan.className} first-letter:text-[80px] first-letter:font-bold first-letter:text-secondary`}
        >
          Projects
        </h2>

        {/* Description */}
        <div className="text-sm text-center max-w-lg text-gray-300 sm:text-xs">
          <p>
            I have worked on a wide range of projects. From web apps to mobile
            apps.
          </p>
          <p>Here are some of my projects.</p>
        </div>

        {/* Toggle Button Group */}
        <div className="flex items-center justify-center border border-secondary text-secondary text-sm font-medium rounded-lg m-5 md:text-xs">
          {/* Toggle Buttons */}
          {["all", "web apps", "mobile apps", "artificial intelligence", "games"].map(
            (category, index) => (
              <React.Fragment key={category}>
                <div
                  className={`px-5 py-2 cursor-pointer rounded-md ${
                    toggle === category
                      ? "bg-secondary/20"
                      : "hover:bg-secondary/10"
                  }`}
                  onClick={() => setToggle(category)}
                >
                  {category.toUpperCase()}
                </div>
                {index !== 3 && <div className="w-[2px] h-auto bg-secondary" />}
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
