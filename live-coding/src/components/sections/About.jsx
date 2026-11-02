// ABOUT — cerita tentang diri Anda (editorial & refined)
import { motion } from "framer-motion";
import { GraduationCap, Landmark, Sparkles } from "lucide-react";
import profile from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          {/* Eyebrow & Header */}
          <p className="text-accent font-semibold text-xs tracking-wider uppercase mb-2">
            Background & Focus
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-8">
            Engineering Systems with Precision & Purpose
          </h2>

          {/* 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Narrative Story (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {profile.about.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-sm sm:text-base text-text-secondary leading-relaxed text-left"
                >
                  {paragraph}
                </motion.p>
              ))}

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Full SDLC Involvement
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Black-Box & UAT Methodologies
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  REST API & SQL Architecture
                </span>
              </div>
            </div>

            {/* Right Column: Bento Summary Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Card 1: Education */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors shadow-2xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                      Academic Distinction
                    </span>
                    <h3 className="text-sm font-bold text-text mt-0.5">
                      Institut Teknologi Sumatera
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      Informatics Engineering · GPA 3.56/4.00
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      Practicum Teaching Assistant & HMIF Staff
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Government Systems Delivery */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors shadow-2xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                    <Landmark size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                      Institutional Experience
                    </span>
                    <h3 className="text-sm font-bold text-text mt-0.5">
                      Dinas Kominfo Kota Bandar Lampung
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      Engineered & tested SIMAMANG & SIMAS production systems.
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      Bridging developer code with municipal administrative needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Engineering Philosophy */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors shadow-2xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                      Engineering Principles
                    </span>
                    <h3 className="text-sm font-bold text-text mt-0.5">
                      Reliability Through Rigorous Testing
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      Equivalence Partitioning, boundary validation, and clear documentation.
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      Zero tolerance for unverified production deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
