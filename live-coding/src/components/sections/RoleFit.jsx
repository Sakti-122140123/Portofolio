// STRENGTHS / "What I Bring" — 5 poin kelebihan Anda (Bento grid dengan icon spesifik)
import { motion } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  GitBranch,
  FileText,
  Users,
} from "lucide-react";
import profile from "../../data/profile";

// Mapping icon tematik untuk masing-masing kelebihan
const strengthIcons = [
  Code2,
  ShieldCheck,
  GitBranch,
  FileText,
  Users,
];

export default function RoleFit() {
  const { roleFit } = profile;

  return (
    <section id="role-fit" className="section-padding bg-surface/40 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          {/* HEADER SECTION */}
          <p className="text-accent font-semibold text-xs tracking-wider uppercase mb-2">
            Core Competencies
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            What I Bring to an Engineering Team
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mb-10">
            {roleFit.intro}
          </p>

          {/* BENTO-STYLE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
            {roleFit.points.map((point, i) => {
              const Icon = strengthIcons[i] || Code2;
              // 2 kartu pertama dibuat lebih lebar (3 cols each di lg), 3 kartu berikutnya 2 cols each
              const colSpan =
                i < 2 ? "lg:col-span-3" : "lg:col-span-2";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`${colSpan} p-5 sm:p-6 bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 shadow-2xs hover:shadow-xs flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent-lighter text-accent flex items-center justify-center mb-4">
                      <Icon size={20} strokeWidth={1.9} />
                    </div>

                    <h3 className="text-base font-bold text-text mb-2 tracking-tight">
                      {point.requirement}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-left">
                      {point.experience}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] text-text-muted">
                    <span className="font-mono text-accent">0{i + 1}</span>
                    <span className="capitalize">{i < 2 ? "Primary Domain" : "Practiced Skill"}</span>
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
