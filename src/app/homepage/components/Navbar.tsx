import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon } from "../../components/icons";
import { fadeInUpContainer, fadeInUpItem } from "../../lib/motion";
import { useRouter } from "../../router";

type NavbarProps = {
  onOpenContact?: () => void;
  onNavigate?: (id: string) => void;
};

export function Navbar({ onOpenContact, onNavigate }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { navigate, path } = useRouter();
  const isLightPage =
    path.includes("/projetos/terreno") ||
    path.includes("moradia-familiar") ||
    path.endsWith("/terreno");

  const isHome = path === "/" || path === "";

  const handleNavigate = (id: string) => {
    setIsMobileOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const handleProjetosClick = () => {
    setIsMobileOpen(false);
    if (isHome) {
      handleNavigate("projects-section");
    } else {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("scrollTo", "projects-section");
      }
      navigate("/");
    }
  };

  const handleContact = () => {
    setIsMobileOpen(false);
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 right-0 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeInUpContainer}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-16 py-5">
        <motion.button
          type="button"
          variants={fadeInUpItem}
          className="flex items-center gap-2.5 min-h-[2.25rem] md:min-h-[2.75rem] cursor-pointer"
          onClick={() => navigate("/")}
          aria-label="Ir para a página inicial"
        >
          <img
            src="/logo.svg"
            alt="CMVGest Logo"
            className="h-7 md:h-12 w-auto object-contain shrink-0"
            style={isLightPage ? { filter: "invert(1)" } : undefined}
          />
        </motion.button>
        <motion.div variants={fadeInUpItem} className="hidden md:flex bg-[#e6e8ee] rounded-full overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-5 py-2 rounded-full text-[#050505] transition-colors hover:bg-gray-200 cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "16px" }}
            >
              Contactos
            </button>
            <button
              type="button"
              onClick={handleProjetosClick}
              className="px-6 py-2 rounded-full bg-[#3a2735] text-[#e6e8ee] transition-colors hover:bg-[#4a3745] cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "16px" }}
            >
              Projetos
            </button>
          </div>
        </motion.div>
        {/* Mobile menu button */}
        <motion.div variants={fadeInUpItem} className="md:hidden">
          <button
            className={`p-2 cursor-pointer ${isLightPage ? "text-[#0f0b11]" : "text-white"}`}
            aria-label="Menu"
            onClick={() => setIsMobileOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="absolute inset-x-4 top-4 rounded-3xl bg-[#211322] border border-white/10 px-5 py-5 shadow-[0_28px_80px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setIsMobileOpen(false);
                    navigate("/");
                  }}
                  aria-label="Ir para a página inicial"
                >
                  <img
                    src="/logo.svg"
                    alt="CMVGest Logo"
                    className="h-7 w-auto object-contain"
                  />
                </button>
                <button
                  type="button"
                  className="h-9 w-9 rounded-full border border-white/30 text-white/80 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Fechar menu"
                >
                  <span className="text-lg leading-none">&times;</span>
                </button>
              </div>

              <div className="flex flex-col gap-2 py-2">
                <button
                  type="button"
                  className="w-full text-left rounded-2xl px-4 py-3 bg-white/5 text-white text-sm font-medium cursor-pointer active:bg-white/10"
                  onClick={handleProjetosClick}
                >
                  Projetos
                </button>
                <button
                  type="button"
                  className="w-full text-left rounded-2xl px-4 py-3 bg-white/5 text-white text-sm font-medium cursor-pointer active:bg-white/10"
                  onClick={() => handleNavigate("concept-section")}
                >
                  Conceito Chave na Mão
                </button>
                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-[#af6693] text-white text-sm font-semibold px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.7)] cursor-pointer active:bg-[#c077a6]"
                  onClick={handleContact}
                >
                  Contactos
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
