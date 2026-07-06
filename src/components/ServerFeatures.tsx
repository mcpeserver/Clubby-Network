import { motion } from "motion/react";
import { 
  Sparkles, 
  Box, 
  Dices, 
  Users, 
  Skull, 
  Briefcase, 
  Home, 
  Flame, 
  Compass, 
  Swords, 
  Trophy, 
  Gift, 
  ShoppingBag, 
  Tags, 
  Award, 
  Zap,
  Globe,
  PlusCircle
} from "lucide-react";

export default function ServerFeatures() {
  const features = [
    { name: "Custom Enchant", desc: "Sihir khusus legendaris untuk memperkuat armor & senjata Anda.", icon: Sparkles },
    { name: "Crates", desc: "Buka kotak misterius berpola magis dengan reward luar biasa.", icon: Box },
    { name: "Gacha", desc: "Uji keberuntungan kerajaan Anda untuk memenangkan item langka.", icon: Dices },
    { name: "Teams", desc: "Bentuk klan atau faksi bersama kawan untuk menguasai wilayah.", icon: Users },
    { name: "Mobs Spawning", desc: "Sistem monster liar menantang yang siap menguji pertahanan Anda.", icon: Skull },
    { name: "Jobs", desc: "Pilih profesi, bekerja, kumpulkan koin, dan kembangkan karir.", icon: Briefcase },
    { name: "Lobby", desc: "Lobby Hub megah berasitektur kastil abad pertengahan yang indah.", icon: Home },
    { name: "Nether", desc: "Jelajahi dimensi neraka vulkanis yang penuh marabahaya & harta.", icon: Flame },
    { name: "The End", desc: "Kalahkan Ender Dragon dan taklukkan kota dimensi akhir.", icon: Compass },
    { name: "PvP", desc: "Arena pertarungan gladiator untuk membuktikan siapa ksatria terkuat.", icon: Swords },
    { name: "Ranks", desc: "Tingkatkan kedudukan sosial kerajaan Anda dengan rank istimewa.", icon: Trophy },
    { name: "Redeem Code", desc: "Klaim kode promosi eksklusif untuk mendapatkan bonus berkala.", icon: Gift },
    { name: "Shops", desc: "Sistem pasar ekonomi yang teratur untuk jual beli item server.", icon: ShoppingBag },
    { name: "Quests", desc: "Jalankan misi harian dari NPC untuk koin & poin reputasi.", icon: Award },
    { name: "Tags", desc: "Gelar gelar visual unik (tags) di samping nama karakter Anda.", icon: Tags },
    { name: "Vote Rewards", desc: "Berikan suara untuk server dan dapatkan kunci loot premium gratis.", icon: Zap },
    { name: "Warps", desc: "Gerbang teleportasi instan ke berbagai penjuru kota & wilayah.", icon: Globe },
    { name: "And so much more", desc: "Temukan ratusan kejutan tersembunyi lainnya di dalam game!", icon: PlusCircle },
  ];

  return (
    <section id="features" className="py-24 bg-royal-blue border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-crimson/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Kekayaan Fitur Kerajaan</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
            Fitur Utama <span className="text-royal-gold-light">Clubby Network</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Rasakan petualangan survival multiplayer sesungguhnya yang diperkaya dengan sistem fitur paling komprehensif, menyenangkan, dan seimbang.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.04, 0.4) }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-royal-blue-surface/40 border border-royal-gold/10 hover:border-royal-gold/35 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(212,175,55,0.06)] cursor-default overflow-hidden"
            >
              {/* Subtle light glow on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-royal-gold/5 rounded-full group-hover:scale-150 transition-all duration-500 blur-xl" />

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-royal-blue-dark border border-royal-gold/15 text-royal-gold group-hover:text-royal-gold-light group-hover:border-royal-gold/40 group-hover:bg-royal-crimson/10 transition-all duration-300 shrink-0">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-white mb-2 tracking-wide group-hover:text-royal-gold-light transition-colors">
                    {feat.name}
                  </h3>
                  <p className="font-sans text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
