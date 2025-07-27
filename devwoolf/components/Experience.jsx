import ScrollFadeInOut from "./ScrollFadeIn";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export default function Experience() {
  return (
    <div
      className={`${inter.variable} antialiased h-screen text-gray-400 bg-gradient-to-br from-[#0e1529] via-[#1b2540] to-[#121F44]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <ScrollFadeInOut>
        <div className="border border-green-900 h-screen flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="border flex flex-col  justify-around  border-amber-500 md:w-[40vw] md:px-10 py-4 my-5 gap-6">
            <div className="tracking-wide">
              <div className="border flex flex-col border-white">
                <div className="text-[#C6D1EC] text-4xl font-bold">
                  Ujjwal Prakash
                </div>
                <div>This is shit</div>
              </div>
            </div>

            <div className="text-lg font-light italic">
              I build this bullshit so you don't have to.
            </div>

            <div>
              <div className="flex justify-center gap-6">
                <a href="#" className="hover:text-blue-400 transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-pink-400 transition">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border border-red-500 md:w-[60vw] flex justify-center">
            This is the other element
          </div>
        </div>
      </ScrollFadeInOut>
    </div>
  );
}
