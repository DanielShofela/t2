import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { motion } from "motion/react";

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-[#FF6A00]/20 selection:text-[#0B1F4D]"
    >
      {/* Top sticky header */}
      <Header />

      <main>
        {/* Hero Banner with Pulsating Primary CTA */}
        <Hero />

        {/* 6 Grid Advantage Cards */}
        <Advantages />

        {/* Dark Blue Confidence/Trust and statistics section */}
        <Trust />

        {/* High-impact Orange CTA Section */}
        <CTA />
      </main>

      {/* Footer with social links and branding */}
      <Footer />

      {/* Mobile-first Floating Conversion Assistant */}
      <FloatingCTA />
    </motion.div>
  );
}

