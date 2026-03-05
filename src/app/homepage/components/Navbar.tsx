import React from "react";
import { motion } from "framer-motion";
import imgLogoLightPng from "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
import { Bars3Icon } from "../../components/icons";
import { fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

export function Navbar() {
  return (
    <motion.nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
      initial="hidden"
      animate="visible"
      variants={fadeInUpContainer}
    >
      <motion.div variants={fadeInUpItem} className="flex items-center gap-2.5 min-h-[2.25rem] md:min-h-[2.75rem]">
        <img
          src={imgLogoLightPng}
          alt="CMVGest Logo"
          className="h-7 md:h-9 w-auto object-contain shrink-0"
        />
        <span className="font-title text-white text-[17px] md:text-[22px] font-bold leading-none flex items-center">
          CMVGest
        </span>
      </motion.div>
      <motion.div variants={fadeInUpItem} className="hidden md:flex bg-[#e6e8ee] rounded-full overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2">
          <button
            className="px-5 py-2 rounded-full text-[#050505] transition-colors hover:bg-gray-200"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "16px" }}
          >
            Contactos
          </button>
          <button
            className="px-6 py-2 rounded-full bg-[#3a2735] text-[#e6e8ee] transition-colors hover:bg-[#4a3745]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "16px" }}
          >
            Plantas
          </button>
        </div>
      </motion.div>
      {/* Mobile menu button */}
      <motion.div variants={fadeInUpItem}>
        <button className="md:hidden text-white p-2" aria-label="Menu">
          <Bars3Icon className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.nav>
  );
}
