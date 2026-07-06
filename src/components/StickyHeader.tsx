import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clubbyLogo from "../assets/images/clubby_logo_1783351200644.jpg";

interface StickyHeaderProps {
  communityGroupUrl: string;
}

export default function StickyHeader({ communityGroupUrl }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Server", href: "#about-clubby" },
    { label: "Download", href: "#download" },
    { label: "Community", href: "#groups" },
    { label: "Ranks", href: "#ranks" },
    { label: "Vote", href: "#vote" },
    { label: "Donate", href: "#donate" },
    { label: "Developer", href: "#footer" },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <header
      className={`relative z-45 w-full transition-all duration-350 ${
        isScrolled
          ? "bg-royal-blue-dark/85 backdrop-blur-xl border-b border-royal-gold/15 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and App Name */}
        <button
          onClick={() => handleScrollTo("#home")}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <img
            src={clubbyLogo}
            alt="Clubby Network Logo"
            className="w-10 h-10 rounded-full border border-royal-gold/40 group-hover:border-royal-gold transition-all duration-300"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="font-poppins font-bold text-lg text-white tracking-tight block group-hover:text-royal-gold-light transition-colors">
              Clubby Network
            </span>
          </div>
        </button>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.href)}
              className="text-sm font-medium text-gray-300 hover:text-royal-gold-light transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href={communityGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-2 bg-royal-gold text-royal-blue-dark px-5 py-2.5 rounded-full text-sm font-bold overflow-hidden group shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(243,208,107,0.5)] hover:bg-royal-gold-light transition-all duration-300"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-royal-blue focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-royal-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-royal-gold/15 bg-royal-blue-dark"
            id="mobile-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.href)}
                  className="text-left py-3 px-4 rounded-xl text-base font-medium text-gray-300 hover:text-royal-gold-light hover:bg-royal-blue/40 transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <a
                  href={communityGroupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-royal-gold text-royal-blue-dark py-3 px-4 rounded-xl text-base font-bold shadow-lg hover:bg-royal-gold-light"
                >
                  <span>Join Community</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
