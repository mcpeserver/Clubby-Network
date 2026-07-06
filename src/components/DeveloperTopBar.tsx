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
    <div className="w-full bg-royal-blue-dark border-b border-royal-gold/15 text-xs text-gray-400 py-2.5 px-4 select-none z-50 relative font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 font-medium text-gray-300">
          <User className="w-3.5 h-3.5 text-royal-gold" />
          <span>Developed by <span className="text-royal-gold-light font-semibold">{config.name}</span></span>
        </div>
        
        <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1">
          <a
            href={`https://wa.me/${config.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-royal-gold/80" />
            <span>WhatsApp</span>
          </a>
          
          <a
            href={config.website.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-royal-gold/80" />
            <span>Portfolio</span>
          </a>
          
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-royal-gold transition-colors font-semibold text-gray-350"
          >
            <Users className="w-3.5 h-3.5 text-royal-gold/80" />
            <span>Developer Community</span>
          </a>
        </div>
      </div>
    </div>
  );
}

