import { motion } from "motion/react";
import { BRAND_INFO, WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo and Brand Name - Clean Minimalism Style */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0B1F4D] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-white font-display font-black text-lg italic">2NG</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black tracking-tight text-[#0B1F4D] text-lg sm:text-xl leading-none">
              GROUPE ENTREPRISE
            </span>
            <span className="text-[9px] text-[#FF6A00] font-sans tracking-widest uppercase font-bold mt-0.5">
              Chaîne Officielle
            </span>
          </div>
        </div>

        {/* Header content matches minimalism, space reserved */}
        <div className="hidden md:block flex-1" />

        {/* Dynamic CTA Header Button */}
        <motion.a
          href={WHATSAPP_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>Rejoindre</span>
        </motion.a>
      </div>
    </header>
  );
}

