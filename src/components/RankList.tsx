import { motion } from "motion/react";
import { Trophy, ShoppingBag, ShieldCheck, Crown } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

export default function RankList() {
  const ranks = [
    { name: "VIP", price: "Rp 20.000", badge: "Ksatria", color: "from-blue-500/20 to-blue-900/10" },
    { name: "Veteran", price: "Rp 30.000", badge: "Prajurit", color: "from-teal-500/20 to-teal-900/10" },
    { name: "Legend", price: "Rp 40.000", badge: "Pahlawan", color: "from-indigo-500/20 to-indigo-900/10" },
    { name: "Mythic", price: "Rp 60.000", badge: "Mistik", color: "from-purple-500/20 to-purple-900/10" },
    { name: "Honor", price: "Rp 75.000", badge: "Kehormatan", color: "from-rose-500/20 to-rose-900/10" },
    { name: "Supporter", price: "Rp 100.000", badge: "Penyokong", color: "from-emerald-500/20 to-emerald-900/10" },
    { name: "Saitama", price: "Rp 200.000", badge: "Terkuat", color: "from-royal-crimson/30 to-royal-crimson/10" },
    { name: "Custom Rank", price: "Rp 300.000", badge: "Kaisar", color: "from-royal-gold/30 to-royal-gold/10" },
  ];

  return (
    <section id="ranks" className="py-24 bg-royal-blue-dark border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-royal-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-royal-crimson/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-4 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Hak Istimewa Kerajaan</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
            Daftar Kedudukan <span className="text-royal-gold-light">Ranks</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Dukung eksistensi server dan peroleh kasta sosial tertinggi lengkap dengan hak akses fitur premium, kosmetik eksklusif, serta gelar legendaris!
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ranks.map((rank, idx) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl bg-royal-blue-surface/40 border border-royal-gold/20 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-royal-gold/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]`}
            >
              {/* Royal Ribbon Overlay */}
              <div className="absolute top-0 right-0">
                <div className="bg-royal-gold text-royal-blue-dark font-sans text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-md border-l border-b border-royal-gold-light/40">
                  {rank.badge}
                </div>
              </div>

              {/* Decorative Subtle Color Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-20 pointer-events-none`} />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-royal-gold group-hover:scale-110 transition-transform duration-350 shrink-0" />
                  <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white tracking-wide">
                    {rank.name}
                  </h3>
                </div>

                <div className="w-12 h-0.5 bg-royal-gold/40 mb-6 group-hover:w-full transition-all duration-500" />

                <div className="mb-6">
                  <span className="text-xs text-gray-400 font-sans block mb-1">Investasi Donasi</span>
                  <div className="font-cinzel font-bold text-2xl sm:text-3xl text-royal-gold-light tracking-wide">
                    {rank.price}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs text-gray-300 font-sans">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-royal-gold shrink-0" />
                    <span>Gelar Visual Chat Tag Unik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-royal-gold shrink-0" />
                    <span>Akses Room & Fitur Khusus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-royal-gold shrink-0" />
                    <span>Prioritas Masuk Server Penuh</span>
                  </li>
                </ul>
              </div>

              <a
                href={SOCIAL_LINKS.buyRank}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-royal-gold hover:bg-royal-gold-light text-royal-blue-dark py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 z-10"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli Rank</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Notice */}
        <div className="text-center bg-royal-blue-surface/20 border border-royal-gold/10 rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
            📦 Setelah melakukan donasi rank melalui Web Store resmi, silakan hubungi tim Admin di grup WhatsApp komunitas dengan melampirkan bukti transaksi resmi untuk aktivasi instan.
          </p>
        </div>

      </div>
    </section>
  );
}
