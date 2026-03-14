import React from "react";
import { motion } from "framer-motion";
import imgLogoLightPng from "/images/7250b8774e04f49ddd725b63bb8135e0d15b4dc.png";
import { IconFacebook, IconWhatsApp, IconInstagram } from "../../components/icons";
import { viewport, fadeInUpContainer, fadeInUpItem } from "../../lib/motion";
import { useRouter } from "../../router";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <motion.footer
      className="relative w-full bg-[#3a2735] py-12 md:py-16 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUpContainer}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-10">
        {/* Logo */}
        <motion.div variants={fadeInUpItem} className="flex items-center gap-2">
          <div className="w-[55px] h-[55px] overflow-hidden flex items-center justify-center">
            <img
              src={imgLogoLightPng}
              alt="CMVGest"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="font-title text-white text-[28px] font-bold">
            CMVGest
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUpItem}
          className="text-center text-[rgba(255,255,255,0.5)] max-w-[540px]"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: "20px", lineHeight: 1.5 }}
        >
          Entre em contacto e descubra como pode avançar hoje para a sua nova casa em Vermil.
        </motion.p>

        {/* Social Media */}
        <motion.div variants={fadeInUpItem} className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61587099887307"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Facebook"
          >
            <IconFacebook fill="#EDEDED" size={22} />
          </a>
          <a
            href="https://api.whatsapp.com/message/LPHGI3ZJULS3G1"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="WhatsApp"
          >
            <IconWhatsApp fill="#EDEDED" size={22} />
          </a>
          <a
            href="https://www.instagram.com/cmvgest/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Instagram"
          >
            <IconInstagram fill="#EDEDED" size={22} />
          </a>
        </motion.div>

        {/* Bottom links */}
        <motion.div variants={fadeInUpItem} className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pt-6 border-t border-white/10 w-full justify-center">
          <button
            type="button"
            onClick={() => navigate("/terms")}
            className="text-white hover:text-white/80 transition-colors cursor-pointer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "18px" }}
          >
            Termos e Condições
          </button>

          <div className="hidden md:block w-px h-6 bg-white/50" />

          <a
            href="tel:964140860"
            className="flex flex-col items-center cursor-pointer"
          >
            <span
              className="text-white underline"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "18px" }}
            >
              (+351) 964 140 860
            </span>
            <span className="text-[rgba(255,255,255,0.2)] text-[11px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              chamada para rede móvel nacional
            </span>
          </a>

          <div className="hidden md:block w-px h-6 bg-white/50" />

          <button
            type="button"
            onClick={() => navigate("/privacy")}
            className="text-white hover:text-white/80 transition-colors cursor-pointer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: "18px" }}
          >
            Política de Privacidade
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
