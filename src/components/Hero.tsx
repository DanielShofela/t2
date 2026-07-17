import { motion } from "motion/react";
import { BRAND_INFO, WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      {/* Background soft ambient lights - Clean Minimalism style */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0B1F4D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge - Clean Minimalism Style */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF1E7] text-[#FF6A00] text-[10px] font-bold tracking-widest uppercase mb-6 shadow-xs border border-[#FFF1E7]"
            >
              <span className="mr-2">📢</span> Nouvelles offres publiées chaque jour
            </motion.div>

            {/* Main Heading - Clean Minimalism font weights and style */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-4 max-w-3xl text-[#0B1F4D] tracking-tight"
            >
              Recevez les nouvelles offres d'emploi{" "}
              <span className="text-[#FF6A00]">directement sur WhatsApp.</span>
            </motion.h1>

            {/* Subtitle - Clean Minimalism style */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-gray-500 text-base sm:text-lg md:text-lg max-w-2xl mb-8 font-light leading-relaxed"
            >
              Rejoignez gratuitement la chaîne officielle de 2NG Groupe Entreprise et soyez informé dès la publication des nouvelles offres d'emploi, stages et opportunités.
            </motion.p>

            {/* Pulsating CTA Button - Clean Minimalism style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto mb-8 relative group"
            >
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 sm:px-10 py-4.5 sm:py-5 rounded-[24px] font-bold text-lg sm:text-xl shadow-lg shadow-green-200/50 hover:scale-[1.02] transition-all relative z-10"
              >
                <span className="text-xl sm:text-2xl">📲</span>
                <span>Rejoindre la chaîne WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-1 animate-bounce-horizontal" />
              </a>
              {/* Soft glow animation below button */}
              <div className="absolute -inset-1 bg-[#25D366] rounded-[24px] opacity-20 blur animate-pulse pointer-events-none"></div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]/70 bg-slate-50 border border-gray-100 rounded-full px-3.5 py-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Chaîne Officielle & Vérifiée</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]/70 bg-slate-50 border border-gray-100 rounded-full px-3.5 py-1.5">
                <Zap className="w-4 h-4 text-[#FF6A00]" />
                <span>Gratuit & Instantané</span>
              </div>
            </motion.div>
          </div>

          {/* Hero visual column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative behind card shadows */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF6A00] to-[#0B1F4D] rounded-[32px] blur-2xl opacity-10" />
              
              <div className="relative bg-white border border-gray-100 p-3 sm:p-4 rounded-[32px] shadow-2xl overflow-hidden aspect-[16/11] flex items-center justify-center">
                <img
                  src={BRAND_INFO.heroImageUrl}
                  alt="2NG Groupe WhatsApp Channel Preview"
                  className="w-full h-full object-cover rounded-[24px]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/whatsappchannel/800/600";
                  }}
                />
              </div>

              {/* Float Card Indicator for WhatsApp */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg p-3 rounded-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#0B1F4D]">Inscriptions</span>
                  <span className="text-[10px] text-gray-500">Mises à jour instantanées</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

