import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10">
            Academic Background
          </h2>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-bg rounded-xl border border-border max-w-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-lighter flex items-center justify-center shrink-0">
                <GraduationCap
                  size={22}
                  className="text-accent"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-text mb-1">
                  Institut Teknologi Sumatera
                </h3>
                <p className="text-sm font-medium text-accent mb-3">
                  Informatics Engineering (Teknik Informatika)
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    8th Semester — Active Student
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
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
