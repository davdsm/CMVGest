import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";
import { mediaConfig } from "../mediaConfig";

type ConceptSectionProps = {
  onOpenContact?: () => void;
};

export function ConceptSection({ onOpenContact }: ConceptSectionProps) {
  const logoSrc = "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";

  return (
    <motion.section
      id="concept-section"
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
                src={logoSrc}
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
                  + VALOR + INTEGRIDADE + CONFIANÇA
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
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: 1.5 }}
          >
            Sabemos que construir casa pode ser um processo exigente. Licenciamentos, decisões técnicas, controlo de orçamento, acompanhamento de obra, são muitas as variáveis que podem gerar ansiedade e incerteza.             Foi precisamente para eliminar essa complexidade que estruturámos um modelo totalmente chave na mão.
          </motion.p>

          {/* Parceiros */}
          <motion.div variants={fadeInUpItem} className="flex gap-3 mt-4">
            {[
              {
                name: "Conquistador",
                img: "conquistador.svg",
                href: "https://www.doutorfinancas.pt/rede-loja-conquistador-guimaraes/?ref=678a30a3ebbfe&src=icdf.ch.propostaeloquente.danielapereira.cartaodevisita",
              },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full md:rounded-[80px] bg-[rgba(217,217,217,0.1)] p-8 inline-flex items-center justify-center hover:bg-[rgba(217,217,217,0.18)] transition-colors"
              >
                <img
                  src={`/partners/${partner.img}`}
                  alt={partner.name}
                  className="w-32 h-full object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right - Circles illustration */}
        <motion.div
          variants={fadeInUpItem}
          className="lg:w-1/2 relative min-h-[420px] md:min-h-[640px] flex items-center justify-center"
        >
          <div className="relative w-[82vw] max-w-[520px] aspect-square">
            {/* Back circle (soft key image glow) */}
            <div
              className="absolute right-[-22%] top-[8%] h-full w-[78%] aspect-square rounded-full opacity-25"
              style={{
                backgroundImage: "url(/images/key.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(2px)",
              }}
            />

            {/* Front main circle with key image */}
            <div
              className="absolute left-0 top-0 h-full w-[82%] aspect-square rounded-full flex items-center justify-center"
              style={{
                backgroundImage: "url(/images/key.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
              }}
            >
              {/* Arrow button anchored to bottom center of main circle */}
              <div className="absolute left-1/2 bottom-[-10%] -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#AF6693] flex items-center justify-center shadow-[0_42px_90px_rgba(0,0,0,0.55)] hover:bg-[#c077a6] transition-colors cursor-pointer"
                >
                  <ArrowUpRightIcon className="w-9 h-9 md:w-10 md:h-10 text-white" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
