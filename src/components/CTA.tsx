import { motion } from "motion/react";
import { WHATSAPP_CV_URL, WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare, FileCheck2, Radio } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[#0B1F4D] to-[#08173a] py-16 md:py-24 text-white relative overflow-hidden text-center">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF6A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Floating File Icon */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl mb-6 shadow-md"
        >
          <FileCheck2 className="w-7 h-7 text-[#FF6A00]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4 max-w-3xl mx-auto text-white"
        >
          Prêt à faire décoller votre carrière avec un CV professionnel ?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-white/80 text-base sm:text-lg md:text-xl font-light mb-8 max-w-xl mx-auto"
        >
          Contactez-nous sur WhatsApp au +225 01 70 56 11 21 pour commander la rédaction de votre CV sur-mesure.
        </motion.p>

        {/* Primary Foreground Button: Commander mon CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block w-full sm:w-auto relative group mb-4"
        >
          <a
            href={WHATSAPP_CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-lg sm:text-xl md:text-2xl py-5 px-10 rounded-[24px] shadow-2xl hover:scale-[1.02] transition-all relative z-10"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
            <span>Commander mon CV sur WhatsApp</span>
          </a>
          {/* Soft glow animation below button */}
          <div className="absolute -inset-1 bg-[#25D366] rounded-[24px] opacity-30 blur animate-pulse pointer-events-none" />
        </motion.div>

        {/* Secondary Background Link for WhatsApp Channel */}
        <div className="mt-2">
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
          >
            <Radio className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Rejoindre aussi la chaîne d'alertes WhatsApp</span>
          </a>
        </div>

        {/* Secondary Trust indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 font-sans text-white/60 text-xs sm:text-sm flex items-center justify-center gap-1.5"
        >
          🔒 Processus 100% gratuit et sécurisé.
        </motion.p>
      </div>
    </section>
  );
}


