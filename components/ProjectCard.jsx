import React from "react";

const ProjectCard = ({ project, setOpenModal, index }) => {
  return (
    <div className="relative w-[330px] h-[490px] cursor-pointer rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)]">
      {/* Large Number */}
      <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 text-[220px] font-extrabold text-[#333333] opacity-20 z-0 pointer-events-none">
        {index + 1}
      </div>

      {/* Card Content */}
      <div
        className="relative w-full h-full bg-[#171721] p-6 rounded-lg overflow-hidden flex flex-col gap-3 z-10"
        onClick={() => setOpenModal({ state: true, project: project })}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[180px] bg-white rounded-lg shadow-md object-cover"
        />

        {/* Tags */}
        <div className="w-full flex items-center flex-wrap gap-2 mt-1">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-purple-500 bg-[#201B32] py-1 px-2 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="w-full flex flex-col gap-0 px-1">
          {/* Title */}
          <div className="text-lg font-bold text-white overflow-hidden line-clamp-2">
            {project.title}
          </div>

          {/* Date */}
          <div className="text-xs font-normal text-gray-400 mt-1">
            {project.date}
          </div>

          {/* Description */}
          <div className="text-sm font-normal text-gray-400 mt-2 overflow-hidden line-clamp-3">
            {project.description}
          </div>
        </div>

        {/* Members */}
        <div className="flex items-center pl-2 mt-3">
          {project.member?.map((member, index) => (
            <img
              key={index}
              src={member.img}
              alt={`Member ${index}`}
              className="w-9 h-9 rounded-full -ml-2 bg-white shadow-md border-2 border-[#171721]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
