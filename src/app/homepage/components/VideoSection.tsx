import React from "react";
import { motion } from "framer-motion";
import imgABackyardWithAWoodenDeckAndALargeCouch20230411011749Utc1 from "/images/7b69f9b4b2c8c572f1e55950c14ecb5a024dc5f2.png";
import { PlayCircleIcon } from "../../components/icons";
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
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeInUpItem} className="relative w-full aspect-[16/7] rounded-[40px] md:rounded-[80px] overflow-hidden">
          {/* Background image as mask effect */}
          <img
            src={imgABackyardWithAWoodenDeckAndALargeCouch20230411011749Utc1}
            alt="Modern villa exterior"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[rgba(241,241,241,0.05)]" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group relative" aria-label="Reproduzir vídeo">
              <PlayCircleIcon className="w-24 h-24 md:w-28 md:h-28 text-[#3A2735] drop-shadow-lg group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </button>
          </div>

          {/* Label */}
          <p className="font-title absolute top-4 left-1/2 -translate-x-1/2 text-white text-[12px]">
            Vídeo Horizontal Arquivo
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
