import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  FileCheck2,
  Building2,
  TrendingUp,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import projects from "../../data/projects";

// Mockup arsitektural elegan untuk proyek yang screenshot aslinya belum diunggah
function ProjectMockupPlaceholder({ project }) {
  if (project.id === "simamang") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-950/20 via-surface to-bg p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Building2 size={14} className="text-accent" />
            <span className="text-[11px] font-semibold text-text">
              Diskominfo · Portal Magang
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-medium">
            Active System
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-lg bg-surface border border-border/80 text-center">
            <p className="text-[10px] text-text-muted">Total Applicants</p>
            <p className="text-sm font-bold text-text">50+ Interns</p>
          </div>
          <div className="p-2 rounded-lg bg-surface border border-border/80 text-center">
            <p className="text-[10px] text-text-muted">Workflow Role</p>
            <p className="text-sm font-bold text-accent">Admin & User</p>
          </div>
          <div className="p-2 rounded-lg bg-surface border border-border/80 text-center">
            <p className="text-[10px] text-text-muted">Test Pass Rate</p>
            <p className="text-sm font-bold text-emerald-500">100% Verified</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
          <span>Backend: Laravel REST API</span>
          <span>UI: React.js Responsive</span>
        </div>
      </div>
    );
  }

  if (project.id === "simas") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-cyan-950/20 via-surface to-bg p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <FileCheck2 size={14} className="text-cyan-500" />
            <span className="text-[11px] font-semibold text-text">
              SIMAS · Diskominfo E-Surat
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-500 font-medium">
            30+ OPD Connected
          </span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="p-2 rounded-lg bg-surface/90 border border-border flex items-center justify-between text-xs">
            <span className="font-medium text-text">Disposisi Surat Masuk OPD</span>
            <span className="text-[10px] text-emerald-500 font-semibold">Tervalidasi EP & BVA</span>
          </div>
          <div className="p-2 rounded-lg bg-surface/90 border border-border flex items-center justify-between text-xs">
            <span className="font-medium text-text">Pelacakan Alur Verifikasi Multi-User</span>
            <span className="text-[10px] text-accent font-semibold">Role Matrix OK</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
          <span>Stack: Laravel · React · MySQL</span>
          <span>Verification: Postman & UAT</span>
        </div>
      </div>
    );
  }

  if (project.id === "casheye") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-emerald-950/20 via-surface to-bg p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-emerald-500" />
            <span className="text-[11px] font-semibold text-text">
              CashEye · Financial Analytics
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-medium">
            Personal Finance
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="p-2.5 rounded-lg bg-surface border border-border">
            <p className="text-[10px] text-text-muted">Monthly Cashflow</p>
            <p className="text-sm font-bold text-text">Income vs Expense</p>
            <div className="mt-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-3/4" />
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-surface border border-border">
            <p className="text-[10px] text-text-muted">UI Architecture</p>
            <p className="text-sm font-bold text-accent">React SPA</p>
            <p className="text-[10px] text-text-muted mt-1">GitHub Pages Deployed</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
          <span>Interactive Charts & Categorization</span>
          <span>Responsive Dashboard UI</span>
        </div>
      </div>
    );
  }

  // Kyuubi MML
  return (
    <div className="w-full h-full bg-gradient-to-br from-violet-950/20 via-surface to-bg p-4 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-border/60 pb-2">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-violet-500" />
          <span className="text-[11px] font-semibold text-text">
            Kyuubi · Music Emotion Recognition
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/15 text-violet-500 font-medium">
          Multimodal ML
        </span>
      </div>
      <div className="p-2.5 rounded-lg bg-surface border border-border my-auto">
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="text-text font-medium">Late Fusion Architecture</span>
          <span className="text-violet-500 font-mono text-[10px]">3 Data Streams</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1 rounded bg-bg border border-border">Audio (Librosa)</div>
          <div className="p-1 rounded bg-bg border border-border">Lyrics (NLP)</div>
          <div className="p-1 rounded bg-bg border border-border">MIDI Data</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
        <span>Stack: Python · Scikit-learn · Librosa</span>
        <span>Academic Research & Experimentation</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  // Parse hostname untuk visual URL bar
  let displayUrl = "project.local";
  if (project.link) {
    try {
      displayUrl = new URL(project.link).hostname;
    } catch {
      displayUrl = project.link;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md flex flex-col"
    >
      {/* Top Browser Chrome & Visual Window */}
      <div className="border-b border-border/80 bg-bg-alt/50">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-surface border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-bg border border-border/80 text-[10px] font-mono text-text-muted truncate max-w-[190px] sm:max-w-[240px]">
            {displayUrl}
          </div>
          <div className="w-7 text-right">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label={`Open ${project.name}`}
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Visual Frame Container (16:9 uniform format) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
          ) : (
            <ProjectMockupPlaceholder project={project} />
          )}

          {/* Category Chip Overlay */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-surface/90 backdrop-blur-md border border-border/80 text-[10px] font-semibold text-text shadow-2xs">
            {project.category || "Web Project"}
          </div>
        </div>
      </div>

      {/* Card Information Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Role */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-medium text-accent mt-0.5">
                {project.role}
              </p>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent transition-colors shrink-0"
                aria-label={`Visit ${project.name}`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 text-left">
            {project.shortDescription}
          </p>

          {/* Measurable Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-bg border border-border/70 mb-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-left">
                  <p className="text-[10px] text-text-muted truncate">
                    {metric.label}
                  </p>
                  <p className="text-xs font-bold text-text truncate">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-medium text-text-secondary bg-surface rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            <span>{expanded ? "Hide Details" : "View Details & Architecture"}</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Expandable Breakdown Drawer */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden bg-bg/60 border-t border-border"
          >
            <div className="p-5 sm:p-6 space-y-4 text-left">
              {/* Scope & Context */}
              <div>
                <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5">
                  Scope & Context
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Contributions / Actions */}
              <div>
                <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5">
                  Key Actions & Deliverables
                </h4>
                <ul className="space-y-1.5">
                  {project.keyContribution.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-text-secondary flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical & QA Relevance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <p className="text-[11px] font-bold text-accent mb-1">
                    Development Scope
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {project.devRelevance}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <p className="text-[11px] font-bold text-accent mb-1">
                    Quality Assurance Scope
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {project.qaRelevance}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "web") {
      return ["harmony", "simamang", "simas", "casheye"].includes(project.id);
    }
    if (filter === "qa") {
      return ["harmony", "simamang", "simas"].includes(project.id);
    }
    return true; // "all"
  });

  return (
    <section id="projects" className="section-padding bg-surface/50 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lighter text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers size={13} />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Featured Systems & Engineering Projects
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-6">
            A comprehensive look at web-based information systems, automated workflows,
            and software quality assurance delivered for government, academic, and personal initiatives.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Projects (5)" },
              { id: "web", label: "Web Applications (4)" },
              { id: "qa", label: "Quality Assurance & Systems (3)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-accent text-white shadow-2xs font-semibold"
                    : "bg-surface text-text-secondary border border-border hover:border-accent/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Uniform 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
