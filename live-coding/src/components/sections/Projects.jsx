import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2,
} from "lucide-react";
import projects from "../../data/projects";
import { GithubIcon } from "../icons/SocialIcons";

// Tampilan arsitektural untuk proyek tanpa screenshot — tanpa fake browser chrome
function ProjectArchitectureCard({ project }) {
  return (
    <div className="w-full h-full bg-bg p-4 flex flex-col justify-between select-none">
      {/* Header teknis */}
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="text-[11px] font-semibold text-text">
          {project.name}
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-lighter text-accent font-medium">
          {project.category}
        </span>
      </div>

      {/* Metrics Grid */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-2 my-auto">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-2 rounded-lg bg-surface border border-border text-center">
              <p className="text-[10px] text-text-muted">{metric.label}</p>
              <p className="text-xs font-bold text-text">{metric.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer teknis */}
      <div className="flex items-center justify-between text-[10px] text-text-muted font-mono pt-1 border-t border-border/50">
        <span>{project.techStack.slice(0, 3).join(" · ")}</span>
        <span>{project.role}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Visual Frame — tanpa browser chrome tiruan */}
      <div className="border-b border-border">
        {/* Technical Header Bar — mengganti dots macOS */}
        <div className="flex items-center justify-between px-4 py-2 bg-bg border-b border-border/60">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-accent font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono text-text-muted hover:text-accent transition-colors"
                aria-label={`Open ${project.name}`}
              >
                <span className="hidden sm:inline">{new URL(project.link).hostname}</span>
                <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>

        {/* Visual Frame Container (16:9) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
          ) : (
            <ProjectArchitectureCard project={project} />
          )}
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
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 text-justify">
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
                className="px-2.5 py-0.5 text-[11px] font-mono font-medium text-text-secondary bg-bg rounded-md border border-border"
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
            <span>{expanded ? "Hide Details" : "View Details"}</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text transition-colors"
                aria-label={`GitHub repository for ${project.name}`}
              >
                <GithubIcon size={13} />
                <span>Repository</span>
              </a>
            )}
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
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-justify">
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
                      className="text-xs text-text-secondary flex items-start gap-2 text-justify"
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
                  <p className="text-xs text-text-secondary leading-relaxed text-justify">
                    {project.devRelevance}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <p className="text-[11px] font-bold text-accent mb-1">
                    Quality Assurance Scope
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed text-justify">
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

  const webProjectIds = ["harmony", "simamang", "simas", "casheye", "afenter-pcd"];
  const qaProjectIds = ["harmony", "simamang", "simas", "afenter-pcd"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "web") {
      return webProjectIds.includes(project.id);
    }
    if (filter === "qa") {
      return qaProjectIds.includes(project.id);
    }
    return true; // "all"
  });

  const filterTabs = [
    { id: "all", label: `All Projects (${projects.length})` },
    { id: "web", label: `Web Applications (${webProjectIds.length})` },
    { id: "qa", label: `Quality Assurance & Systems (${qaProjectIds.length})` },
  ];

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
            <span>Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Systems & Engineering Projects
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-6 text-justify">
            Web-based information systems, government digital workflows, and software quality
            assurance delivered for institutional, academic, and team-based initiatives.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
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
