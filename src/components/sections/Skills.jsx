import { motion } from "framer-motion";
import { ClipboardList, Code2, Brain, Wrench } from "lucide-react";
import { skills } from "../../data/skills";

const iconMap = {
  ClipboardList,
  Code2,
  Brain,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10">
            What I Work With
          </h2>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group, i) => {
              const Icon = iconMap[group.icon];
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-surface rounded-xl border border-border"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="w-9 h-9 rounded-lg bg-accent-lighter flex items-center justify-center">
                        <Icon
                          size={18}
                          className="text-accent"
                          strokeWidth={1.8}
                        />
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-text">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-bg rounded-lg border border-border-light"
                      >
                        {skill}
                      </span>
                    ))}
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
