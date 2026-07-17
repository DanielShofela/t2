import { BRAND_INFO } from "../data";
import { Facebook, MessageSquare, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-100 py-12 md:py-16 text-[#0B1F4D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:items-start">
          {/* Logo, name, and tagline */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left gap-4">
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

          {/* Social Links column */}
          <div className="md:col-span-6 flex flex-col items-center md:items-end gap-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Liens utiles
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-gray-200 font-sans font-medium text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all text-[#0B1F4D]"
              >
                <Facebook className="w-4 h-4 text-blue-600 fill-current" />
                <span>Facebook</span>
              </a>

              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-gray-200 font-sans font-medium text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all text-[#0B1F4D]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" strokeWidth={1} />
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-gray-200 font-sans font-medium text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all text-[#0B1F4D]"
              >
                <Globe className="w-4 h-4 text-[#FF6A00]" />
                <span>Site web</span>
              </a>
            </div>
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

