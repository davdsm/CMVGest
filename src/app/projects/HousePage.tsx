import React from "react";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../lib/motion";

const GALLERY_IMAGES = [
  "/images/projects/1.jpeg",
  "/images/projects/2.jpeg",
  "/images/projects/3.png",
  "/images/projects/4.png",
  "/images/projects/5.webp",
  "/images/projects/house.png",
];

const CAROUSEL_GAP = 16;

// Infinite loop: clone first slide at end so we can animate to it then reset
const CAROUSEL_SLIDES = [...GALLERY_IMAGES, GALLERY_IMAGES[0]];

const TRANSITION_DURATION_MS = 700;

type HousePageProps = { onOpenContact?: () => void };

export function HousePage({ onOpenContact }: HousePageProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [transitionEnabled, setTransitionEnabled] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = React.useState(280);
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      setContainerWidth(w);
      if (w <= 480) {
        setSlideWidth(w - 80);
      } else if (w <= 768) {
        setSlideWidth((w - 80) / 3);
      } else {
        setSlideWidth((w - 120) / 3);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Autoplay: advance one slide; when at last (clone), stay there and let effect reset to 0
  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) =>
        prev >= CAROUSEL_SLIDES.length - 1 ? prev : prev + 1
      );
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  // When we land on the clone (last index), after transition ends snap back to 0 with no animation
  React.useEffect(() => {
    if (activeIndex !== CAROUSEL_SLIDES.length - 1) return;
    const id = window.setTimeout(() => {
      setTransitionEnabled(false);
      setActiveIndex(0);
      const reenable = () => requestAnimationFrame(() => setTransitionEnabled(true));
      requestAnimationFrame(reenable);
    }, TRANSITION_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [activeIndex]);

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
            Vermil
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
            Moradia&nbsp;Familiar
          </h1>
        </motion.header>

        {/* Hero image (placeholder block to match design proportions) */}
        <motion.section className="w-full" variants={fadeInUpItem}>
          <div className="relative w-full overflow-hidden rounded-[40px] md:rounded-[56px] bg-[#f3f3f3]">
            <img
              src="/images/projects/house.png"
              alt="Visualização da moradia familiar em Vermil"
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
              Não vendemos apenas um terreno. Criamos a solução completa para a
              sua futura casa.
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
          <div className="flex flex-col gap-6 md:items-start">
            <div className="space-y-3">
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
                Soluções completas.
                <br />
                Zero complicações.
              </h2>
              <p
                className="max-w-xl text-sm md:text-[15px] text-[#4b3a46]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Dimensões pensadas para uma vivência familiar confortável,
                aliando espaço exterior, áreas interiores bem definidas e um
                projeto preparado para responder às necessidades atuais e
                futuras. Início da construção em março 2026.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap gap-8 md:gap-12">
              <div className="flex flex-col gap-1">
                <p className="font-title text-xl md:text-2xl text-[#3a2735]">
                  T3 <span className="text-[#af6693]">+1</span>
                </p>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b8b97]">
                  Tipologia
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-title text-xl md:text-2xl text-[#3a2735]">
                  400 <span className="text-[#af6693]">m^</span>
                </p>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b8b97]">
                  Lote
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-title text-xl md:text-2xl text-[#3a2735]">
                  298 <span className="text-[#af6693]">m^</span>
                </p>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b8b97]">
                  m2 construção
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom carousel - full viewport width, center mode, one item at a time */}
        <motion.section className="mt-12" variants={fadeInUpItem}>
          <div
            ref={containerRef}
            className="overflow-hidden"
            style={{
              width: "100vw",
              position: "relative",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
            }}
          >
          <div
            className="flex ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{
              paddingLeft: containerWidth > 0 ? containerWidth / 2 - slideWidth / 2 : 0,
              paddingRight: containerWidth > 0 ? containerWidth / 2 - slideWidth / 2 : 0,
              transform: `translateX(-${activeIndex * (slideWidth + CAROUSEL_GAP)}px)`,
              gap: CAROUSEL_GAP,
              transition: transitionEnabled
                ? `transform ${TRANSITION_DURATION_MS}ms cubic-bezier(0.22,0.61,0.36,1)`
                : "none",
            }}
          >
            {CAROUSEL_SLIDES.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 aspect-square overflow-hidden rounded-[32px] bg-[#f3f3f3]"
                style={{ width: slideWidth }}
              >
                <img
                  src={src}
                  alt={`Vista ${index + 1} da moradia familiar`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}

