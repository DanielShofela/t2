import { motion } from "motion/react";
import { WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare, BellRing } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[#FF6A00] to-[#e05d00] py-16 md:py-24 text-white relative overflow-hidden text-center">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Floating Bell Icon to convey urgency */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, repeatDelay: 1 }}
          className="inline-flex items-center justify-center w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl mb-6 shadow-md"
        >
          <BellRing className="w-7 h-7 text-white" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4 max-w-3xl mx-auto text-white"
        >
          Votre prochaine opportunité est peut-être disponible aujourd'hui.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-white/90 text-base sm:text-lg md:text-xl font-light mb-10 max-w-xl mx-auto"
        >
          Rejoignez gratuitement notre chaîne WhatsApp.
        </motion.p>

        {/* Extra Large Pulsating Button - Clean Minimalism style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block w-full sm:w-auto relative group"
        >
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-sans font-bold text-lg sm:text-xl md:text-2xl py-5 px-10 rounded-[24px] shadow-2xl hover:scale-[1.02] transition-all relative z-10"
          >
            <span>📲</span>
            <span>Rejoindre la chaîne WhatsApp</span>
            <MessageSquare className="w-5 h-5 ml-1 fill-current" />
          </a>
          {/* Soft glow animation below button */}
          <div className="absolute -inset-1 bg-[#25D366] rounded-[24px] opacity-30 blur animate-pulse pointer-events-none"></div>
        </motion.div>

        {/* Secondary Trust indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 font-sans text-white/80 text-xs sm:text-sm flex items-center justify-center gap-1.5"
        >
          🔒 Rejoindre est 100% anonyme. Vos coordonnées ne sont pas partagées.
        </motion.p>
      </div>
    </section>
  );
}

