"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollFadeInOut({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0.2 }} // Start closer to visible
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      className="text-gray-300" // Use a lighter shade that blends well
    >
      {children}
    </motion.div>
  );
}
