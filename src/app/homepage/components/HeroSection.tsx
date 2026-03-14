import React from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowDownIcon } from "../../components/icons";
import { viewport, fadeInUpItem } from "../../lib/motion";
import { mediaConfig } from "../mediaConfig";

const HERO_VALUES = ["CONFIANÇA", "INTEGRIDADE", "VALOR"] as const;
const ITEM_HEIGHT_REM = 3.5;

const valueTextStyle = {
  backgroundImage: "linear-gradient(161deg, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 88%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
} as const;

export function HeroSection() {
  const heroRef = React.useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll-based parallax for background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Background moves slightly opposite to cursor, and scrolls slower than content
  const bgX = useTransform(mouseX, (v) => v * -30);
  const bgScrollY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY = useTransform([mouseY, bgScrollY], ([v, scroll]: number[]) => v * -30 + scroll);
  const contentX = useTransform(mouseX, (v) => v * 20);
  const contentY = useTransform(mouseY, (v) => v * 20);

  React.useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = event.clientX - innerWidth / 2;
      const offsetY = event.clientY - innerHeight / 2;
      mouseX.set(offsetX / innerWidth);
      mouseY.set(offsetY / innerHeight);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("solutions-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-[#3a2735]"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        style={{ x: bgX, y: bgY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={mediaConfig.hero.background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3a2735]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center min-h-[90vh] md:min-h-screen px-6 md:px-16 pt-24 pb-16"
        style={{ x: contentX, y: contentY }}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={heroContainer}
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
            style={{
              height: `${ITEM_HEIGHT_REM * 3}rem`, WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            }}
            aria-hidden
          >
            <div
              className="flex flex-col font-title font-bold uppercase leading-[1.1] tracking-[-1.5px] text-[clamp(1.25rem,3.25vw,2.25rem)] pl-8"
              style={{
                animation: `hero-values-scroll ${6 * HERO_VALUES.length}s linear infinite`,
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
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
          <motion.button
            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#AE6692] flex items-center justify-center shadow-[0_30px_76px_rgba(0,0,0,0.4)] hover:bg-[#c077a6] transition-colors cursor-pointer"
            animate={{ y: [-4, 0, -4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll down"
            onClick={scrollToNextSection}
          >
            <ArrowDownIcon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
