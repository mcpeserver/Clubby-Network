import { BookOpen, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export default function AboutCommunity() {
  return (
    <section id="about" className="py-20 bg-[#0b1120] border-t border-royal-gold/10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/30 text-xs font-semibold text-royal-gold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Club Minecraft Indonesia</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-white tracking-wider mb-4">
            Mengenal Komunitas Kami
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl bg-[#111827]/40 border border-royal-gold/15 p-8 sm:p-10 backdrop-blur-md relative animate-pulse-slow"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 rounded-full filter blur-2xl pointer-events-none" />

          <div className="space-y-6 text-gray-300 font-sans text-base leading-relaxed text-center sm:text-left">
            <p>
              Di sini kalian dapat bergabung dengan grup Komunitas Club Minecraft Indonesia. Tersedia beberapa grup yang dapat dipilih sesuai kebutuhan kalian masing-masing.
            </p>
            <p>
              Seluruh informasi tautan grup resmi tersedia secara terpusat melalui website ini untuk memastikan seluruh anggota masuk ke saluran komunikasi yang aman dan terverifikasi.
            </p>
            
            {/* Box quote with stylized styling */}
            <div className="mt-8 p-5 rounded-xl bg-slate-950/60 border border-royal-gold/20 text-sm italic text-gray-300 font-sans border-l-4 border-l-royal-gold text-left">
              "Disini kalian bisa bergabung grup komunitas Club Minecraft Indonesia. Terdapat beberapa grup yang tersedia, yang penting info asli grupnya ada disini bukan kaleng-kaleng ya ok! 🛡️"
            </div>

            <div className="pt-6 border-t border-royal-gold/10 flex items-start gap-3 text-xs text-gray-400 text-left">
              <AlertTriangle className="w-4 h-4 text-royal-gold shrink-0 mt-0.5" />
              <span>
                Harap berhati-hati terhadap pihak tidak bertanggung jawab yang menyamar atas nama admin Club Minecraft Indonesia. Link resmi yang terjamin aman hanya ada di domain resmi ini.
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
