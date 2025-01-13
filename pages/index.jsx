import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/utils/Themes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProjectDetails from "@/components/ProjectDetails";
import projects from "@/data/projects";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <div
          className={`${
            darkMode ? "bg-gray-900" : "bg-white"
          } w-full overflow-x-hidden`}
        >
          {/* Hero Section */}
          <div id="#home">
            <HeroSection />
          </div>

          {/* Skills and Experience */}
          <div
            className="w-full bg-gradient-to-r from-pink-100 via-blue-100 to-pink-50"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
            }}
          >
            {/* SKILLS */}
            <div id="skills">
              <Skills />
            </div>

            {/* EXPERIENCE */}
            <div id="experience">
              <Experience />
            </div>
          </div>

          {/* PROJECTS */}
          <div id="projects">
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </div>

          {/* Education and Contact */}
          <div
            className="w-full bg-gradient-to-r from-pink-100 via-blue-100 to-pink-50"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
            }}
          >
            <div id="education">
              <Education />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </div>

          {/* Footer */}
          <Footer />

          {/* Project Details Modal */}
          {openModal.state && (
            <ProjectDetails
              openModal={openModal}
              setOpenModal={setOpenModal}
              projects={projects}
            />
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default Home;
