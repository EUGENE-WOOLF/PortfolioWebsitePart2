"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { AlignJustify, X } from "lucide-react";
import ScrollFadeInOut from "./ScrollFadeIn";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top navbar */}
      <ScrollFadeInOut>
        <nav className="flex  items-center justify-between px-4 py-3 md:px-8 md:py-1">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={24} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 relative right-5 text-white font-medium">
            {[
              { href: "/", label: "Home." },
              { href: "/projects", label: "Projects." },
              { href: "/experience", label: "Experience." },
              { href: "/contact", label: "Contact." },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#799EFF] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#799EFF] transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <AlignJustify size={28} />
          </button>
        </nav>
      </ScrollFadeInOut>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-13 right-4 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col space-y-6 text-2xl font-light text-white">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/experience" onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
