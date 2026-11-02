import { motion } from "framer-motion";
import { Code2, ShieldCheck, Wrench } from "lucide-react";
import { skills } from "../../data/skills";

const iconMap = {
  Code2,
  ShieldCheck,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg border-t border-border">
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
            Technical Stack & Toolkit
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Core Competencies & Technologies
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-10">
            Disciplines, frameworks, and tooling practiced across production systems,
            academic instruction, and structured testing lifecycles.
          </p>

          {/* Skill Categories (3-column layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => {
              const Icon = iconMap[group.icon] || Code2;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 shadow-2xs hover:shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-lighter text-accent flex items-center justify-center">
                          <Icon size={19} strokeWidth={1.9} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-text">
                            {group.category}
                          </h3>
                          <span className="text-[11px] text-text-muted">
                            {group.items.length} key competencies
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-bg rounded-lg border border-border hover:border-accent/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/50 text-[10px] font-mono text-accent">
                    Category // 0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
