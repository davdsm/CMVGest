import React from "react";
import { motion } from "framer-motion";
import { mediaConfig } from "../homepage/mediaConfig";
import { useRouter } from "../router";
const logoSrc = "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";

export function ComingSoonPage() {
  const { navigate } = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f0b11] text-white">
      {/* Background image + overlay to match hero */}
      <div className="absolute inset-0">
        <img
          src={mediaConfig.hero.background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#3a2735]/70 to-[#0f0b11]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col px-6 py-6 md:px-10">
        {/* Minimal top bar */}
        <header className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="CMVGest"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col xs:flex-row xs:items-baseline xs:gap-2 md:gap-3">
              <span className="font-title text-lg md:text-xl">CMVGest</span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/60 whitespace-nowrap">
                Projetos chave na mão
              </span>
            </div>
          </div>
        </header>

        {/* Center block */}
        <main className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative max-w-[720px] w-full text-center px-2"
          >
            <p className="font-title text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
              Em breve
            </p>
            <h1
              className="font-title text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-[-2px]"
              style={{
                backgroundImage:
                  "linear-gradient(132deg, rgb(255, 255, 255) 43%, rgba(255, 255, 255, 0.15) 104%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Um novo conceito chave na mão está a chegar.
            </h1>

            <p
              className="mx-auto mt-5 max-w-[520px] text-sm md:text-[15px] text-white/75"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Estamos a finalizar os últimos detalhes para lhe apresentar uma
              forma mais simples, transparente e elegante de concretizar os seus
              projetos chave na mão. Muito em breve poderá explorar todas as soluções.
            </p>

            {/* Simple countdown-style info */}
            <div className="mt-8 flex justify-center gap-8 text-xs text-white/60">
              <div className="flex flex-col gap-1">
                <span className="text-[1.6rem] leading-none text-white font-semibold">
                  2026
                </span>
                <span>Lançamento previsto</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="flex flex-col gap-1 text-left">
                <span>Entretanto, estamos disponíveis para o ouvir.</span>
                <span className="text-white/80">
                  Contacte-nos através de{" "}
                  <a
                    href="mailto:geral@cmvgest.com"
                    className="underline decoration-white/40 underline-offset-4 hover:text-white"
                  >
                    geral@cmvgest.com
                  </a>
                  .
                </span>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Bottom note */}
        <footer className="relative mt-6 mb-2 flex flex-col items-center gap-2 text-[10px] text-white/45">
          <p>CMVGest · Projetos chave na mão.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/terms")}
              className="hover:text-white/80 transition-colors underline decoration-white/30 underline-offset-4 cursor-pointer"
            >
              Termos e Condições
            </button>
            <span className="h-2 w-px bg-white/30" />
            <button
              type="button"
              onClick={() => navigate("/privacy")}
              className="hover:text-white/80 transition-colors underline decoration-white/30 underline-offset-4 cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

