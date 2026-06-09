import { FileDown, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import profile from "../../data/profile";
import projects from "../../data/projects";
import { skills, certificates } from "../../data/skills";
import experience from "../../data/experience";

function Slide({ children, className = "" }) {
  return (
    <div
      className={`deck-slide bg-white flex flex-col justify-center px-16 py-12 ${className}`}
    >
      {children}
    </div>
  );
}

function SlideHeader({ label, title }) {
  return (
    <div className="mb-8">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-text leading-tight">{title}</h2>
    </div>
  );
}

export default function PortfolioDeck() {
  const handlePrint = () => window.print();
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Print Button — hidden during print */}
      <div className="print-hide fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-text">Portfolio Deck</p>
            <p className="text-xs text-text-muted">
              Use Ctrl+P or the button to save as PDF (Landscape, A4)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              ← Back to Site
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              <FileDown size={16} />
              Export as PDF
            </button>
          </div>
        </div>
      </div>

      <div className="deck-container pt-16 print-pt-0">
        {/* ============ SLIDE 1: Cover ============ */}
        <Slide className="justify-center items-center text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl font-bold text-text mb-3 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-text-secondary mb-2 max-w-xl">
            {profile.headline}
          </p>
          <p className="text-sm text-text-muted mb-8 max-w-lg">
            {profile.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span>{profile.links.email}</span>
            <span>linkedin.com/in/saktimujahid</span>
            <span>sakti-mujahid.vercel.app</span>
          </div>
        </Slide>

        {/* ============ SLIDE 2: Professional Summary ============ */}
        <Slide>
          <SlideHeader label="About" title="Professional Summary" />
          <div className="space-y-4 max-w-3xl">
            {profile.about.map((p, i) => (
              <p key={i} className="text-base text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex gap-4 text-xs text-text-muted">
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border">
              {profile.university}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border">
              {profile.major}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border">
              {profile.semester}
            </span>
          </div>
        </Slide>

        {/* ============ SLIDE 3: Why I Fit This Role ============ */}
        <Slide>
          <SlideHeader
            label="Role Fit"
            title="Why I Fit This Role"
          />
          <p className="text-xs text-text-muted mb-1">
            Target: {profile.roleFit.targetRole} — {profile.roleFit.targetCompany}
          </p>
          <p className="text-sm text-text-secondary mb-6 max-w-3xl">
            {profile.roleFit.intro}
          </p>
          <div className="grid grid-cols-1 gap-3 max-w-3xl">
            {profile.roleFit.points.map((pt, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-bg rounded-lg border border-border"
              >
                <span className="text-accent font-bold text-sm mt-0.5 shrink-0">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-sm font-semibold text-text mb-0.5">
                    {pt.requirement}
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {pt.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* ============ SLIDE 4: Skills Overview ============ */}
        <Slide>
          <SlideHeader label="Skills" title="Skills Overview" />
          <div className="grid grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-text mb-3">
                  {group.category}
                </h3>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="text-xs text-text-secondary px-2.5 py-1.5 bg-bg rounded border border-border"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* ============ SLIDES 5-8: Projects ============ */}
        {featured.map((project) => (
          <Slide key={project.id}>
            <SlideHeader label="Project" title={project.name} />
            <div className="grid grid-cols-2 gap-8 max-w-4xl">
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1">
                  Role
                </p>
                <p className="text-sm text-text-secondary mb-4">
                  {project.role}
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1">
                  Description
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[11px] font-medium text-accent bg-accent-lighter rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1">
                  Key Contributions
                </p>
                <ul className="space-y-1.5 mb-4">
                  {project.keyContribution.map((c, i) => (
                    <li
                      key={i}
                      className="text-xs text-text-secondary flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1">
                  PM Relevance
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.pmRelevance}
                </p>
              </div>
            </div>
          </Slide>
        ))}

        {/* ============ SLIDE: Experience & Certifications ============ */}
        <Slide>
          <SlideHeader
            label="Experience"
            title="Experience & Certifications"
          />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-text mb-3">
                Experience & Activities
              </h3>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-3 bg-bg rounded-lg border border-border"
                  >
                    <p className="text-sm font-semibold text-text">
                      {exp.title}
                    </p>
                    <p className="text-xs text-accent">{exp.organization}</p>
                    <p className="text-xs text-text-muted">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text mb-3">
                Certifications & Programs
              </h3>
              <div className="space-y-3">
                {certificates.map((cert, i) => (
                  <div
                    key={i}
                    className="p-3 bg-bg rounded-lg border border-border"
                  >
                    <p className="text-sm font-semibold text-text">
                      {cert.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* ============ SLIDE: Contact & Closing ============ */}
        <Slide className="justify-center items-center text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl font-bold text-text mb-3">Thank You</h2>
          <p className="text-base text-text-secondary mb-8 max-w-lg">
            Interested in discussing internship opportunities, project
            coordination support, or collaboration? I would love to hear from
            you.
          </p>
          <div className="flex flex-col items-center gap-3 text-sm">
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <Mail size={16} />
              {profile.links.email}
            </a>
            <a
              href={profile.links.linkedin}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} />
              linkedin.com/in/saktimujahid
            </a>
            <a
              href={profile.links.github}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <GithubIcon size={16} />
              github.com/Sakti-122140123
            </a>
            <a
              href={profile.links.portfolio}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              sakti-mujahid.vercel.app
            </a>
          </div>
        </Slide>
      </div>
    </>
  );
}
