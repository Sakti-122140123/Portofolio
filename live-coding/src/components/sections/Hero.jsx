// HERO — bagian pertama yang dilihat user (full screen, minimalis & elegan)
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText, ExternalLink } from "lucide-react";
import profile from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 lg:py-0"
    >
      {/* background — subtle dot grid tanpa neon glow */}
      <div className="absolute inset-0 bg-bg pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full py-8 sm:py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* KOLOM KIRI — Typography & Information */}
          <div className="flex-1 max-w-2xl text-left">
            {/* Status Badge — clean, tanpa pinging dot */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-secondary mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Jakarta, Indonesia · Open to Opportunities</span>
            </motion.div>

            {/* Sub-label Institusi */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-xs uppercase tracking-widest font-semibold text-accent mb-2"
            >
              Institut Teknologi Sumatera · Computer Science (GPA 3.56)
            </motion.p>

            {/* Nama Utama */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1] mb-3"
            >
              {profile.name}
            </motion.h1>

            {/* Positioning / Headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-secondary tracking-tight mb-4"
            >
              {profile.headline}
            </motion.p>

            {/* Subheadline / Bio Naratif */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mb-6 text-left"
            >
              {profile.subheadline}
            </motion.p>

            {/* Proof Points / Credibility Strip — tanpa ikon centang berlebihan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 py-2.5 px-4 rounded-xl bg-surface border border-border mb-8 max-w-xl"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-text">11,000+ Users</span>
                <span className="text-[11px] text-text-muted font-mono">ITERA</span>
              </div>
              <div className="hidden sm:block h-3.5 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-text">2 Government Systems</span>
                <span className="text-[11px] text-text-muted font-mono">Diskominfo</span>
              </div>
              <div className="hidden sm:block h-3.5 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-text">Full-Stack & QA</span>
              </div>
            </motion.div>

            {/* Main Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-xs"
              >
                <span>Explore All Projects</span>
                <ArrowDown size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-text text-xs sm:text-sm font-medium rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-text-muted hover:text-text hover:border-text-secondary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-text-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>

            {/* Specialized Decks Quick Access */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.44 }}
              className="flex flex-wrap items-center gap-2 text-xs text-text-muted"
            >
              <span className="font-medium text-text-secondary">Specialized Decks:</span>
              <a
                href="/deck-qa"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-lighter text-accent font-semibold hover:bg-accent hover:text-white transition-colors border border-accent/25"
              >
                <FileText size={12} />
                <span>QA Pitch Deck (PDF Ready)</span>
              </a>
              <a
                href="/deck-webdev"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface text-text-secondary font-medium hover:text-accent border border-border transition-colors"
              >
                <span>Web Dev Deck</span>
                <ExternalLink size={11} />
              </a>
            </motion.div>
          </div>

          {/* KOLOM KANAN — Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative group">
              <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border bg-surface">
                <img
                  src="/foto/profile.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                  width="288"
                  height="288"
                />
              </div>

              {/* Floating Badge — monospace subtle */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface border border-border shadow-xs flex items-center gap-1.5 text-[11px] font-mono text-text-secondary whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
