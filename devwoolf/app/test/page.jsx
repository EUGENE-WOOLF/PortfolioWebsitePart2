"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Lerp (linear interpolation) for smooth trailing
      ring.current.x += (mouse.current.x - ring.current.x) * 0.2;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${
          ring.current.x - 15
        }px, ${ring.current.y - 15}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        className="bg-white"
        ref={dotRef}
        style={{
          position: "fixed",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)",
          transition: "background-color 0.2s ease",
        }}
      />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "1.5px solid #ffffff",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-100px, -100px)",
          transition: "border-color 0.2s ease",
        }}
      />
    </>
  );
}
