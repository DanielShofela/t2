import { motion } from "motion/react";
import { BRAND_INFO, WHATSAPP_CV_URL, WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare, ShieldCheck, Zap, ArrowRight, FileText, UserCheck, Radio } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0B1F4D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF1E7] text-[#FF6A00] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 shadow-xs border border-[#FFF1E7]"
            >
              <UserCheck className="w-3.5 h-3.5 mr-2 text-[#FF6A00]" /> CV à 3 000 F • Lettre à 2 000 F • Pack Duo à 4 500 F
            </motion.div>

            {/* Main Heading focused on CV creation service */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-4 max-w-3xl text-[#0B1F4D] tracking-tight"
            >
              Obtenez un CV Professionnel & Percutant{" "}
              <span className="text-[#FF6A00]">conçu pour décrocher des entretiens.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-gray-600 text-base sm:text-lg md:text-lg max-w-2xl mb-8 font-light leading-relaxed"
            >
              Commandez votre CV sur-mesure en échangeant directement sur WhatsApp. Nos spécialistes rédigent, valorisent vos compétences et conçoivent un modèle moderne adapté aux exigences des recuteurs.
            </motion.p>

            {/* FOREGROUND: Main Primary Button for Ordering a CV */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto mb-4 relative group"
            >
              <a
                href={WHATSAPP_CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 sm:px-10 py-4.5 sm:py-5 rounded-[24px] font-bold text-lg sm:text-xl shadow-xl shadow-green-200/60 hover:scale-[1.02] transition-all relative z-10"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span>Commander mon CV sur WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-1 animate-bounce-horizontal" />
              </a>
              {/* Soft glow animation below button */}
              <div className="absolute -inset-1 bg-[#25D366] rounded-[24px] opacity-25 blur animate-pulse pointer-events-none" />
            </motion.div>

            {/* BACKGROUND: Secondary Compact Link for WhatsApp Channel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-[#0B1F4D] transition-colors py-1 px-3 rounded-lg hover:bg-gray-50"
              >
                <Radio className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ou rejoindre notre chaîne d'alertes offres d'emploi (Secondaire)</span>
                <span className="text-[#FF6A00] font-bold">→</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]/70 bg-slate-50 border border-gray-100 rounded-full px-3.5 py-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Traitement Confidentiel & Rapide</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]/70 bg-slate-50 border border-gray-100 rounded-full px-3.5 py-1.5">
                <Zap className="w-4 h-4 text-[#FF6A00]" />
                <span>Mise en relation sous 24h-48h</span>
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
                  alt="2NG Groupe Dépôt de CV"
                  className="w-full h-full object-cover rounded-[24px]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/recruitmentcv/800/600";
                  }}
                />
              </div>

              {/* Float Card Indicator for CV Creation */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg p-3 rounded-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#0B1F4D]">Création de CV Pro</span>
                  <span className="text-[10px] text-gray-500">Contact direct +225 05 74 27 88 18</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


