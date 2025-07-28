import ScrollFadeInOut from "./ScrollFadeIn"; // Assuming this path is correct
import { Inter } from "next/font/google"; // For Next.js font optimization
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // For icons

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Added 700 for headings
  variable: "--font-inter",
});

// Dummy project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description:
      "A complete overhaul of an existing e-commerce website, focusing on improved user experience, modern UI, and performance optimizations. Implemented a new product catalog, streamlined checkout, and integrated a robust search functionality.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Stripe API",
      "PostgreSQL",
    ],
    githubLink:
      "[https://github.com/your-username/ecommerce-redesign](https://github.com/your-username/ecommerce-redesign)",
    liveLink:
      "[https://ecommerce-redesign.vercel.app/](https://ecommerce-redesign.vercel.app/)",
    image:
      "[https://placehold.co/600x400/1e293b/cbd5e1?text=E-commerce+Redesign](https://placehold.co/600x400/1e293b/cbd5e1?text=E-commerce+Redesign)",
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description:
      "Developed a web application that leverages large language models to generate creative content, including articles, marketing copy, and social media posts. Features include customizable prompts, real-time generation, and content saving.",
    technologies: ["Python", "Flask", "OpenAI API", "React", "MongoDB"],
    githubLink:
      "[https://github.com/your-username/ai-content-generator](https://github.com/your-username/ai-content-generator)",
    liveLink:
      "[https://ai-content-generator.netlify.app/](https://ai-content-generator.netlify.app/)",
    image:
      "[https://placehold.co/600x400/1e293b/cbd5e1?text=AI+Content+Generator](https://placehold.co/600x400/1e293b/cbd5e1?text=AI+Content+Generator)",
  },
  {
    id: 3,
    title: "Decentralized Voting System",
    description:
      "A blockchain-based secure and transparent voting application. Utilizes smart contracts on Ethereum to ensure immutable vote records and prevent tampering. Designed with a focus on privacy and auditability.",
    technologies: ["Solidity", "Hardhat", "React", "Web3.js", "Ethers.js"],
    githubLink:
      "[https://github.com/your-username/decentralized-voting](https://github.com/your-username/decentralized-voting)",
    liveLink:
      "[https://decentralized-voting.vercel.app/](https://decentralized-voting.vercel.app/)",
    image:
      "[https://placehold.co/600x400/1e293b/cbd5e1?text=Decentralized+Voting](https://placehold.co/600x400/1e293b/cbd5e1?text=Decentralized+Voting)",
  },
  {
    id: 4,
    title: "Interactive Data Visualization Dashboard",
    description:
      "Created a dynamic dashboard for visualizing complex datasets. Allows users to filter, sort, and explore data through interactive charts and graphs. Built with a focus on performance and user-friendly interaction.",
    technologies: ["D3.js", "React", "Node.js", "Express", "MongoDB Atlas"],
    githubLink:
      "[https://github.com/your-username/data-dashboard](https://github.com/your-username/data-dashboard)",
    liveLink:
      "[https://data-dashboard.netlify.app/](https://data-dashboard.netlify.app/)",
    image:
      "[https://placehold.co/600x400/1e293b/cbd5e1?text=Data+Visualization](https://placehold.co/600x400/1e293b/cbd5e1?text=Data+Visualization)",
  },
];

export default function Project() {
  return (
    // ScrollFadeInOut wrapper for fade-in/out effect
    <ScrollFadeInOut>
      <section
        id="projects" // Added an ID for potential navigation
        className={`
          ${inter.variable} font-sans antialiased min-h-screen text-gray-200 py-16 px-4 sm:px-6 lg:px-8
          bg-gradient-to-br
          from-[#121826] /* end of page 1 */
          via-[#1f2c47] /* slightly lighter, more indigo */
          to-[#2b3856] /* warms up toward steel-blue */
          flex flex-col items-center justify-center
        `}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center text-5xl sm:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text
             bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 animate-gradient-flow mb-20"
          >
            Built With{" "}
            <span className="underline decoration-indigo-500 underline-offset-8">
              Passion
            </span>
            <br />
            My Finest <span className="text-indigo-300">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden
                           transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30
                           flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    // Placeholder image with fallback text
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/1e293b/cbd5e1?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white z-10">
                    {project.title}
                  </h3>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-700 text-indigo-100 text-sm font-medium px-3 py-1 rounded-full shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-end gap-4 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="mr-2 h-5 w-5" /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeInOut>
  );
}
