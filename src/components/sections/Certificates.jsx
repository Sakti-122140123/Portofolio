import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../../data/skills";

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="section-padding bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10">
            Certificates & Programs
          </h2>

          {/* Certificate List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                    strokeWidth={1.8}
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-text mb-1 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors mt-2 font-medium"
                      >
                        View Certificate
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
