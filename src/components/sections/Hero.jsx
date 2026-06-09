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
      {/* Subtle background pattern */}
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
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wide uppercase mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 tracking-tight"
          >
            {profile.name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-secondary mb-3 leading-relaxed max-w-2xl"
          >
            {profile.headline}
          </motion.p>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-text-muted mb-10 leading-relaxed max-w-2xl"
          >
            {profile.subheadline}
          </motion.p>

          {/* CTA Buttons */}
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

          {/* Social Links */}
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
      </div>
    </section>
  );
}
