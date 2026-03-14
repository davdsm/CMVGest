import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./homepage/components/Navbar";
import { Footer } from "./homepage/components/Footer";
import { ContactModal } from "./homepage/components/ContactModal";

type LayoutProps = {
  children?: React.ReactNode;
  routeKey?: string;
};

export function Layout({ children, routeKey }: LayoutProps) {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const content = React.isValidElement(children)
    ? React.cloneElement(children, { onOpenContact: openContact })
    : children;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const scrollToId = typeof window !== "undefined" ? sessionStorage.getItem("scrollTo") : null;
    const timeout = window.setTimeout(() => {
      if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        sessionStorage.removeItem("scrollTo");
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 400);
    return () => window.clearTimeout(timeout);
  }, [routeKey]);

  return (
    <div className="w-full min-h-screen bg-[#3a2735] overflow-x-hidden">
      <Navbar onOpenContact={openContact} onNavigate={scrollToSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={routeKey}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ContactModal open={isContactOpen} onClose={closeContact} />
    </div>
  );
}

