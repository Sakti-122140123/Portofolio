import { motion } from "framer-motion";
import { BookOpen, Users, FileText } from "lucide-react";
import profile from "../../data/profile";

const highlights = [
  {
    icon: BookOpen,
    label: "Information Systems",
    desc: "Built web-based systems for government and academic institutions",
  },
  {
    icon: FileText,
    label: "Documentation",
    desc: "Consistently maintained technical docs and progress reports",
  },
  {
    icon: Users,
    label: "Team Coordination",
    desc: "Worked with cross-functional teams and stakeholders",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-8">
            Background & Focus
          </h2>

          {/* About Text */}
          <div className="max-w-3xl space-y-4 mb-12">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-text-secondary leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <item.icon
                  size={20}
                  className="text-accent mb-3"
                  strokeWidth={1.8}
                />
                <h3 className="text-sm font-semibold text-text mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
