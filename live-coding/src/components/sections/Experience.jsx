import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";
import experience from "../../data/experience";

const typeIcon = {
  Internship: Briefcase,
  Organization: GraduationCap,
  Program: Award,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface/40 border-t border-border">
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
            Track Record
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Professional & Academic Experience
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-10 text-justify">
            Internships, institutional software development, and campus leadership roles that built my engineering foundation.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block" />

            <div className="space-y-6">
              {experience.map((item, i) => {
                const Icon = typeIcon[item.type] || BookOpen;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden sm:flex shrink-0 w-[31px] items-start justify-center pt-2 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 p-5 sm:p-6 bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                            <Icon size={15} strokeWidth={2} />
                          </div>
                          <h3 className="text-base font-bold text-text">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-xs text-text-muted font-medium">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <span className="font-semibold text-accent">
                          {item.organization}
                        </span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted">{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 text-justify">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 border-t border-border/50">
                        {item.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="text-xs text-text-muted flex items-start gap-2 text-justify"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
