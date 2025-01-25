import React from "react";

const ProjectCard = ({ project, index, setOpenModal }) => {
  // Generate random rotation angles for the number
  const randomRotationNumber = Math.random() * 10 - 5; // Between -5 and 5 degrees
  const randomRotationImage = Math.random() * 10 - 5; // Between -5 and 5 degrees

  return (
    <div
      className="relative w-[356px] h-[524px] bg-[#383862] cursor-pointer rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)] p-6 flex flex-col items-center group overflow-visible"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue to-[#252C60] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full pointer-events-none"></div>

      {/* Project Image */}
      <div
        className="relative w-[300px] h-[200px] transform shadow-lg z-10"
        style={{
          transform: `rotate(${randomRotationImage}deg)`,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Large Number */}
        <div
          className="absolute -left-10 top-20 transform -translate-y-1/2 text-[220px] font-extrabold text-gray-200 z-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:bg-gradient-to-t group-hover:from-gray-600 group-hover:to-white group-hover:text-transparent group-hover:bg-clip-text group-hover:delay-300"
          style={{
            transform: `rotate(${randomRotationNumber}deg)`,
          }}
        >
          {index + 1}
        </div>
      </div>

      {/* Details */}
      <div className="w-full flex flex-col gap-0 px-1">
        {/* Project Title */}
        <div className="mt-36 text-xl font-black text-gray-200 transform transition-transform duration-500 ease-in-out group-hover:scale-110 origin-left">
          {project.title}
        </div>

        {/* Project Date */}
        <div className="text-xs font-normal text-white opacity-45 transform">
          {project.date}
        </div>

        {/* Project Description */}
        <div className="mt-4 text-[12px] font-normal text-gray-400 line-clamp-4 transform">
          <p>{project.description}</p>
        </div>
      </div>

      {/* New Tag */}
      {project.new && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform translate-y-1/2 bg-violet text-blue text-xs font-extrabold px-3 py-1 shadow-md z-20">
          New Project
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
