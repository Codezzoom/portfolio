import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { ArrowDownToLine, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import ReactPlayer from "react-player";

const ProjectDetails = ({ openModal, setOpenModal, projects }) => {
  const project = openModal?.project;
  const [width, setWidth] = useState(48); // Initial round button width
  const [downloadState, setDownloadState] = useState("idle");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDownload = () => {
    if (downloadState !== "idle") return;

    try {
      setDownloadState("downloading");
      setWidth(180); // Expand to show "Downloading"

      // Extract file ID from Google Drive URL
      const fileId = project?.zipFileUrl.split("/d/")[1].split("/view")[0];

      // Create direct download link
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      // Create temporary link element
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${project?.title || "file"}.zip`); // Add file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Wait for a short moment to allow "Downloading..." to display
      setTimeout(() => {
        setDownloadState("complete");

        // Reset to idle state after showing the checkmark
        setTimeout(() => {
          setWidth(48); // Reset button size
          setDownloadState("idle");
        }, 1500);
      }, 2000); // Keep "Downloading..." for at least 2 seconds
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to start download. Please try again.");
      setDownloadState("idle");
      setWidth(48);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prev) =>
        prev === project?.images.length - 1 ? 0 : prev + 1
      ),
    onSwipedRight: () =>
      setCurrentImageIndex((prev) =>
        prev === 0 ? project?.images.length - 1 : prev - 1
      ),
  });

  // Automatically switch images every 5 seconds
  useEffect(() => {
    if (!project?.images || project?.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project?.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project?.images]);

  const getImageStyle = (index) => {
    const totalImages = project?.images?.length || 0;
    const offset = (index - currentImageIndex + totalImages) % totalImages;

    if (offset === 0) {
      // Center image - larger size
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 3,
        opacity: 1,
        borderRadius: "16px",
      };
    } else if (offset === 1 || offset === totalImages - 1) {
      // Side images - smaller size and more rounded
      return {
        transform: `translateX(${
          offset === 1 ? "95%" : "-95%"
        }) scale(0.6) rotateY(${offset === 1 ? "-25deg" : "25deg"})`,
        zIndex: 2,
        opacity: 0.6,
        borderRadius: "24px", // More rounded corners for side images
      };
    } else {
      // Hidden images
      return {
        transform: `translateX(${
          offset > 1 ? "140%" : "-140%"
        }) scale(0.4) rotateY(30deg)`,
        zIndex: 1,
        opacity: 0,
        borderRadius: "24px",
      };
    }
  };

  // Similar Projects
  const similarProjects = projects.filter((p) =>
    project?.similarProjects?.includes(p.id)
  );

  function timeAgoFromNow(endDate) {
    // Map months to their numerical values
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    // Extract the month and year from the input
    const [monthStr, yearStr] = endDate.split(" ");
    const year = parseInt(yearStr);
    const month = months[monthStr];

    // Validate input
    if (month === undefined || isNaN(year)) {
      return "Invalid date format. Please use 'MMM YYYY', e.g., 'Jun 2024'.";
    }

    // Create a Date object for the end date
    const end = new Date(year, month);
    const now = new Date();

    // Ensure the end date is in the past
    if (end > now) {
      return "End date is in the future.";
    }

    // Calculate the difference in months and years
    const yearDiff = now.getFullYear() - end.getFullYear();
    const monthDiff = now.getMonth() - end.getMonth();
    let totalMonths = yearDiff * 12 + monthDiff;

    // Build the output
    if (totalMonths === 0) {
      return "This month";
    } else if (totalMonths === 1) {
      return "1 month ago";
    } else if (totalMonths < 12) {
      return `${totalMonths} months ago`;
    } else {
      const years = Math.floor(totalMonths / 12);
      const remainingMonths = totalMonths % 12;
      if (remainingMonths === 0) {
        return `${years} year${years > 1 ? "s" : ""} ago`;
      } else {
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    }
  }

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
      aria-labelledby="project-title"
      aria-describedby="project-description"
    >
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center transition-all duration-500 ease-in-out z-50">
        <div className="max-w-[900px] w-full bg-[#171721] rounded-2xl shadow-lg m-4 relative">
          {/* Close Button */}
          <div
            className="absolute top-4 right-6 bg-[#242434] rounded-full p-2 flex items-center justify-center cursor-pointer hover:bg-[#343444] transition-all z-50"
            onClick={() => setOpenModal({ state: false, project: null })}
          >
            <CloseRounded className="text-gray-400 hover:text-white transition-colors text-lg" />
          </div>

          {/* Scrollable Content Wrapper */}
          <div className="max-h-[90vh] overflow-y-auto p-6 custom-scrollbar">
            {/* Carousel Wrapper */}
            <div
              className="relative overflow-hidden rounded-lg m-8 h-[400px] perspective-1000"
              {...swipeHandlers}
            >
              <div className="relative w-full h-full flex justify-center items-center preserve-3d">
                {project?.images?.map((image, index) => (
                  <div
                    key={index}
                    className="absolute w-[200px] h-[100px] xl:w-[500px] xl:h-[300px] lg:w-[500px] lg:h-[300px] transition-transform duration-700 ease-in-out"
                    style={getImageStyle(index)}
                  >
                    <img
                      src={image}
                      alt={`${project?.title} - Slide ${index + 1}`}
                      className="xl:w-full xl:h-full lg:w-full lg:h-full h-[100px] w-[300px] object-cover"
                      style={{ borderRadius: "inherit" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {project?.images?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-purple-500 w-5"
                      : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Title with Download Button */}
            <div className="flex items-center flex-wrap xl:flex-nowrap lg:flex-nowrap gap-4 m-6 px-6">
              <h1
                id="project-title"
                className="text-2xl font-black text-gray-200"
              >
                {project?.title}
              </h1>

              <motion.button
                onClick={handleDownload}
                className="relative h-12 bg-[#1C3EE4] rounded-full flex items-center justify-center overflow-hidden"
                animate={{ width }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  {downloadState === "idle" && (
                    <motion.div
                      key="download"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-white"
                    >
                      <ArrowDownToLine className="w-5 h-5" />
                    </motion.div>
                  )}

                  {downloadState === "downloading" && (
                    <motion.div
                      key="downloading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 px-4 text-white"
                    >
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowDownToLine className="w-5 h-5" />
                      </motion.div>
                      <span className="text-sm font-medium">
                        Downloading...
                      </span>
                    </motion.div>
                  )}

                  {downloadState === "complete" && (
                    <motion.div
                      key="complete"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="text-white"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Date */}
            <p className="text-[13px] text-gray-500 px-6 font-semibold">
              {project?.date} •{" "}
              {timeAgoFromNow(project?.date.split("-")[1].trim())}
              {console.log(project?.date.split("-")[1].trim())}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mt-4 px-6">
              {project?.tags?.map((tag, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={tag.logo}
                    alt={tag.name}
                    className="w-14 h-14 object-contain rounded-lg"
                  />
                  <span className="text-sm font-medium text-gray-500 mt-2">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Project Description */}
            <div className="px-6 mt-4">
              <h2 className="text-xl font-bold text-gray-200">Description</h2>
              <p className="text-[14px] text-gray-300 mt-2">
                {project?.description}
              </p>
            </div>

            {/* Video Preview */}
            {project?.videoUrl && (
              <div className="mt-8 px-6">
                <h2 className="text-xl font-bold text-gray-200">
                  Video Preview
                </h2>
                <div
                  className="relative mt-4 rounded-lg overflow-hidden"
                  style={{
                    paddingTop: "56.25%", // Aspect ratio 16:9
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <ReactPlayer
                    url={project?.videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Members */}
            {project?.member && (
              <div className="mt-8 px-6">
                <h2 className="text-xl font-bold text-gray-200">
                  Contributors ({project?.member.length})
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                  {project?.member.map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {/* Contributor Number */}
                      <span className="text-gray-400 font-semibold">
                        {index + 1}.
                      </span>

                      {/* Member Image */}
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-12 h-12 rounded-full shadow-md"
                      />

                      {/* Member Info */}
                      <div className="flex-1">
                        <p className="text-md font-semibold text-gray-200">
                          {member.github.split("/")[3]}
                          {/* GitHub Username */}
                        </p>
                        <p className="text-sm text-gray-400">{member.name}</p>{" "}
                        {/* Full Name */}
                      </div>

                      {/* Links */}
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <GitHub />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <LinkedIn />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Projects Section */}
            <div className="mt-8 px-6">
              <h2 className="text-xl font-bold text-gray-200">
                Similar Projects
              </h2>

              {/* Loader */}
              {!similarProjects.length ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-violet"></div>
                </div>
              ) : (
                /* Horizontal Scroll Container */
                <div className="flex overflow-x-scroll space-x-4 mt-4 p-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
                  {similarProjects.map((similarProject) => (
                    <div
                      key={similarProject.id}
                      className="min-w-[200px] rounded-lg shadow-md cursor-pointer"
                      onClick={() =>
                        setOpenModal({ state: true, project: similarProject })
                      }
                    >
                      <img
                        src={similarProject.image}
                        alt={similarProject.title}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <h3 className="text-md font-normal text-gray-300 text-center">
                        {similarProject.title}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Button Group */}
            <div className="flex gap-4 mt-8 px-6 pb-6">
              <button
                onClick={() => window.open(project?.github, "_blank")}
                className="text-center text-[12px] xl:text-[16px] font-bold text-gray-200 bg-gray-700 py-4 px-4 rounded-md hover:bg-gray-600 transition-colors w-full"
              >
                View Code
              </button>
              {project?.hosted && (
                <button
                  onClick={() => {
                    const hostedUrl = project?.hosted;
                    // Use only the hosted domain and ensure it's properly formatted
                    const formattedUrl = hostedUrl.startsWith("http")
                      ? hostedUrl
                      : `https://${hostedUrl}`;
                    window.open(formattedUrl, "_blank");
                  }}
                  className="text-center text-[12px] xl:text-[16px] font-bold text-gray-200 bg-[#1C3EE4] py-4 px-4 rounded-md hover:bg-indigo-700 transition-colors w-full"
                >
                  Live Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
