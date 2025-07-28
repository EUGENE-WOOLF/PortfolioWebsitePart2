"use client";
import { FaGithub } from "react-icons/fa";

const projectCarddata = {
  id: 1,
  title: "E-commerce Platform Redesign",
  status: "Deployed",
  description:
    "A complete overhaul of an existing e-commerce website, focusing on improved user experience, modern UI, and performance optimizations. Implemented a new product catalog, streamlined checkout, and integrated a robust search functionality.",
  technologies: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Stripe API",
    "PostgreSQL",
  ],
  githubLink: "https://github.com/your-username/ecommerce-redesign",
  image: "https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg",
};

export default function ProjectCardSample() {
  const projectStatus = "Production"; // You can change this dynamically, e.g., from projectCarddata

  const getStatusClasses = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-yellow-500 text-yellow-900";
      case "Deployed":
        return "bg-green-500 text-green-900";
      case "Production":
        return "bg-blue-500 text-blue-900";
      default:
        return "bg-gray-500 text-gray-900";
    }
  };

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden
                 transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30
                 flex flex-col w-11/12 mx-auto my-4 max-w-sm sm:max-w-md" // Adjusted width for better mobile fitting
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-46 overflow-hidden">
        <img
          src={projectCarddata.image}
          alt="CodeVerse"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/1e293b/cbd5e1?text=CodeVerse`;
          }}
        />

        {/* here is the status indicator  */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent">
          {/* Status Indicator */}
          {projectStatus && (
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(
                projectCarddata.status
              )}`}
            >
              {projectCarddata.status}
            </span>
          )}
        </div>

        {/* title of the porject  */}
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
                key={tech + index} // <-- this is the fix
                className="bg-indigo-700 text-indigo-100 text-xs sm:text-sm font-medium px-2 py-1 rounded-full shadow-md"
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-auto">
          <a
            href={projectCarddata.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 transition text-sm"
            aria-label="View CodeVerse on GitHub"
          >
            <FaGithub className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
