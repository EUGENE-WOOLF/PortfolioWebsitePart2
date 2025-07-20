"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { AlignJustify, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top navbar */}
      <nav className=" flex justify-between ">
        <div className=" w-full shrink px-2 mx-5  flex flex-row justify-between">
          <div>
            <a href="/">
              <Image
                className="relative border right-5 "
                src={logo}
                alt="Logo"
                width={120}
                height={20}
              />
            </a>
          </div>
          <div className="  flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <AlignJustify />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed border-amber-950 inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-2 border border-amber-500 absolute top-4 right-4 md:absolute md:top-8"
              onClick={() => setMenuOpen(false)}
            >
              <X className=" w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-6 text-xl font-medium">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
