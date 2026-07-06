import { Radio, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface WhatsAppChannelProps {
  whatsappChannelUrl: string;
}

export default function WhatsAppChannel({ whatsappChannelUrl }: WhatsAppChannelProps) {
  return (
    <section className="py-12 bg-[#0b1120] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-royal-blue-dark/50 to-royal-blue/30 border border-royal-gold/15 p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 hover:border-royal-gold/40 transition-colors"
        >
          {/* Decorative Background Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-royal-gold/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-royal-crimson/5 rounded-full filter blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/35 text-xs font-semibold text-royal-gold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-royal-gold-light" />
              <span>Official Channel Broadcast</span>
            </div>

            <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
              Ikuti Channel WhatsApp Resmi
            </h3>
            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Dapatkan informasi pembaruan tercepat langsung di genggaman Anda. Mulai dari rilis client Minecraft terbaru, event game komunitas, hingga kuis berhadiah.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={whatsappChannelUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-royal-gold text-royal-blue-dark px-8 py-4 rounded-2xl font-bold text-base hover:bg-royal-gold-light shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(243,208,107,0.5)] hover:scale-[1.03] transition-all duration-300 transform active:scale-95 group"
            >
              <Radio className="w-5 h-5" />
              <span>Join Channel</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
