import { motion } from "motion/react";
import { WHATSAPP_CV_URL, WHATSAPP_CHANNEL_URL } from "../data";
import { FileText, Radio } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0B1F4D] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-white font-display font-black text-lg italic">2NG</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black tracking-tight text-[#0B1F4D] text-[#0B1F4D] text-lg sm:text-xl leading-none">
              GROUPE ENTREPRISE
            </span>
            <span className="text-[9px] text-[#FF6A00] font-sans tracking-widest uppercase font-bold mt-0.5">
              Service de Création de CV
            </span>
          </div>
        </div>

        {/* Secondary compact WhatsApp channel link in header */}
        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#0B1F4D] bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full border border-gray-100 transition-colors"
          >
            <Radio className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chaîne d'alertes</span>
          </a>
        </div>

        {/* Primary Foreground CTA Header Button: Order CV */}
        <motion.a
          href={WHATSAPP_CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-sans font-bold text-xs sm:text-sm py-2.5 px-4 sm:px-5 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <FileText className="w-4 h-4" />
          <span>Créer mon CV Pro</span>
        </motion.a>
      </div>
    </header>
  );
}


