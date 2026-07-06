import { motion } from "motion/react";
import { Users, Download, ShieldCheck } from "lucide-react";
import heroBg from "../assets/images/minecraft_landscape_1783351216447.jpg";
import heroSide from "../assets/images/minecraft_render_1783351232559.jpg";

interface HeroSectionProps {
  communityGroupUrl: string;
}

export default function HeroSection({ communityGroupUrl }: HeroSectionProps) {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-120px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Minecraft Landscape Background"
          className="w-full h-full object-cover object-center scale-105 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/95 via-royal-blue-dark/85 to-[#0b1120] z-10" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/10 rounded-full filter blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-crimson/15 rounded-full filter blur-[120px] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Side: Text and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-royal-blue-dark/80 border border-royal-gold/30 text-xs font-semibold text-royal-gold mb-6 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Clubby Network Portal</span>
          </div>

          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-wider leading-tight mb-8">
            Clubby Network
          </h1>

          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-xl mb-10 leading-relaxed font-light">
            Platform portal resmi Clubby Network & Club Minecraft Indonesia. Jelajahi petualangan legendaris multiplayer dengan server berkualitas premium, bebas lag, dan komunitas terbaik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button
              onClick={() => handleScrollToSection("#about-clubby")}
              className="flex items-center justify-center gap-2 bg-royal-crimson border border-royal-crimson/50 text-white hover:bg-royal-crimson-dark px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[0_0_15px_rgba(122,30,44,0.3)] hover:shadow-[0_0_25px_rgba(122,30,44,0.5)] transition-all duration-350 transform hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <span>Join Server</span>
            </button>

            <a
              href={communityGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-royal-gold text-royal-blue-dark hover:bg-royal-gold-light px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(243,208,107,0.5)] transition-all duration-350 transform hover:scale-[1.03] active:scale-95 group cursor-pointer"
            >
              <Users className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Join Community</span>
            </a>
            
            <button
              onClick={() => handleScrollToSection("#download")}
              className="flex items-center justify-center gap-2 bg-royal-blue-surface/80 border border-royal-gold/20 text-white hover:text-royal-gold-light hover:border-royal-gold/50 px-6 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-md transition-all duration-350 transform hover:scale-[1.03] active:scale-95 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Minecraft</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Floating Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-[32px] p-2 bg-gradient-to-tr from-royal-gold/35 via-transparent to-royal-crimson/25 border border-white/5 shadow-2xl backdrop-blur-sm"
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden relative border border-white/10 shadow-inner">
              <img
                src={heroSide}
                alt="Minecraft Hero Illustration"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-royal-blue-dark to-transparent" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
