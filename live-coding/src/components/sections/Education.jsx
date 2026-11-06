import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import profile from "../../data/profile";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-bg border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          {/* Section Header */}
          <p className="text-accent font-semibold text-xs tracking-wider uppercase mb-2">
            Education
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Academic Background
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-8 text-justify">
            Formal computer science education focusing on software engineering principles, algorithms, and system design.
          </p>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-7 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 shadow-2xs max-w-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                <GraduationCap
                  size={24}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1">
                  Institut Teknologi Sumatera
                </h3>
                <p className="text-sm font-semibold text-accent mb-2">
                  Computer Science (Teknik Informatika)
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5 font-medium text-text-secondary">
                    <Award size={14} className="text-accent" />
                    {profile.semester}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-text-muted" />
                    Lampung, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
