"use client";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ projectCarddata }) {
  const getStatusClasses = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-yellow-200 text-yellow-800";
      case "Deployed":
        return "bg-emerald-200 text-emerald-800";
      case "Production":
        return "bg-blue-200 text-blue-800";
      case "Prototype":
        return "bg-purple-200 text-purple-800";
      case "In Development":
        return "bg-orange-200 text-orange-800";
      case "Live":
        return "bg-teal-200 text-teal-800";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden
                 transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30
                 flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-none" // Adjusted max-width for grid
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
        <img
          src={projectCarddata.image}
          alt={projectCarddata.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/1e293b/cbd5e1?text=${encodeURIComponent(
              projectCarddata.title
            )}`; // Dynamic placeholder text
          }}
        />

        {/* Status indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent">
          {projectCarddata.status && ( // Use
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(
                projectCarddata.status
              )}`}
            >
              {projectCarddata.status}
            </span>
          )}
        </div>
        {/* Title of the project */}
        <h3 className="absolute bottom-4 left-4 text-2xl sm:text-3xl font-bold text-white z-10">
          {projectCarddata.title}
        </h3>
      </div>

      {/* Details */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">
          {projectCarddata.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projectCarddata.technologies.map((tech, index) => {
            return (
              <span
                key={tech + index}
                className="bg-indigo-700 text-indigo-100 text-xs sm:text-sm font-medium px-2 py-1 rounded-full shadow-md"
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-auto">
          {projectCarddata.githubLink && ( // Conditionally render if link exists
            <a
              href={projectCarddata.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 transition text-sm"
              aria-label={`View ${projectCarddata.title} on GitHub`} // Dynamic aria-label
            >
              <FaGithub className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> GitHub
            </a>
          )}
          {projectCarddata.liveLink && ( // Conditionally render if link exists
            <a
              href={projectCarddata.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition text-sm"
              aria-label={`View live demo of ${projectCarddata.title}`} // Dynamic aria-label
            >
              <FaExternalLinkAlt className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Live
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
