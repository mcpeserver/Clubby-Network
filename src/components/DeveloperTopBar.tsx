import { User, Phone, Globe, Users } from "lucide-react";
import { DevConfig } from "../types";
import { SOCIAL_LINKS } from "../constants";

interface DeveloperTopBarProps {
  config: DevConfig | null;
}

export default function DeveloperTopBar({ config }: DeveloperTopBarProps) {
  if (!config) return null;

  const discordUrl = config.community.discord || SOCIAL_LINKS.discord;

  return (
    <div className="w-full bg-royal-blue-dark/95 backdrop-blur-md border-b border-royal-gold/20 text-xs text-gray-200 py-2.5 px-4 select-none z-50 relative font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-medium">
          <User className="w-3.5 h-3.5 text-royal-gold-light" />
          <span>Developed by <span className="text-royal-gold font-bold">{config.name}</span></span>
        </div>
        
        <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1 text-gray-300 text-[11px] sm:text-xs">
          <a
            href={`https://wa.me/${config.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-royal-gold-light/90" />
            <span>WhatsApp</span>
          </a>
          
          <a
            href={config.website.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-royal-gold-light/90" />
            <span>Portfolio</span>
          </a>
          
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors font-semibold text-royal-gold"
          >
            <Users className="w-3.5 h-3.5 text-royal-gold-light" />
            <span>Developer Community</span>
          </a>
        </div>
      </div>
    </div>
  );
}

