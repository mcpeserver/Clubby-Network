import { MessageSquareCode, ArrowRight, BellRing, Users, Sword } from "lucide-react";
import { motion } from "motion/react";
import { COMMUNITY_LINKS } from "../constants";

export default function CommunityGroups() {
  const groups = [
    {
      title: "Grup Pengumuman",
      sub: "Club Minecraft Indonesia",
      desc: "Saluran utama pengumuman resmi komunitas, info event, dan berita pembaruan penting server.",
      icon: BellRing,
      url: COMMUNITY_LINKS.groups.announcement,
      glowColor: "hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] hover:border-royal-gold/50",
      iconBg: "bg-royal-gold/10 text-royal-gold border-royal-gold/20",
    },
    {
      title: "Club Minecraft Indo 1",
      sub: "Grup Diskusi Utama",
      desc: "Grup diskusi aktif pertama untuk berbagi kreasi, tips, panduan Minecraft, dan mengobrol santai.",
      icon: Users,
      url: COMMUNITY_LINKS.groups.group1,
      glowColor: "hover:shadow-[0_0_25px_rgba(114,28,36,0.18)] hover:border-royal-crimson/50",
      iconBg: "bg-royal-crimson/10 text-red-400 border-royal-crimson/20",
    },
    {
      title: "Club Minecraft Indo 2",
      sub: "Grup Diskusi Cadangan",
      desc: "Grup obrolan kedua bagi seluruh member komunitas. Tempat mencari kawan bermain multiplayer.",
      icon: Users,
      url: COMMUNITY_LINKS.groups.group2,
      glowColor: "hover:shadow-[0_0_25px_rgba(30,94,58,0.18)] hover:border-royal-green/50",
      iconBg: "bg-royal-green/10 text-emerald-400 border-royal-green/20",
    },
    {
      title: "Lets Join SMP",
      sub: "Grup Mabar Server",
      desc: "Grup koordinasi mabar Survival Multiplayer (SMP) Clubby Network. Cari klan, tim, dan bangun base.",
      icon: Sword,
      url: COMMUNITY_LINKS.groups.letsJoinSmp,
      glowColor: "hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] hover:border-royal-gold/50",
      iconBg: "bg-royal-gold/10 text-royal-gold-light border-royal-gold/20",
    },
  ];

  return (
    <section id="groups" className="py-20 bg-[#0b1120] border-t border-royal-gold/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/30 text-xs font-semibold text-royal-gold mb-4">
            <MessageSquareCode className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>WhatsApp Community Groups</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-white tracking-wider mb-4">
            Daftar Grup Komunitas Resmi
          </h2>
          <p className="font-sans text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
            Tersedia beberapa grup WhatsApp resmi yang dapat Anda pilih sesuai kebutuhan. Mari bergabung dan jalin pertemanan baru sesama Minecrafter Indonesia!
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col justify-between p-6 rounded-2xl bg-[#111827]/40 border border-royal-gold/15 backdrop-blur-md transition-all duration-350 ${group.glowColor} group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${group.iconBg}`}>
                    <group.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider font-semibold uppercase">
                    WhatsApp Group
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg text-white mb-1 group-hover:text-royal-gold-light transition-colors">
                  {group.title}
                </h3>
                <span className="text-xs font-medium text-gray-400 block mb-3 font-sans">
                  {group.sub}
                </span>

                <p className="font-sans text-gray-400 text-xs leading-relaxed mb-6">
                  {group.desc}
                </p>
              </div>

              <a
                href={group.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#111827] border border-royal-gold/15 group-hover:bg-royal-gold group-hover:border-royal-gold group-hover:text-royal-blue-dark py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-350 transform active:scale-95"
              >
                <span>Join Group</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
