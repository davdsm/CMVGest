import React from "react";
import { motion } from "framer-motion";
import imgLogoLightPng from "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
import imgModernKitchenOfAModernVilla20210826153258Utc1 from "/images/9041560a144b4edb99478eb641ff70ecaa9a212d.png";
import imgBeautifulModernKitchenInLuxuryContemporaryHo20221213050023Utc1 from "/images/c7cbf7d560133531587e319e52a3c009965507e1.png";
import { ArrowUpRightIcon } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

export function ConceptSection() {
  return (
    <motion.section
      className="relative w-full bg-[#3a2735] py-16 md:py-24 px-6 md:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left - Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          {/* Circular badge */}
          <motion.div variants={fadeInUpItem} className="relative w-[140px] h-[140px] md:w-[170px] md:h-[170px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={imgLogoLightPng}
                alt="CMVGest"
                className="w-14 h-auto object-contain"
              />
            </div>
            <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
              <defs>
                <path id="circlePath2" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text fill="white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 200, fontSize: "14.5px", letterSpacing: "5px" }}>
                <textPath xlinkHref="#circlePath2">
                  PROPERTY BEST · COMFORT ·
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.h2
            variants={fadeInUpItem}
            className="font-title text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-[-2px]"
            style={{
              backgroundImage: "linear-gradient(127deg, rgb(255, 255, 255) 41%, rgba(255, 255, 255, 0) 142%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            O CONCEITO CHAVE NA MÃO
          </motion.h2>

          <motion.p
            variants={fadeInUpItem}
            className="text-[#a0a0a0] max-w-[450px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: 1.5 }}
          >
            Sabemos que construir casa pode ser um processo exigente. Licenciamentos, decisões técnicas, controlo de orçamento, acompanhamento de obra, são muitas as variáveis que podem gerar ansiedade e incerteza.             Foi precisamente para eliminar essa complexidade que estruturámos um modelo totalmente chave na mão.
          </motion.p>

          {/* Partner logos placeholder */}
          <motion.div variants={fadeInUpItem} className="flex gap-3 mt-4">
            {["", "", "", ""].map((_, i) => (
              <div key={i} className="w-[85px] h-[75px] rounded-full md:rounded-[80px] bg-[rgba(217,217,217,0.1)]" />
            ))}
          </motion.div>
        </div>

        {/* Right - Images */}
        <motion.div variants={fadeInUpItem} className="lg:w-1/2 relative min-h-[400px] md:min-h-[600px]">
          {/* Back circle image */}
          <div
            className="absolute right-0 top-0 w-[80%] aspect-square rounded-full overflow-hidden"
            style={{
              maskImage: `url('${imgModernKitchenOfAModernVilla20210826153258Utc1}')`,
              maskSize: "cover",
              maskPosition: "center",
              WebkitMaskImage: `url('${imgModernKitchenOfAModernVilla20210826153258Utc1}')`,
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",
            }}
          >
            <div className="w-full h-full bg-[rgba(255,255,255,0.06)]" />
          </div>

          {/* Front circle image */}
          <div
            className="absolute left-0 top-[20%] w-[75%] aspect-square rounded-full overflow-hidden"
            style={{
              maskImage: `url('${imgBeautifulModernKitchenInLuxuryContemporaryHo20221213050023Utc1}')`,
              maskSize: "cover",
              maskPosition: "center",
              WebkitMaskImage: `url('${imgBeautifulModernKitchenInLuxuryContemporaryHo20221213050023Utc1}')`,
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",
            }}
          >
            <div className="w-full h-full bg-[#44353e]" />
          </div>

          {/* Arrow button */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#AF6693] flex items-center justify-center shadow-[0_30px_76px_rgba(0,0,0,0.4)] hover:bg-[#c077a6] transition-colors">
              <ArrowUpRightIcon className="w-9 h-9 md:w-10 md:h-10 text-white" strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
