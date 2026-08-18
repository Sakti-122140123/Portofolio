// navbar (menu navigasi) di atas halaman — sticky, selalu kelihatan
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger & close
import { motion, AnimatePresence } from "framer-motion"; // untuk animasi

// daftar menu navigasi — bisa ditambah/dikurangi
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#role-fit" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // untuk menu mobile (buka/tutup)
  const [scrolled, setScrolled] = useState(false); // deteksi apakah halaman sudah di-scroll

  // setiap kali user scroll, cek posisi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false); // tutup menu mobile setelah klik link

  return (
    // kalau sudah di-scroll, navbar punya background blur & border
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* logo kiri — SMI dengan titik accent */}
          <a
            href="#"
            className="text-lg font-bold text-text tracking-tight hover:text-accent transition-colors"
          >
            SMI<span className="text-accent">.</span>
          </a>

          {/* menu desktop — muncul di layar besar (>768px) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* tombol hamburger — hanya muncul di layar kecil (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* menu dropdown mobile — muncul dengan animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm text-text-secondary hover:text-accent transition-colors font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
