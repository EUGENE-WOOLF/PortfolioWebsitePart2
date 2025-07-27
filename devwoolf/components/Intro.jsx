"use client";

import Nav from "./navbar";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "$/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { Space_Grotesk } from "next/font/google";
import ScrollFadeInOut from "./ScrollFadeIn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
export default function HomePage() {
  return (
    <div
      className={`font-thin relative w-full h-screen overflow-hidden ${spaceGrotesk.className}`}
    >
      <Nav />

      {/* Background video */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}

      <div className="h-full ">
        <div className=" md:h-[60vh]  h-full md:items-start relative z-10 flex flex-col justify-center text-white text-center px-6">
          <ScrollFadeInOut>
            <div className="md:ml-15  md:flex flex-col ">
              <h1 className="text-6xl md:text-5xl md:text-7.5xl font-bold mb-4">
                Hi, I'm <p className="text-7xl text-[#799EFF]">Ujjwal</p>
              </h1>

              <div className="md:text-3xl   text-xl font-semibold mb-6 ">
                Freelance Developer. Full-time Builder.{" "}
                <div className="ld:inline text-2xl md:text-3xl text-[#799EFF]">
                  <Typewriter
                    words={["Eat", "Sleep", "Code", "Repeat!"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </div>
              </div>

              <div className="md:self-center md:w-[20vw]">
                <Button
                  asChild
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A93FF] to-[#4762FF] text-white font-medium text-lg shadow-md hover:brightness-110 hover:scale-105 transition duration-200"
                >
                  <Link href="/logi">
                    Hire Me <FaArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollFadeInOut>
        </div>
      </div>
    </div>
  );
}
