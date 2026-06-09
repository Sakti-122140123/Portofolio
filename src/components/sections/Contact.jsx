import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import profile from "../../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10">
            Interested in discussing internship opportunities, project
            coordination support, or technology collaboration? Feel free to
            reach out — I&apos;d love to hear from you.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors w-full sm:w-auto justify-center"
            >
              <Send size={16} />
              Send Email
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-bg text-text text-sm font-medium rounded-lg border border-border hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center"
            >
              <LinkedinIcon size={16} />
              LinkedIn Profile
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-bg text-text text-sm font-medium rounded-lg border border-border hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>

          {/* Email Display */}
          <p className="mt-8 text-sm text-text-muted">
            Or email me directly at{" "}
            <a
              href={`mailto:${profile.links.email}`}
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              {profile.links.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
