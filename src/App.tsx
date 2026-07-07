import { useEffect, useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DevConfig } from "./types";
import { COMMUNITY_LINKS, DONATE_URL } from "./constants";

import DeveloperTopBar from "./components/DeveloperTopBar";
import StickyHeader from "./components/StickyHeader";
import HeroSection from "./components/HeroSection";
import QuickActions from "./components/QuickActions";
import AboutClubby from "./components/AboutClubby";
import DownloadMinecraft from "./components/DownloadMinecraft";
import AboutCommunity from "./components/AboutCommunity";
import ServerFeatures from "./components/ServerFeatures";
import RankList from "./components/RankList";
import VoteSection from "./components/VoteSection";
import CommunityGroups from "./components/CommunityGroups";
import WhatsAppChannel from "./components/WhatsAppChannel";
import GithubCollaboration from "./components/GithubCollaboration";
import DonationSection from "./components/DonationSection";
import Footer from "./components/Footer";

export default function App() {
  const [config, setConfig] = useState<DevConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Fallback configuration if fetch fails
  const fallbackConfig: DevConfig = {
    name: "Ran Dev",
    contact: {
      phone: "0895602592430",
      whatsapp: "0895602592430",
    },
    community: {
      name: "Ran Dev Community",
      website: "https://community.randev.com",
      discord: "https://discord.gg/9KUN2byKRM",
    },
    website: {
      portfolio: "https://sfl.gl/x2ic",
    },
  };

  const fetchConfig = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json");
      if (!res.ok) throw new Error("Gagal mengambil data konfigurasi.");
      const data = await res.json();
      setConfig(data);
    } catch (err: any) {
      console.warn("Using fallback config due to fetch error:", err);
      setConfig(fallbackConfig);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-royal-blue-dark flex flex-col items-center justify-center text-white p-4">
        <Loader2 className="w-10 h-10 text-royal-gold animate-spin mb-4" />
        <p className="font-cinzel font-semibold tracking-wider text-royal-gold-light">Menghubungkan ke Clubby Network...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-royal-blue-dark text-gray-100 selection:bg-royal-crimson selection:text-white relative">
      
      {/* Sticky top wrapper containing both top bars so they scroll together cleanly */}
      <div className="sticky top-0 z-50 w-full flex flex-col">
        {/* 1. Developer Top Bar */}
        <DeveloperTopBar config={config} />

        {/* 2. Sticky Header */}
        <StickyHeader communityGroupUrl={COMMUNITY_LINKS.mainGroupUrl} />
      </div>

      {/* Main Sections Wrapper */}
      <main className="relative">
        
        {/* 3. Hero Section */}
        <HeroSection communityGroupUrl={COMMUNITY_LINKS.mainGroupUrl} />

        {/* 4. Quick Navigation Cards */}
        <QuickActions whatsappChannelUrl={COMMUNITY_LINKS.whatsappChannelUrl} donateUrl={DONATE_URL} />

        {/* 5. About Clubby Network */}
        <AboutClubby />

        {/* 6. Minecraft Download Section */}
        <DownloadMinecraft />

        {/* 7. Community Section */}
        <AboutCommunity />

        {/* 8. Server Features */}
        <ServerFeatures />

        {/* 9. Rank List */}
        <RankList />

        {/* 10. Vote Section */}
        <VoteSection />

        {/* 11. Community Groups */}
        <CommunityGroups />

        {/* 12. WhatsApp Channel */}
        <WhatsAppChannel whatsappChannelUrl={COMMUNITY_LINKS.whatsappChannelUrl} />

        {/* Github Open Source Collaboration Section */}
        <GithubCollaboration />

        {/* 13. Donation Section */}
        <DonationSection />

      </main>

      {/* 14. Footer */}
      <Footer config={config} whatsappChannelUrl={COMMUNITY_LINKS.whatsappChannelUrl} donateUrl={DONATE_URL} />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-2xl bg-royal-gold hover:bg-royal-gold-light text-royal-blue-dark shadow-lg shadow-royal-gold/20 hover:shadow-royal-gold/40 transition-all cursor-pointer border border-white/10 group active:scale-95"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-royal-blue-dark" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

