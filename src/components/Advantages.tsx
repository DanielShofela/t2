import { motion } from "motion/react";
import { ADVANTAGES } from "../data";

// Helper to return the correct emoji for each advantage to fit the Clean Minimalism style
function getBenefitEmoji(iconName: string): string {
  switch (iconName) {
    case "Briefcase": return "📄";
    case "GraduationCap": return "🎓";
    case "Zap": return "🚀";
    case "FileText": return "📝";
    case "Mic": return "🎤";
    case "Bell": return "🔔";
    default: return "💡";
  }
}

export default function Advantages() {
  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-20 border-t border-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title - Clean Minimalism Style */}
        <div className="mb-10 text-left">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#FF6A00] mb-4 flex items-center">
            <span className="w-8 h-[2px] bg-[#FF6A00] mr-3 rounded-full"></span>
            Pourquoi rejoindre notre chaîne ?
          </h2>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F4D] tracking-tight">
            Des avantages exclusifs pour votre carrière
          </h3>
        </div>

        {/* 6 Advantages Cards Grid - Clean Minimalism styled cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {ADVANTAGES.map((advantage) => (
            <motion.div
              key={advantage.id}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 25px -5px rgba(11, 31, 77, 0.06)",
                borderColor: "rgba(255, 106, 0, 0.2)"
              }}
              className="bg-white border border-gray-100 p-5 rounded-[20px] shadow-xs transition-all duration-300 flex flex-col text-left group"
            >
              {/* Clean Minimalism Emoji Badge */}
              <div className="text-2xl mb-3.5 select-none transition-transform duration-300 group-hover:scale-110 origin-left">
                {getBenefitEmoji(advantage.iconName)}
              </div>

              {/* Title & Description with light gray styles */}
              <h4 className="font-display font-bold text-base text-[#0B1F4D] mb-1.5 group-hover:text-[#FF6A00] transition-colors duration-300">
                {advantage.title}
              </h4>
              <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

