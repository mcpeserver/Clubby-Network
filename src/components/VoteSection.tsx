import { motion } from "motion/react";
import { Vote, Star, ExternalLink, ShieldCheck } from "lucide-react";
import { VOTE_LINKS } from "../constants";

export default function VoteSection() {
  const votes = [
    { name: "Vote Portal I", label: "Vote 1", url: VOTE_LINKS.portal1, desc: "Dukung reputasi kerajaan kami di portal voting utama dan peroleh kunci Lootbox gratis." },
    { name: "Vote Portal II", label: "Vote 2", url: VOTE_LINKS.portal2, desc: "Berikan bintang emas Anda di portal kedua untuk menaikkan peringkat global server." },
    { name: "Vote Portal III", label: "Vote 3", url: VOTE_LINKS.portal3, desc: "Selesaikan vote harian ketiga untuk melipatgandakan koin multiplier Anda." },
  ];

  return (
    <section id="vote" className="py-24 bg-royal-blue border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Ornaments */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-royal-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-crimson/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-4 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Dukung Server Setiap Hari</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
            Berikan Suara <span className="text-royal-gold-light">Vote Server</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Membantu server berkembang sangatlah mudah! Cukup kunjungi tiga portal resmi di bawah ini dan berikan rating positif Anda untuk mengklaim reward instan di dalam game.
          </p>
        </div>

        {/* Votes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {votes.map((vote, idx) => (
            <motion.div
              key={vote.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-royal-blue-surface/40 border border-royal-gold/15 hover:border-royal-gold/45 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.05)] text-center relative"
            >
              {/* Star Icon Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-royal-blue-dark border border-royal-gold/30 flex items-center justify-center text-royal-gold group-hover:text-royal-gold-light group-hover:border-royal-gold transition-all duration-300">
                <Vote className="w-4 h-4" />
              </div>

              <div className="pt-2">
                <h3 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide group-hover:text-royal-gold-light transition-colors">
                  {vote.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                  {vote.desc}
                </p>
              </div>

              <a
                href={vote.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-royal-crimson hover:bg-royal-crimson-dark text-white py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide shadow-md hover:shadow-[0_0_15px_rgba(122,30,44,0.3)] transition-all duration-300 transform active:scale-95 group-hover:scale-[1.02] cursor-pointer"
              >
                <span>Selesaikan {vote.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-5 rounded-2xl bg-royal-blue-surface/20 border border-royal-gold/10 text-center max-w-xl mx-auto flex items-center justify-center gap-2.5 text-xs text-gray-400 font-sans">
          <ShieldCheck className="w-4 h-4 text-royal-gold shrink-0" />
          <span>Setiap vote tercatat otomatis secara real-time oleh server menggunakan API Minecraft Vote Listener.</span>
        </div>

      </div>
    </section>
  );
}
