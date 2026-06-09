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
    <section id="experience" className="section-padding bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10">
            Journey So Far
          </h2>

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
                    <div className="hidden sm:flex shrink-0 w-[31px] items-start justify-center pt-1.5 relative z-10">
                      <div className="w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-bg" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 p-5 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <Icon
                            size={16}
                            className="text-accent shrink-0"
                            strokeWidth={1.8}
                          />
                          <h3 className="text-sm font-bold text-text">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-xs text-text-muted font-medium whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-accent mb-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-text-muted mb-3">
                        {item.location}
                      </p>

                      <p className="text-sm text-text-secondary leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1">
                        {item.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="text-xs text-text-muted flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                            {h}
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
