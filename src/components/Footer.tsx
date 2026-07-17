import { BRAND_INFO } from "../data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-100 py-12 md:py-16 text-[#0B1F4D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Logo, name, and tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0B1F4D] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-white font-display font-black text-lg italic">2NG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-tight text-[#0B1F4D] text-base leading-none">
                  GROUPE ENTREPRISE
                </span>
                <span className="text-[9px] text-[#FF6A00] font-sans tracking-widest uppercase font-bold mt-0.5">
                  Chaîne Officielle
                </span>
              </div>
            </div>
            
            <p className="font-sans text-gray-500 text-sm max-w-sm">
              {BRAND_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-gray-200 my-8" />

        {/* Legal notice and Scroll to top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-400 text-center sm:text-left">
            © {currentYear} 2NG Groupe Entreprise. Tous droits réservés. Page d'atterrissage optimisée pour la conversion.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-gray-500 hover:text-[#0B1F4D] cursor-pointer transition-colors"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

