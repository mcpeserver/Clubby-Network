import { motion } from "motion/react";
import { Heart, Coins, ArrowUpRight, HelpCircle } from "lucide-react";
import { DONATE_URL } from "../constants";

export default function DonationSection() {
  const saweriaUrl = DONATE_URL;

  return (
    <section id="donate" className="py-24 bg-royal-blue-dark border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-crimson/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-48 h-48 bg-royal-gold/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-6 backdrop-blur-md">
          <Heart className="w-3.5 h-3.5 text-royal-gold-light fill-royal-gold/20" />
          <span>Dukungan Operasional Server</span>
        </div>

        {/* Heading */}
        <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
          Donasi <span className="text-royal-gold-light">Saweria</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-8" />

        {/* Luxury Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-royal-blue-surface/40 border border-royal-gold/15 p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden text-center hover:border-royal-gold/30 transition-colors"
        >
          {/* Top Decorative Border Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-gold via-royal-gold-light to-transparent" />
          
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            {/* Chest / Coin Icon Graphic */}
            <div className="p-4.5 rounded-2xl bg-royal-blue-dark border border-royal-gold/25 text-royal-gold mb-6 shadow-lg shadow-royal-gold/5">
              <Coins className="w-8 h-8 text-royal-gold-light" />
            </div>

            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Bagi para petualang yang ingin memberikan dukungan sukarela untuk keberlangsungan server Clubby Network, Anda dapat menyalurkan donasi langsung melalui platform resmi <span className="text-royal-gold font-semibold">Saweria</span>. Seluruh kontribusi Anda akan sangat membantu pembiayaan infrastruktur hosting server agar tetap menyala 24/7 bebas lag.
            </p>

            <div className="w-full max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left text-xs text-gray-400 font-sans border-t border-b border-royal-gold/10 py-6">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <span>Membantu biaya upgrade RAM & CPU Server</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <span>Membantu pemeliharaan domain website</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <span>Membayar lisensi plugin & proteksi DDoS</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <span>Dukungan langsung operasional developer</span>
              </div>
            </div>

            {/* SAW_BUTTON */}
            <a
              href={saweriaUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-royal-gold hover:bg-royal-gold-light text-royal-blue-dark py-4 px-10 rounded-2xl font-bold text-base shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(243,208,107,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 group cursor-pointer"
            >
              <span>Salurkan Donasi Melalui Saweria</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Quick Warning */}
            <div className="flex items-center gap-1.5 mt-6 text-[11px] text-gray-500 justify-center">
              <HelpCircle className="w-3.5 h-3.5 text-royal-gold/60" />
              <span>Harap teliti nama tujuan penerima pada platform Saweria sebelum menyetujui transaksi.</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
