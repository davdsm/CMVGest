import React from "react";
import { motion } from "framer-motion";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

export function VideoSection() {
  return (
    <motion.section
      className="relative w-full bg-[#3a2735] py-8 md:py-16 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-center">
        <motion.div
          variants={fadeInUpItem}
          className="relative w-full aspect-[16/7] rounded-full overflow-hidden bg-[#1b141b]"
        >
          <video
            className="h-full w-full object-cover"
            src="/video/home.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Brand-tinted overlay to harmonize with palette */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#3a2735]/80 via-[#af6693]/35 to-transparent mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
        </motion.div>
      </div>
    </motion.section>
  );
}
