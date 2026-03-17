import React from "react";
import { motion } from "framer-motion";
import imgLogoLightPng from "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

type SolutionsSectionProps = {
  onOpenContact?: () => void;
};

export function SolutionsSection({ onOpenContact }: SolutionsSectionProps) {
  return (
    <motion.section
      id="solutions-section"
      className="relative w-full bg-[#3a2735] py-16 md:py-24 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left - Rotating Text Badge */}
        <div className="flex flex-col items-start gap-8 lg:w-1/3">
          {/* Circular badge */}
          <motion.div variants={fadeInUpItem} className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={imgLogoLightPng}
                alt="CMVGest"
                className="w-16 h-auto object-contain"
              />
            </div>
            <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text fill="white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 200, fontSize: "14.5px", letterSpacing: "5px" }}>
                <textPath xlinkHref="#circlePath">
                  + VALOR + INTEGRIDADE + CONFIANÇA
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.p
            variants={fadeInUpItem}
            className="text-[#a0a0a0] max-w-[300px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: 1.5 }}
          >
            Não vendemos apenas um terreno.
            <br />
            Criamos a solução completa para a sua futura casa.
          </motion.p>

          <motion.button
            variants={fadeInUpItem}
            className="bg-[#af6693] text-white px-8 py-4 rounded-full hover:bg-[#c077a6] transition-colors cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "16px" }}
            onClick={onOpenContact}
          >
            Enviar Mensagem
          </motion.button>
        </div>

        {/* Right - Content */}
        <div className="lg:w-2/3 flex flex-col gap-12">
          <motion.div variants={fadeInUpItem} className="flex flex-col gap-5">
            <h2
              className="font-title text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-[-2px]"
              style={{
                backgroundImage: "linear-gradient(132deg, rgb(255, 255, 255) 43%, rgba(255, 255, 255, 0) 104%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Soluções completas. Zero complicações.
            </h2>
            <p
              className="text-[#a0a0a0] max-w-[700px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: 1.5 }}
            >
              Todo o processo é desenvolvido em regime chave na mão, o que significa que a gestão técnica, os prazos, os fornecedores e a execução estão totalmente assegurados. O cliente não precisa de procurar equipas, negociar contratos ou resolver imprevistos. A responsabilidade é nossa, do primeiro esboço ao momento da entrega da chave.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            <motion.div variants={fadeInUpItem} className="flex flex-col gap-3">
              <p className="text-white text-[3rem] md:text-[3.5rem] tracking-[-1px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                6
              </p>
              <p className="text-[#a0a0a0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "18px" }}>
                Lotes
              </p>
            </motion.div>
            <motion.div variants={fadeInUpItem} className="flex flex-col gap-3">
              <p className="text-[3rem] md:text-[3.5rem] tracking-[-1px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                <span className="text-white">2314 </span>
                <span className="text-[#af6693]">m2</span>
              </p>
              <p className="text-[#a0a0a0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "18px" }}>
                Terreno
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
