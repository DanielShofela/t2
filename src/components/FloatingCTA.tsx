import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_CV_URL, WHATSAPP_CHANNEL_URL } from "../data";
import { FileText, MessageSquare, Radio } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 inset-x-4 z-50 md:bottom-6 md:right-6 md:left-auto md:w-[420px] pointer-events-none"
        >
          <div className="bg-[#0B1F4D]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col gap-2.5 pointer-events-auto">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-[#FF6A00] tracking-wider">
                  Création de CV Pro
                </span>
                <span className="text-xs text-white font-medium">
                  Commandez votre CV sur WhatsApp (+225 05 74 27 88 18)
                </span>
              </div>

              {/* Primary Foreground Button */}
              <a
                href={WHATSAPP_CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-sans font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Créer mon CV</span>
              </a>
            </div>

            {/* Secondary Compact Channel Link */}
            <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] text-slate-300">
              <span className="text-slate-400">Canal d'alertes offres :</span>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-medium"
              >
                <Radio className="w-3 h-3" />
                <span>Rejoindre la chaîne</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

