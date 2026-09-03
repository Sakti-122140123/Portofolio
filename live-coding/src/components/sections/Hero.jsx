// HERO — bagian pertama yang dilihat user (full screen)
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import profile from "../../data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* background dengan titik-titik subtle (dekoratif) */}
      <div className="absolute inset-0 bg-bg">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        {/* layout 2 kolom — teks kiri, foto kanan */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* KOLOM KIRI — teks */}
          <div className="flex-1 max-w-2xl">
            {/* "Hello, I'm" dengan animasi fade + naik */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium text-sm tracking-wide uppercase mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            {/* NAMA — besar & tebal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 tracking-tight"
            >
              {profile.name}
            </motion.h1>

            {/* HEADLINE — teks dari data/profile.js */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary mb-3 leading-relaxed"
            >
              {profile.headline}
            </motion.p>

            {/* SUB-HEADLINE — teks lebih panjang */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-text-muted mb-10 leading-relaxed text-justify"
            >
              {profile.subheadline}
            </motion.p>

            {/* TOMBOL CTA — View Projects, Contact Me, Export PDF */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text text-sm font-medium rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="/deck"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text text-sm font-medium rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <FileDown size={16} />
                Export Portfolio as PDF
              </a>
            </motion.div>

            {/* LINK SOSIAL — LinkedIn & GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 mt-6"
            >
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* KOLOM KANAN — FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            {/* foto dengan efek border & shadow */}
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                {/* ganti src kalau nama file foto berbeda */}
                <img
                  src="/foto/profile.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* border dekoratif di belakang foto (efek layer) */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
