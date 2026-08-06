import { motion } from "motion/react";
import { PRICING_PACKAGES } from "../data";
import { Check, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="tarifs" className="py-16 md:py-24 bg-slate-50/80 border-y border-gray-100 relative">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1E7] text-[#FF6A00] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tarifs Clairs & Transparents</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-[#0B1F4D] tracking-tight mb-4"
          >
            Choisissez la formule qui propulsera votre candidature
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-sans text-base sm:text-lg font-light"
          >
            Commandez directement sur WhatsApp et recevez vos documents professionnels sous 24h à 48h.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? "bg-[#0B1F4D] text-white shadow-2xl ring-2 ring-[#FF6A00] md:-translate-y-2"
                    : "bg-white text-[#0B1F4D] border border-gray-200/80 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6A00] text-white text-[11px] font-bold tracking-wider uppercase py-1 px-4 rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Card Title & Tagline */}
                  <div className="mb-6 text-left">
                    <h3 className={`font-display font-bold text-xl sm:text-2xl mb-2 ${pkg.isPopular ? "text-white" : "text-[#0B1F4D]"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${pkg.isPopular ? "text-slate-300" : "text-gray-500"}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-100/20 text-left">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display font-black text-3xl sm:text-4xl ${pkg.isPopular ? "text-white" : "text-[#0B1F4D]"}`}>
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm sm:text-base line-through text-slate-400 font-semibold">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] uppercase tracking-wider font-semibold block mt-1 ${pkg.isPopular ? "text-[#25D366]" : "text-gray-400"}`}>
                      Paiement à la commande sur WhatsApp
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 text-left">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${pkg.isPopular ? "bg-[#25D366] text-white" : "bg-emerald-100 text-emerald-700"}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={pkg.isPopular ? "text-slate-200" : "text-gray-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Order Button */}
                <div>
                  <a
                    href={pkg.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-5 rounded-2xl transition-all shadow-md active:scale-98 ${
                      pkg.isPopular
                        ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-green-900/40"
                        : "bg-[#FF6A00] hover:bg-[#e05d00] text-white"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance text below pricing */}
        <div className="mt-12 text-center text-xs text-gray-500 font-medium">
          💡 Vous ne savez pas quel formule choisir ? Contactez-nous au <span className="font-bold text-[#0B1F4D]">+225 05 74 27 88 18</span> pour un conseil gratuit.
        </div>
      </div>
    </section>
  );
}
