import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";
import profile from "../../data/profile";

export default function RoleFit() {
  const { roleFit } = profile;

  return (
    <section id="role-fit" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Why Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Role Fit
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <Target size={16} className="text-accent" />
            <p className="text-sm text-text-muted">
              Targeting:{" "}
              <span className="font-medium text-text-secondary">
                {roleFit.targetRole}
              </span>{" "}
              at{" "}
              <span className="font-medium text-text-secondary">
                {roleFit.targetCompany}
              </span>
            </p>
          </div>

          {/* Intro */}
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
            {roleFit.intro}
          </p>

          {/* Mapping: Requirement → My Experience */}
          <div className="space-y-4">
            {roleFit.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 bg-bg rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                    strokeWidth={1.8}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-text mb-2">
                      {point.requirement}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {point.experience}
                    </p>
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
