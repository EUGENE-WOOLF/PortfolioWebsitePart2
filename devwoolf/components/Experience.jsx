import ScrollFadeInOut from "./ScrollFadeIn";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Experience() {
  return (
    <div
      className={`${spaceGrotesk.variable} antialiased  h-screen text-white bg-gradient-to-br from-[#0a0f1a] via-[#1a2338] to-[#121826]`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <ScrollFadeInOut>
        <div className="border border-green-200 h-screen flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="border text-3xl border-amber-500 md:w-[50vw] flex justify-center px-1 py-3">
            Name and all
          </div>
          <div className="border border-red-500 md:w-[50vw] flex justify-center">
            This is the other element
          </div>
        </div>
      </ScrollFadeInOut>
    </div>
  );
}
