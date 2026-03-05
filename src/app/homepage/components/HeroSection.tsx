import React from "react";
import { motion } from "framer-motion";
import imgHeroV1 from "/images/dc694ceba626ccc7a1c582166648a2656bef0e8b.png";
import { ArrowUpRightIcon } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";

const HERO_VALUES = ["CONFIANÇA", "INTEGRIDADE", "VALOR"] as const;
const ITEM_HEIGHT_REM = 3.5;

const valueTextStyle = {
  backgroundImage: "linear-gradient(161deg, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 88%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-[#3a2735]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgHeroV1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3a2735]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center min-h-[90vh] md:min-h-screen px-6 md:px-16 pt-24 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUpContainer}
      >
        <motion.h1
          variants={fadeInUpItem}
          className="font-title text-[clamp(3rem,10vw,8rem)] font-semibold uppercase leading-[1.05] tracking-[-2px]"
          style={{
            backgroundImage: "linear-gradient(146deg, rgb(255, 255, 255) 55%, rgba(255, 255, 255, 0) 88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PROJETOS
          <br />
          CHAVE NA mão
        </motion.h1>

        {/* Values – infinite vertical carousel, plus fixed on center */}
        <motion.div variants={fadeInUpItem} className="mt-12 md:mt-16 max-w-md relative" style={{ height: `${ITEM_HEIGHT_REM * 3}rem` }}>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ height: `${ITEM_HEIGHT_REM * 3}rem` }}
            aria-hidden
          >
            <div
              className="flex flex-col font-title font-bold uppercase leading-[1.1] tracking-[-1.5px] text-[clamp(1.25rem,3.25vw,2.25rem)] pl-8"
              style={{
                animation: `hero-values-scroll ${6 * HERO_VALUES.length}s linear infinite`,
              }}
            >
              {[...HERO_VALUES, ...HERO_VALUES, ...HERO_VALUES].map((word, i) => (
                <div
                  key={`${word}-${i}`}
                  className="flex items-center shrink-0"
                  style={{ height: `${ITEM_HEIGHT_REM}rem`, ...valueTextStyle }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
          {/* Fade out at top – words fade as they scroll up */}
          <div
            className="absolute left-0 right-0 top-0 z-10 pointer-events-none"
            style={{
              height: `${ITEM_HEIGHT_REM}rem`,
              background: "linear-gradient(to bottom, #3a2735 0%, #3a2735 20%, transparent 100%)",
            }}
            aria-hidden
          />
          {/* Fade in at bottom – words fade in as they appear from below */}
          <div
            className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
            style={{
              height: `${ITEM_HEIGHT_REM}rem`,
              background: "linear-gradient(to top, #3a2735 0%, #3a2735 20%, transparent 100%)",
            }}
            aria-hidden
          />
          {/* Center row: fixed plus sign (above fades) */}
          <div
            className="absolute left-0 z-20 flex items-center pointer-events-none"
            style={{
              top: `${ITEM_HEIGHT_REM}rem`,
              height: `${ITEM_HEIGHT_REM}rem`,
            }}
          >
            <span
              className="text-white/60 shrink-0 pr-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}
            >
              +
            </span>
          </div>
        </motion.div>

        {/* Arrow Button */}
        <motion.div variants={fadeInUpItem} className="absolute bottom-24 md:bottom-32 right-6 md:right-32">
          <button className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#AE6692] flex items-center justify-center shadow-[0_30px_76px_rgba(0,0,0,0.4)] hover:bg-[#c077a6] transition-colors">
            <ArrowUpRightIcon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
