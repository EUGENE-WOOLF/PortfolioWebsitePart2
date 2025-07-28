import ScrollFadeInOut from "./ScrollFadeIn";
import { Inter } from "next/font/google";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "$/lib/projectData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Added 700 for headings
  variable: "--font-inter",
});

// Dummy project data

export default function Project() {
  return (
    // ScrollFadeInOut wrapper for fade-in/out effect
    <ScrollFadeInOut>
      <section
        id="projects" // Added an ID for potential navigation
        className={`
          ${inter.variable} font-sans antialiased min-h-screen text-gray-200 py-16 px-4 sm:px-6 lg:px-8
          bg-gradient-to-br
          from-[#121826] 
          via-[#1f2c47] 
          to-[#2b3856] 
          flex flex-col items-center justify-center
        `}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center text-4xl sm:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text
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
            {/* here are the cards to be added  */}
            {projects.map((data) => {
              return <ProjectCard key={data.id} projectCarddata={data} />;
            })}
          </div>
        </div>
      </section>
    </ScrollFadeInOut>
  );
}
