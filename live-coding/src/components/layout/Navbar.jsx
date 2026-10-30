// Navbar responsif — mendukung navigasi halaman utama & tautan langsung ke QA Deck
import { useState, useEffect } from "react";
import { Menu, X, FileText, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#role-fit" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <a
            href="#"
            className="text-lg font-black text-text tracking-tight hover:text-accent transition-colors flex items-center gap-1 shrink-0"
          >
            <span>SMI</span>
            <span className="text-accent text-xl leading-none">.</span>
          </a>

          {/* Desktop Navigation (> md) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-11 sm:mr-12">
            <div className="flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs lg:text-sm text-text-secondary hover:text-accent transition-colors font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Quick CTA to Deck QA */}
            <a
              href="/deck-qa"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-lighter text-accent hover:bg-accent hover:text-white transition-all text-xs font-semibold border border-accent/20 shadow-2xs"
            >
              <FileText size={13} />
              <span>QA Deck</span>
            </a>
          </div>

          {/* Mobile Action Area: Hamburger Button (berdampingan aman dengan ThemeToggle) */}
          <div className="flex md:hidden items-center mr-11">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-surface/80 border border-border text-text-secondary hover:text-accent hover:bg-bg transition-colors cursor-pointer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border shadow-lg overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1.5">
              {/* Section Links */}
              <div className="grid grid-cols-2 gap-1 mb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-xs sm:text-sm text-text-secondary hover:text-accent hover:bg-bg font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-text-muted opacity-60">#</span>
                  </a>
                ))}
              </div>

              {/* Special CTA Cards for Portfolio Decks */}
              <div className="pt-2 border-t border-border-light flex flex-col gap-2">
                <a
                  href="/deck-qa"
                  className="p-3 rounded-xl bg-accent-lighter border border-accent/25 flex items-center justify-between text-accent hover:bg-accent hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center text-accent group-hover:text-accent">
                      <FileText size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">QA Creative Portfolio</p>
                      <p className="text-[10px] text-accent/80 group-hover:text-white/80">
                        View 8-Slide Pitch Deck & PDF
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="/deck-webdev"
                  className="px-3 py-2 rounded-lg bg-bg border border-border flex items-center justify-between text-text-secondary hover:text-accent transition-colors text-xs font-medium"
                >
                  <span>Web Developer Deck</span>
                  <ExternalLink size={12} className="text-text-muted" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
