import { motion } from "motion/react";
import { GitBranch, GitPullRequest, Code, FileText, Users, ArrowUpRight, Github } from "lucide-react";
import { GITHUB_CONFIG } from "../constants";

export default function GithubCollaboration() {
  return (
    <section id="developer-hub" className="py-24 bg-royal-blue border-t border-royal-gold/15 relative z-20 overflow-hidden">
      {/* Dynamic Ambient Blur */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-royal-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-royal-crimson/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-xs font-semibold text-royal-gold mb-4 backdrop-blur-md">
            <Code className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Open Source Community Hub</span>
          </div>
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider mb-4">
            Kolaborasi & <span className="text-royal-gold-light">Kontribusi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Clubby Network dikembangkan secara transparan dengan semangat kolaboratif. Kami membuka pintu selebar-lebarnya bagi Anda yang ingin berkontribusi memperbaiki kode, merancang fitur, atau mengoptimalkan website.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Repositories & License */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-royal-blue-surface/40 border border-royal-gold/15 backdrop-blur-md flex flex-col justify-between group hover:border-royal-gold/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-royal-blue-dark border border-royal-gold/20 text-royal-gold">
                  <Github className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-white tracking-wide">
                  Repository Resmi
                </h3>
              </div>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
                Seluruh kode sumber konfigurasi API, data server, dan struktur landing page dikelola langsung melalui platform GitHub agar selalu up-to-date dan aman.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-royal-blue-dark/50 border border-royal-gold/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">API Config Repository</span>
                    <span className="text-xs text-white font-mono">mcpeserver/MyAPI</span>
                  </div>
                  <a
                    href={GITHUB_CONFIG.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-royal-gold/10 text-royal-gold hover:bg-royal-gold hover:text-royal-blue-dark transition-all duration-350"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-royal-blue-dark/50 border border-royal-gold/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Website Codebase</span>
                    <span className="text-xs text-white font-mono">clubby-network-portal</span>
                  </div>
                  <a
                    href={GITHUB_CONFIG.websiteRepoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-royal-gold/10 text-royal-gold hover:bg-royal-gold hover:text-royal-blue-dark transition-all duration-350"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-royal-gold/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-royal-gold" />
                <span className="text-xs text-gray-400">Lisensi Proyek:</span>
              </div>
              <a
                href={GITHUB_CONFIG.licenseUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-royal-gold hover:text-royal-gold-light transition-colors underline underline-offset-4"
              >
                {GITHUB_CONFIG.license}
              </a>
            </div>
          </motion.div>

          {/* Column 2: How to Contribute */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-royal-blue-surface/40 border border-royal-gold/15 backdrop-blur-md flex flex-col justify-between group hover:border-royal-gold/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-royal-blue-dark border border-royal-gold/20 text-royal-gold">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-white tracking-wide">
                  Cara Berkontribusi
                </h3>
              </div>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
                Kami sangat menghargai kontribusi dari komunitas! Ikuti beberapa langkah mudah berikut untuk mengajukan perubahan kode Anda:
              </p>

              <div className="space-y-4">
                {GITHUB_CONFIG.howToContribute.map((step, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-royal-gold/10 border border-royal-gold/25 text-royal-gold flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-royal-gold/10">
              <a
                href={GITHUB_CONFIG.websiteRepoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-royal-blue-dark hover:bg-royal-gold border border-royal-gold/30 hover:border-royal-gold hover:text-royal-blue-dark py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-white"
              >
                <GitBranch className="w-4 h-4" />
                <span>Pelajari di GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Core Contributors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-royal-blue-surface/40 border border-royal-gold/15 backdrop-blur-md flex flex-col justify-between group hover:border-royal-gold/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-royal-blue-dark border border-royal-gold/20 text-royal-gold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-white tracking-wide">
                  Kontributor Utama
                </h3>
              </div>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
                Terima kasih yang sebesar-besarnya kepada para developer dan administrator yang telah mendedikasikan waktunya untuk memelihara ekosistem Clubby Network:
              </p>

              <div className="space-y-4">
                {GITHUB_CONFIG.contributors.map((contrib) => (
                  <div key={contrib.name} className="flex items-center gap-3 p-3 rounded-2xl bg-royal-blue-dark/30 border border-royal-gold/5 hover:border-royal-gold/20 transition-all duration-300">
                    <img
                      src={contrib.avatar}
                      alt={contrib.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-xl bg-royal-blue-dark border border-royal-gold/15 object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-cinzel font-bold text-xs text-white tracking-wide">{contrib.name}</h4>
                      <p className="text-[10px] text-royal-gold-light font-mono">{contrib.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-royal-gold/10 text-center text-[10px] text-gray-500 font-sans italic">
              Ingin nama Anda tercantum di sini? Kirimkan kontribusi terbaik Anda di repositori pengembang!
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
