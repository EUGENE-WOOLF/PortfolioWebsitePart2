"use client";
import Nav from "@/components/navbar";
import { Inter } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // important if using variable
});

export default function Home() {
  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${inter.variable}`}
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
      <div className="h-full">
        <div className=" md:h-[60vh] h-full  md:items-start relative z-10 flex flex-col  justify-center  text-white text-center px-6">
          <div className="md:ml-15">
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm <p className="inline text-[#799EFF]">Ujjwal</p>
            </h1>
            <div>
              Freelance Developer. Full-time Builder.{" "}
              <div className="ld:inline text-2xl    text-[#799EFF]">
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
          </div>
        </div>
      </div>
    </div>
  );
}
