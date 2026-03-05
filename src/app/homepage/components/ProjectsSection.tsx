import React from "react";
import { motion } from "framer-motion";
import imgLogoLightPng from "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
import { ChevronLeftIcon, ChevronRightIcon } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

export function ProjectsSection() {
  return (
    <motion.section
      className="relative w-full bg-[#3a2735] py-16 md:py-24 px-6 md:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUpItem} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 shrink-0">
            <img
              src={imgLogoLightPng}
              alt="CMVGest"
              className="h-10 w-auto object-contain"
            />
            <p className="font-title text-white text-[2.5rem] font-medium">
              Projetos
            </p>
          </div>
          <p
            className="text-white max-w-[500px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: 1.5 }}
          >
            Trata-se de uma localização estratégica, onde a calma do contexto envolvente se combina com a valorização crescente da zona. Construir aqui é escolher viver com mais conforto, mais liberdade e maior segurança no investimento.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div variants={fadeInUpItem} className="relative w-full">
          <div
            className="w-full aspect-[3/1] rounded-[40px] md:rounded-[80px] bg-[rgba(241,241,241,0.1)] flex items-center justify-center"
            style={{
              borderRadius: "80px 80px 40px 40px",
            }}
          >
            <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              imagem do terreno com linhas
            </p>
          </div>

          {/* Details button */}
          <div className="flex justify-end mt-6">
            <button className="font-title bg-[#3a2735] border border-white/20 text-white px-8 py-3 rounded-full hover:bg-[#4a3745] transition-colors text-base font-bold">
              Detalhes
            </button>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div variants={fadeInUpItem} className="flex items-center justify-center gap-4 mt-10">
          <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border border-white/50 flex items-center justify-center hover:border-white transition-colors" aria-label="Anterior">
            <ChevronLeftIcon className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Seguinte">
            <ChevronRightIcon className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
