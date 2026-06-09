import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import projects from "../../data/projects";

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-surface rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-colors"
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-text mb-1">
              {project.name}
            </h3>
            <p className="text-xs text-text-muted font-medium">{project.role}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors shrink-0 ml-3"
              aria-label={`Visit ${project.name}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium text-accent bg-accent-lighter rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
        >
          {expanded ? "Show less" : "View details"}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border-light space-y-4">
              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1.5">
                  Description
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* What I Learned */}
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1.5">
                  What I Learned
                </h4>
                <ul className="space-y-1">
                  {project.learned.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PM Relevance */}
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1.5">
                  Relevance to Project Management
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.pmRelevance}
                </p>
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Visit Project
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Featured Work
          </h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            A selection of projects demonstrating my experience in web
            development, system design, documentation, and team collaboration.
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
