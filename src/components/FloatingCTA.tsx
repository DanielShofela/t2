import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_CHANNEL_URL } from "../data";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 400px
      if (window.scrollY > 400) {
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
          className="fixed bottom-4 inset-x-4 z-50 md:bottom-6 md:right-6 md:left-auto md:w-96 pointer-events-none"
        >
          <div className="bg-[#0B1F4D]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 pointer-events-auto">
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold text-[#FF6A00] tracking-wider">
                Offres d'emploi en direct
              </span>
              <span className="text-xs text-white font-medium">
                Rejoignez la chaîne officielle
              </span>
            </div>

            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-xs py-2 px-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Rejoindre</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
