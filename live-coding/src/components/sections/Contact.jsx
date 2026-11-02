import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import profile from "../../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface/50 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <p className="text-accent font-semibold text-xs tracking-wider uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-4">
            Let&apos;s Connect & Build
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
            Interested in discussing full-time software engineering, web development, or software quality assurance opportunities?
            Whether for institutional systems, high-growth startups, or specialized tech roles, feel free to reach out.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-all shadow-xs w-full sm:w-auto justify-center"
            >
              <Send size={15} />
              <span>Send Email</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-surface text-text text-sm font-medium rounded-xl border border-border hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center shadow-2xs"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-surface text-text text-sm font-medium rounded-xl border border-border hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center shadow-2xs"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Email Display */}
          <p className="mt-8 text-xs sm:text-sm text-text-muted">
            Direct Email:{" "}
            <a
              href={`mailto:${profile.links.email}`}
              className="text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              {profile.links.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
