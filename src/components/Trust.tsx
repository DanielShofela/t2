import { motion } from "motion/react";
import { STATISTICS } from "../data";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Trust() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Statistics Card Container in Clean Minimalism Style */}
        <div className="bg-[#0B1F4D] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Decorative ambient blurred circles */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6A00]/10 rounded-full -ml-16 -mb-16 blur-3xl pointer-events-none" />

          {/* Title Header inside the stats card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">
                  Fiabilité & Impact
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                2NG en chiffres
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-sm font-light">
              Des indicateurs réels mis à jour en direct pour prouver notre engagement envers votre réussite professionnelle.
            </p>
          </div>

          {/* 4 Statistics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 relative z-10">
            {STATISTICS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col text-left group"
              >
                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl font-black text-[#FF6A00] tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left duration-300">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-bold leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom disclaimer */}
          <div className="mt-10 pt-6 border-t border-white/10 text-[10px] text-white/40 italic flex items-center gap-2 relative z-10">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Les chiffres sont mis à jour régulièrement.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

