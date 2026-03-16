import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildAdminEmailHtml, buildClientEmailHtml } from "../emailTemplates";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null as string | null);
  const [isHuman, setIsHuman] = React.useState(false);
  const [createdAt] = React.useState(() => Date.now());

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot field: real users never see/touch this
    const website = String(formData.get("website") ?? "");
    if (website.trim().length > 0) {
      setError("Não foi possível validar o formulário. Por favor tente novamente.");
      setIsSubmitting(false);
      return;
    }

    // Simple human check and minimal time on screen (basic anti-bot)
    if (!isHuman) {
      setError("Antes de enviar, confirme que é humano.");
      setIsSubmitting(false);
      return;
    }

    if (Date.now() - createdAt < 3000) {
      setError("Por favor aguarde um momento antes de enviar a sua mensagem.");
      setIsSubmitting(false);
      return;
    }

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    const finalSubject =
      subject && subject.trim().length > 0
        ? subject
        : "Novo contacto através do site CMVGest";

    const adminHtml = buildAdminEmailHtml({
      name,
      email,
      phone: phone || undefined,
      subject: finalSubject,
      message: message || undefined,
    });

    const clientHtml = buildClientEmailHtml({
      name,
      email,
      phone: phone || undefined,
      subject: finalSubject,
      message: message || undefined,
    });

    try {
      const response = await fetch("https://api.davdsm.pt/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          davdsmKey: "d41d8cd98f00b204e9800998ecf8427e",
          replyTo: email,
        },
        body: JSON.stringify({
          sender: "CMVGest",
          senderEmail: "geral@davdsm.pt",
          receiver: {
            email: "geral@cmvgest.com",
            name: "Administração CMVGest",
          },
          subject: finalSubject,
          message: adminHtml,
          isHtml: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send admin email");
      }

      const clientResponse = await fetch("https://api.davdsm.pt/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          davdsmKey: "d41d8cd98f00b204e9800998ecf8427e",
        },
        body: JSON.stringify({
          sender: "CMVGest",
          senderEmail: "geral@cmvgest.com",
          receiver: {
            email,
            name: name || email,
          },
          subject: "Recebemos o seu contacto · CMVGest",
          message: clientHtml,
          isHtml: true,
        }),
      });

      if (!clientResponse.ok) {
        throw new Error("Failed to send client email");
      }

      form.reset();
      setSubmitted(true);
      window.setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2600);
    } catch (err) {
      console.error("Erro ao enviar mensagem de contacto:", err);
      setError("Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-sm px-4 pt-6 pb-6 md:pt-0 md:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-[540px] max-h-[90vh] rounded-3xl bg-[#2b1c28] text-white shadow-[0_40px_120px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="absolute -top-32 -right-24 w-72 h-72 rounded-full bg-[#af6693]/20 blur-3xl pointer-events-none" />
            <div className="relative px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <p className="font-title text-sm uppercase tracking-[0.25em] text-white/60">
                    Contactos
                  </p>
                  <h2 className="font-title text-[1.8rem] md:text-[2.2rem] leading-tight mt-1">
                    Fale connosco sobre o seu projeto
                  </h2>
                  <p
                    className="mt-3 text-sm md:text-[15px] text-white/70 max-w-[340px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, lineHeight: 1.5 }}
                  >
                    Deixe os seus dados e entraremos em contacto para esclarecer todas as dúvidas e próximos passos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors cursor-pointer"
                  aria-label="Fechar formulário de contacto"
                >
                  <span className="text-lg leading-none">&times;</span>
                </button>
              </div>

              {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* Honeypot field for bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.18em] text-white/60"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="rounded-xl border border-white/15 bg-[#21141f] px-3.5 py-2.5 text-sm outline-none focus:border-[#af6693] focus:ring-2 focus:ring-[#af6693]/40 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-[0.18em] text-white/60"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border border-white/15 bg-[#21141f] px-3.5 py-2.5 text-sm outline-none focus:border-[#af6693] focus:ring-2 focus:ring-[#af6693]/40 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-[0.18em] text-white/60"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="rounded-xl border border-white/15 bg-[#21141f] px-3.5 py-2.5 text-sm outline-none focus:border-[#af6693] focus:ring-2 focus:ring-[#af6693]/40 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs uppercase tracking-[0.18em] text-white/60"
                    >
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="rounded-xl border border-white/15 bg-[#21141f] px-3.5 py-2.5 text-sm outline-none focus:border-[#af6693] focus:ring-2 focus:ring-[#af6693]/40 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.18em] text-white/60"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="rounded-xl border border-white/15 bg-[#21141f] px-3.5 py-2.5 text-sm outline-none resize-none focus:border-[#af6693] focus:ring-2 focus:ring-[#af6693]/40 transition-all"
                  />
                </div>

                {/* Pretty anti-bot human check */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <p
                    className="text-[11px] text-white/55"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
                  >
                    Para evitar spam automático, ative a confirmação humana antes de enviar.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsHuman((prev) => !prev)}
                    className={`relative inline-flex items-center rounded-full px-4 py-1.5 text-[10px] md:text-[11px] font-medium whitespace-nowrap transition-colors ${
                      isHuman
                        ? "bg-[#af6693] text-white"
                        : "bg-white/5 text-white/70 border border-white/15"
                    }`}
                    aria-pressed={isHuman}
                  >
                    <span
                      className={`mr-1 inline-flex h-3 w-3 items-center justify-center rounded-full border border-current transition-colors ${
                        isHuman ? "bg-white text-[#af6693]" : "bg-transparent"
                      }`}
                    >
                      {isHuman && <span className="h-1.5 w-1.5 rounded-full bg-[#af6693]" />}
                    </span>
                    Sou humano
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-red-300">
                    {error}
                  </p>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-1">
                  <p
                    className="text-[11px] text-white/50 max-w-[260px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, lineHeight: 1.5 }}
                  >
                    Os seus dados são tratados com total confidencialidade e
                    apenas para efeitos de contacto no âmbito do projeto.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-[#af6693] px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:bg-[#c077a6] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "A enviar..." : "Enviar mensagem"}
                  </button>
                </div>
              </form>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-10 md:py-12 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#af6693] bg-gradient-to-br from-[#af6693] to-[#d99ac4] flex items-center justify-center shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                    <span className="text-2xl text-white">✓</span>
                  </div>
                  <div className="text-center max-w-[320px]">
                    <p className="font-title text-lg md:text-xl">
                      Mensagem enviada com sucesso
                    </p>
                    <p
                      className="mt-2 text-sm md:text-[15px] text-white/75"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, lineHeight: 1.6 }}
                    >
                      Obrigado pelo seu contacto. Enviámos um email de confirmação e iremos responder com a máxima brevidade possível.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

