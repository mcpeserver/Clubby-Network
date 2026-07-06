import { Download, Shield } from "lucide-react";
import { motion } from "motion/react";
import { DOWNLOAD_CONFIG } from "../constants";

export default function DownloadMinecraft() {
  const versions = [
    {
      title: `Minecraft ${DOWNLOAD_CONFIG.stable.version}`,
      badge: "Stable Version",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "Versi rilis stabil terbaru dengan perbaikan bug penuh dan performa yang optimal untuk bermain santai.",
      url: DOWNLOAD_CONFIG.stable.url,
      buttonColor: "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]",
    },
    {
      title: `Minecraft ${DOWNLOAD_CONFIG.beta.version}`,
      badge: "Beta Version",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description: "Coba fitur-fitur eksperimental baru yang sedang dikembangkan sebelum rilis publik resmi dimulai.",
      url: DOWNLOAD_CONFIG.beta.url,
      buttonColor: "bg-amber-600 hover:bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]",
    },
  ];

  return (
    <section id="download" className="py-20 bg-[#0b1120] border-t border-royal-gold/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-white tracking-wider mb-4">
            Download Minecraft Client
          </h2>
          <p className="font-sans text-gray-400 max-w-xl mx-auto leading-relaxed">
            Dapatkan berkas instalasi Minecraft gratis untuk perangkat Anda. Tersedia versi rilis stabil (Stable) maupun versi pengujian (Beta).
          </p>
        </div>

        {/* Versions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {versions.map((ver, idx) => (
            <motion.div
              key={ver.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-2xl bg-[#111827]/60 border border-royal-gold/15 p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.05)] transition-all duration-350 ${
                idx === 0 ? "hover:border-emerald-500/30" : "hover:border-royal-gold/30"
              }`}
            >
              {/* Corner Glow decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full filter blur-2xl pointer-events-none ${
                idx === 0 ? "bg-emerald-500/5" : "bg-royal-gold/5"
              }`} />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="font-poppins font-bold text-2xl text-white tracking-tight">
                    {ver.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${ver.badgeColor}`}>
                    {ver.badge}
                  </span>
                </div>

                <p className="font-sans text-gray-300 text-sm mb-8 leading-relaxed">
                  {ver.description}
                </p>
              </div>

              <div className="border-t border-[#1e293b]/40 pt-6 mt-4 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Shield className="w-3.5 h-3.5 text-royal-gold" />
                  <span>Verified Safe Link</span>
                </div>

                <a
                  href={ver.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${ver.buttonColor}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
