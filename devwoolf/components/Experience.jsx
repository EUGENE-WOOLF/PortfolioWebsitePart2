import ScrollFadeInOut from "./ScrollFadeIn";
import { Inter } from "next/font/google";
import StyledArtCards from "./StylizedArtCard";
import { Github, Linkedin, Instagram } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export default function Experience() {
  return (
    <div
      className={`${inter.variable} antialiased h-screen text-gray-400	 bg-gradient-to-br from-[#0a0f1a] via-[#1a2338] to-[#121826]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <ScrollFadeInOut>
        <div className=" h-screen flex flex-col md:flex-row flex-wrap-reverses md:flex-nowrap">
          <div className="flex flex-col justify-around md:w-[40vw] px-4 md:px-10 py-4 md:m-6 my-4 gap-6">
            {/* //there has been a margin added please do think about that //check here */}
            <div className="tracking-wide">
              <div className="flex flex-col border-white">
                {/* Name */}
                <div className="text-[#C6D1EC] text-5xl font-bold">
                  Ujjwal Prakash
                </div>

                {/* Titles */}
                <div className="my-3 text-2xl font-medium text-[#AAB9DA]">
                  <div>Full Stack Dev</div>
                  <div>AWS Developer</div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 text-sm text-gray-400 mt-1">
                  <span className="bg-[#1f2a40] px-2 py-0.5 rounded">MERN</span>
                  <span className="bg-[#1f2a40] px-2 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-[#1f2a40] px-2 py-0.5 rounded">
                    Supabase + PSQL
                  </span>
                  <span className="bg-[#1f2a40] px-2 py-0.5 rounded">
                    AWS DVA-C02
                  </span>
                  <span className="bg-[#1f2a40] px-2 py-0.5 rounded">
                    Bio Medical Engineer
                  </span>
                </div>

                {/* Short Pitch */}
                <div className="mt-3 text-gray-400 text-sm leading-relaxed">
                  I build{" "}
                  <span className="text-white font-semibold">scalable</span>,{" "}
                  <span className="text-white font-semibold">modern</span>,{" "}
                  <span className="text-white font-semibold">beautiful</span>,
                  and{" "}
                  <span className="text-white font-semibold">SEO-friendly</span>{" "}
                  websites — hosted seamlessly on{" "}
                  <span className="text-white font-semibold">AWS</span>.
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/ujjwal-prakash-036873336/"
                  className="hover:text-blue-400 transition"
                >
                  <Linkedin size={30} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/ujjwal_prakash_0/"
                  className="hover:text-pink-400 transition"
                >
                  <Instagram size={30} strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/EUGENE-WOOLF"
                  className="hover:text-[#c27fe6] transition"
                >
                  <Github size={30} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <StyledArtCards />
        </div>
      </ScrollFadeInOut>
    </div>
  );
}
