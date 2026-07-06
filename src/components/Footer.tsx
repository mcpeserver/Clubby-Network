import { ArrowUp, Github, Heart } from "lucide-react";
import { DevConfig } from "../types";

interface FooterProps {
  config: DevConfig | null;
  whatsappChannelUrl: string;
  donateUrl: string;
}

export default function Footer({ config, whatsappChannelUrl, donateUrl }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#070b14] border-t border-royal-gold/15 pt-16 pb-8 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-cinzel font-bold text-xl text-white tracking-wider mb-2">
              Clubby Network
            </span>
            <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
              Portal komunitas Minecraft Bedrock Indonesia terpusat untuk berkumpul, berdiskusi, bermain Survival Multiplayer, dan mengunduh berkas dengan aman.
            </p>
          </div>

          {/* Middle Column: Nav Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              <button
                onClick={() => handleScrollToSection("#download")}
                className="text-xs text-gray-400 hover:text-royal-gold transition-colors text-left cursor-pointer"
              >
                Download
              </button>
              <button
                onClick={() => handleScrollToSection("#groups")}
                className="text-xs text-gray-400 hover:text-royal-gold transition-colors text-left cursor-pointer"
              >
                Community
              </button>
              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-royal-gold transition-colors text-left"
              >
                Channel
              </a>
              <a
                href={donateUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-royal-gold transition-colors text-left"
              >
                Donate
              </a>
            </div>
          </div>

          {/* Right Column: Developer Info */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4 font-mono">
              Developer Info
            </span>
            {config ? (
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li className="font-semibold text-royal-gold">{config.name}</li>
                <li>
                  <a
                    href={config.website.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-royal-gold transition-colors block"
                  >
                    Portfolio Page
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${config.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-royal-gold transition-colors block"
                  >
                    WhatsApp Contact
                  </a>
                </li>
              </ul>
            ) : (
              <span className="text-xs text-gray-500">Loading developer configuration...</span>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1e293b]/35 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 text-center sm:text-left">
            &copy; 2026 Club Minecraft Indonesia. All rights reserved. <br className="sm:hidden" />
            Website developed with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" /> by{" "}
            <a
              href={config?.website.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-royal-gold hover:text-royal-gold-light font-medium transition-colors"
            >
              {config?.name || "Ran Dev"}
            </a>
            .
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-royal-gold/15 hover:border-royal-gold/40 text-gray-400 hover:text-white hover:bg-slate-800 transition-all shadow-md group cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-royal-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
