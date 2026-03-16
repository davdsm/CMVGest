import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";
import { useRouter } from "../../router";

export function ProjectsSection() {
  const logoSrc = "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
  const { navigate } = useRouter();

  const projects = [
    {
      id: "house",
      title: "Moradia de Referência",
      description:
        "Projeto de moradia unifamiliar de dois pisos, com 298 m² de área total de construção, inserido num lote de 400 m².",
      image: "/images/projects/house.png",
      link: "#moradia",
      ctaLabel: "Ver Moradia",
    },
    {
      id: "terrain",
      title: "Terreno em Vermil",
      description:
        "Construir aqui é escolher viver com mais conforto, mais liberdade e maior segurança no investimento.",
      image: "/images/projects/terrain.jpg",
      link: "#terreno",
      ctaLabel: "Ver Terreno",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  // Preload all carousel images so the second slide appears instantly
  React.useEffect(() => {
    projects.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      id="projects-section"
      className="relative w-full bg-[#3a2735] py-16 md:py-24 px-6 md:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUpItem} className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between lg:items-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 shrink-0">
            <img
              src={logoSrc}
              alt="CMVGest"
              className="h-10 w-auto object-contain"
            />
            <p className="font-title text-white text-[2.5rem] font-medium">
              Projetos
            </p>
          </div>
          <p
            className="text-white max-w-[500px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 200, fontSize: "18px", lineHeight: 1.5 }}
          >
            {activeProject.description}
          </p>
        </motion.div>

        {/* Project Slider */}
        <motion.div variants={fadeInUpItem} className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="relative w-full h-[230px] xs:h-[260px] sm:h-[280px] md:h-auto md:aspect-[1455/452]">
                <svg
                  viewBox="0 0 1455 452"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <mask
                      id="projectsMask"
                      maskUnits="userSpaceOnUse"
                      x="17"
                      y="0"
                      width="1420"
                      height="452"
                    >
                      <path
                        d="M78.0418 63.8285C85.5231 26.7025 118.143 0 156.015 0H1298.45C1336.32 0 1368.94 26.7025 1376.42 63.8284L1435.27 355.858C1445.19 405.109 1407.54 451.111 1357.3 451.111H97.1682C46.927 451.111 9.26999 405.109 19.1947 355.858L78.0418 63.8285Z"
                        fill="#FFFFFF"
                      />
                    </mask>
                  </defs>
                  <g mask="url(#projectsMask)">
                    <motion.image
                      href={activeProject.image}
                      x="-150"
                      y="-263.622"
                      width="1750"
                      height="969.264"
                      preserveAspectRatio="xMidYMid slice"
                      initial={{ x: -70 }}
                      animate={{ x: 70 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                    <rect
                      x="0"
                      y="-263.622"
                      width="1454.46"
                      height="969.264"
                      rx="79.541"
                      fill="#F1F1F1"
                      fillOpacity="0.2"
                    />
                  </g>
                </svg>

                {/* CTAs positioned over the image per project */}
                {activeProject.id === "terrain" && (
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-end pb-12 pr-14 md:pr-18">
                    <button
                      type="button"
                      onClick={() => navigate("/projetos/terreno")}
                      className="pointer-events-auto font-title rounded-full bg-white/95 px-6 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-[#3a2735] hover:bg-white transition-colors cursor-pointer"
                    >
                      Ver lotes terreno
                    </button>
                  </div>
                )}
                {activeProject.id === "house" && (
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-end pb-12 pr-14 md:pr-18">
                    <button
                      type="button"
                      onClick={() => navigate("/projetos/moradia-familiar")}
                      className="pointer-events-auto font-title rounded-full bg-white/95 px-6 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-[#3a2735] hover:bg-white transition-colors cursor-pointer"
                    >
                      Ver moradia
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div variants={fadeInUpItem} className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border border-white/50 flex items-center justify-center hover:border-white transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          <button
            onClick={handleNext}
            className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Seguinte"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
