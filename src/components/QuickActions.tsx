import { MouseEvent } from "react";
import { Download, Users, Radio, Coins } from "lucide-react";
import { motion } from "motion/react";

interface QuickActionsProps {
  whatsappChannelUrl: string;
  donateUrl: string;
}

export default function QuickActions({ whatsappChannelUrl, donateUrl }: QuickActionsProps) {
  const actions = [
    {
      title: "Download",
      description: "Ambil client Minecraft Stable & Beta gratis di sini.",
      icon: Download,
      color: "text-royal-gold border-royal-gold/20 hover:border-royal-gold/50",
      target: "#download",
      external: false,
      hoverBg: "group-hover:bg-royal-gold/10 group-hover:text-royal-gold-light",
    },
    {
      title: "Community",
      description: "Daftar grup WhatsApp resmi & obrolan sesama anggota.",
      icon: Users,
      color: "text-royal-crimson border-royal-crimson/20 hover:border-royal-crimson/50",
      target: "#groups",
      external: false,
      hoverBg: "group-hover:bg-royal-crimson/10 group-hover:text-red-400",
    },
    {
      title: "Channel",
      description: "Ikuti Saluran WhatsApp untuk rilis update & info terbaru.",
      icon: Radio,
      color: "text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50",
      target: whatsappChannelUrl,
      external: true,
      hoverBg: "group-hover:bg-emerald-500/10 group-hover:text-emerald-300",
    },
    {
      title: "Donate",
      description: "Dukung server dan komunitas agar tetap aktif berkembang.",
      icon: Coins,
      color: "text-amber-400 border-amber-500/20 hover:border-amber-500/50",
      target: donateUrl,
      external: true,
      hoverBg: "group-hover:bg-amber-500/10 group-hover:text-amber-300",
    },
  ];

  const handleClick = (e: MouseEvent, href: string, isExternal: boolean) => {
    if (!isExternal) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-12 bg-[#0b1120] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, idx) => (
            <motion.a
              key={action.title}
              href={action.target}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              onClick={(e) => handleClick(e, action.target, action.external)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`block p-6 rounded-2xl bg-[#111827]/40 border ${action.color} backdrop-blur-md shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] transition-all duration-350 group cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-slate-900/80 border border-white/5 text-inherit ${action.hoverBg} transition-all duration-300`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-white group-hover:text-royal-gold-light transition-colors tracking-wide">
                  {action.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
