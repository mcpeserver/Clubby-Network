import { useState } from "react";
import { Server, Copy, Check, ShieldCheck, History } from "lucide-react";
import { motion } from "motion/react";
import { SERVER_CONFIG } from "../constants";

export default function AboutClubby() {
  const [copiedIp1, setCopiedIp1] = useState(false);
  const [copiedIp2, setCopiedIp2] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const serverIp1 = SERVER_CONFIG.ip1;
  const serverIp2 = SERVER_CONFIG.ip2;
  const serverPort = SERVER_CONFIG.port;

  const copyToClipboard = (text: string, type: "ip1" | "ip2" | "port") => {
    navigator.clipboard.writeText(text);
    if (type === "ip1") {
      setCopiedIp1(true);
      setTimeout(() => setCopiedIp1(false), 2000);
    } else if (type === "ip2") {
      setCopiedIp2(true);
      setTimeout(() => setCopiedIp2(false), 2000);
    } else {
      setCopiedPort(true);
      setTimeout(() => setCopiedPort(false), 2000);
    }
  };

  return (
    <section id="about-clubby" className="py-24 bg-royal-blue-dark border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-royal-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-crimson/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-4 backdrop-blur-md">
            <History className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Mengenal Server Kami</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
            Tentang <span className="text-royal-gold-light">{SERVER_CONFIG.name}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Didirikan sejak tanggal <span className="text-royal-gold font-semibold">{SERVER_CONFIG.establishedDate}</span>, {SERVER_CONFIG.name} merupakan server Minecraft Bedrock multiplayer terkemuka yang menyajikan pengalaman bermain survival murni yang seru dan interaktif.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* About Description Block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-royal-blue-surface/40 border border-royal-gold/10 p-8 sm:p-10 rounded-3xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-royal-gold/10 text-royal-gold border border-royal-gold/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-white">Komitmen Server</h3>
              </div>
              <p className="font-sans text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                Kami berkomitmen untuk terus menghadirkan ekosistem bermain multiplayer yang adil, stabil, dan ramah bagi seluruh kalangan pemain di Indonesia. Server kami dikonfigurasi dengan optimalisasi performa tinggi demi memastikan petualangan Anda terbebas dari kendala lag.
              </p>
              <p className="font-sans text-gray-300 leading-relaxed text-sm sm:text-base">
                Bergabunglah bersama ratusan petualang lainnya, bangun faksi atau tim impian Anda, jalankan quest menantang, dan kuasai ekonomi kerajaan di {SERVER_CONFIG.name}!
              </p>
            </div>
            
            <div className="pt-6 border-t border-royal-gold/10 mt-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-gray-400 font-mono tracking-wider">
                ESTABLISHED: {SERVER_CONFIG.establishedDate.toUpperCase()}
              </span>
            </div>
          </motion.div>

          {/* Connection Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 bg-royal-blue-surface/40 border border-royal-gold/15 p-8 sm:p-10 rounded-3xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-royal-gold/10 text-royal-gold border border-royal-gold/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-white">Informasi Koneksi</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-mono font-bold">Server Online</span>
                  </div>
                </div>
              </div>

              {/* Server addresses and port */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                      Server IP Utama
                    </span>
                    <span className="text-[10px] text-royal-gold-light font-mono">{serverIp1}</span>
                  </div>
                  <div className="flex items-center justify-between bg-royal-blue-dark/80 border border-royal-gold/10 rounded-2xl p-4">
                    <span className="font-mono text-royal-gold-light text-sm sm:text-base select-all tracking-wide">{serverIp1}</span>
                    <button
                      onClick={() => copyToClipboard(serverIp1, "ip1")}
                      className="p-2.5 rounded-xl bg-royal-blue-surface border border-royal-gold/10 hover:border-royal-gold/30 hover:bg-royal-blue-dark text-gray-400 hover:text-white transition-all cursor-pointer"
                      title="Salin IP Utama"
                    >
                      {copiedIp1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                      Server IP Cadangan
                    </span>
                    <span className="text-[10px] text-royal-gold-light font-mono">{serverIp2}</span>
                  </div>
                  <div className="flex items-center justify-between bg-royal-blue-dark/80 border border-royal-gold/10 rounded-2xl p-4">
                    <span className="font-mono text-royal-gold-light text-sm sm:text-base select-all tracking-wide">{serverIp2}</span>
                    <button
                      onClick={() => copyToClipboard(serverIp2, "ip2")}
                      className="p-2.5 rounded-xl bg-royal-blue-surface border border-royal-gold/10 hover:border-royal-gold/30 hover:bg-royal-blue-dark text-gray-400 hover:text-white transition-all cursor-pointer"
                      title="Salin IP Cadangan"
                    >
                      {copiedIp2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                      Port Server
                    </span>
                    <span className="text-[10px] text-royal-gold-light font-mono">Bedrock Default Port</span>
                  </div>
                  <div className="flex items-center justify-between bg-royal-blue-dark/80 border border-royal-gold/10 rounded-2xl p-4">
                    <span className="font-mono text-royal-gold-light text-sm sm:text-base select-all tracking-wide">{serverPort}</span>
                    <button
                      onClick={() => copyToClipboard(serverPort, "port")}
                      className="p-2.5 rounded-xl bg-royal-blue-surface border border-royal-gold/10 hover:border-royal-gold/30 hover:bg-royal-blue-dark text-gray-400 hover:text-white transition-all cursor-pointer"
                      title="Salin Port"
                    >
                      {copiedPort ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-royal-gold/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-xs text-gray-400">
                Versi Minecraft Didukung: <span className="text-royal-gold font-medium font-mono">{SERVER_CONFIG.versionRange}</span>
              </span>
              <span className="text-xs text-emerald-400 font-medium font-mono">
                No Whitelist • Free Play
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
