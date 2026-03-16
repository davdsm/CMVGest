import React from "react";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../lib/motion";

type TerrainPageProps = { onOpenContact?: () => void };

export function TerrainPage({ onOpenContact }: TerrainPageProps) {
  return (
    <div className="min-h-screen w-full bg-white text-[#1a1020]">
      <motion.main
        className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-40 md:px-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUpContainer}
      >
        {/* Badge */}
        <motion.div className="flex justify-center" variants={fadeInUpItem}>
          <span className="rounded-full bg-[#3a2735] px-6 py-1 text-[11px] font-medium tracking-[0.25em] text-white uppercase">
            Vermil - Guimarães
          </span>
        </motion.div>

        {/* Title */}
        <motion.header className="text-center" variants={fadeInUpItem}>
          <h1
            className="font-title text-[clamp(2.8rem,7vw,4.6rem)] leading-none uppercase tracking-[-0.06em]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, #1f0f1c 0%, #1f0f1c 55%, rgba(31,15,28,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LOTES&nbsp;TERRENO
          </h1>
        </motion.header>

        {/* Hero image */}
        <motion.section className="w-full" variants={fadeInUpItem}>
          <div className="relative w-full overflow-hidden rounded-[40px] md:rounded-[56px] bg-[#f3f3f3]">
            <img
              src="/images/projects/planta.jpg"
              alt="Planta dos lotes terreno em Vermil"
              className="h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] w-full object-cover"
            />
          </div>
        </motion.section>

        {/* Bottom content */}
        <motion.section
          className="mt-6 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start"
          variants={fadeInUpItem}
        >
          {/* Left column */}
          <div className="flex flex-col gap-6 max-w-sm">
            <p
              className="text-sm md:text-[15px] text-[#4b3a46]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              O cliente não precisa de procurar equipas, negociar contratos ou resolver imprevistos. A responsabilidade é nossa, do primeiro esboço ao momento da entrega da chave.
            </p>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#af6693] px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(0,0,0,0.15)] hover:bg-[#c077a6] transition-colors cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 md:items-start">
            <h2
              className="font-title text-[clamp(1.9rem,4vw,2.6rem)] uppercase leading-tight tracking-[-0.06em]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #1f0f1c 0%, #1f0f1c 55%, rgba(31,15,28,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              O sonho da casa própria.
              <br />
              Começa aqui.
            </h2>
            <p
              className="max-w-xl text-sm md:text-[15px] text-[#4b3a46]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >

              Não vendemos apenas um terreno. Criamos a solução completa para a
              sua futura casa, com um acompanhamento próximo em cada decisão.<br />
              Todo o processo é desenvolvido em regime chave na mão, o que
              significa que a gestão técnica, os prazos, os fornecedores e a
              execução estão totalmente assegurados.

              <br /><br />
              <h2><b>Lote 1:</b> 206.10m2<br /></h2>
              <h2><b>Lote 2:</b> 154.00m2<br /></h2>
              <h2><b>Lote 3:</b> 171.25m2<br /></h2>
              <h2><b>Lote 4:</b> 188.50m2<br /></h2>
              <h2><b>Lote 5:</b> 205.70m2<br /></h2>
              <h2><b>Lote 6:</b> 514.80m2<br /></h2>
            </p>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}

