import {
  FileDown,
  Mail,
  ExternalLink,
  ShieldCheck,
  GitBranch,
  Bug,
  Users,
  ClipboardCheck,
  Wrench,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import profile from "../../data/profile";
import projects from "../../data/projects";
import { certificates } from "../../data/skills";
import experience from "../../data/experience";
import deckData from "../../data/deckQaData";

function Slide({ children, className = "" }) {
  return (
    <div
      className={`deck-slide bg-surface flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-12 print:px-0 print:py-0 ${className}`}
    >
      {children}
    </div>
  );
}

function SlideHeader({ label, title }) {
  return (
    <div className="mb-4 sm:mb-6 lg:mb-8 print:mb-3">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1 print:mb-0.5 print:text-[10px]">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight print:text-2xl">
        {title}
      </h2>
    </div>
  );
}

const qaCertIds = [
  "Dasar Rekayasa Perangkat Lunak - Semester Genap, Teknik Informatika ITERA (2024/2025)",
  "Belajar Prinsip Pemrograman SOLID",
  "Belajar Dasar Manajemen Proyek",
  "Belajar Dasar Git dengan GitHub",
  "Belajar Dasar Structured Query Language (SQL)",
  "Tim Pengembang Website Harmony FTI ITERA",
];

function toViewLink(path) {
  if (path.includes("drive.google.com")) {
    const fileId = path.match(/id=([^&]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/view`;
    }
  }
  return path;
}

const roleFitIcons = {
  ShieldCheck,
  GitBranch,
  Bug,
  Users,
  ClipboardCheck,
};

const skillCategoryIcons = {
  Bug,
  FileText,
  Wrench,
};

const qaSkills = [
  {
    category: "Testing Techniques",
    icon: "Bug",
    items: [
      "Black Box Testing",
      "User Acceptance Testing (UAT)",
      "Equivalence Partitioning (EP)",
      "Boundary Value Analysis (BVA)",
      "Retesting",
      "Regression Testing",
    ],
  },
  {
    category: "QA Process & Documentation",
    icon: "FileText",
    items: [
      "Test Scenario Design",
      "Test Case Writing",
      "Expected vs Actual Result",
      "Bug Reporting & Documentation",
      "Testing Report",
      "Multi-User/Role Testing",
    ],
  },
  {
    category: "QA Tools & Environment",
    icon: "Wrench",
    items: [
      "Postman",
      "Jira",
      "Trello",
      "Git & GitHub",
      "VS Code",
      "Google Workspace",
    ],
  },
];

const qaExperienceIds = [
  "website-fakultas",
  "kominfo-internship",
  "hmif",
  "teaching-assistant",
];

export default function DeckQa() {
  const handlePrint = () => window.print();
  const filteredCerts = certificates.filter((c) => qaCertIds.includes(c.name));
  const filteredExperience = experience.filter((e) =>
    qaExperienceIds.includes(e.id)
  );

  return (
    <>
      {/* Print Toolbar */}
      <div className="print-hide fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-text truncate">
              QA Portfolio Deck
            </p>
            <p className="text-xs text-text-muted hidden sm:block">
              Use Ctrl+P or the button to save as PDF (Landscape, A4)
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mr-11 sm:mr-12 shrink-0">
            <a
              href="/"
              className="text-xs sm:text-sm text-text-muted hover:text-accent transition-colors"
            >
              ← Back
            </a>
            <a
              href="/deck-webdev"
              className="text-xs sm:text-sm text-text-muted hover:text-accent transition-colors"
            >
              Web Dev Deck →
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-accent text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors cursor-pointer"
            >
              <FileDown size={15} />
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="deck-container pt-16 print-pt-0">
        {/* ============ SLIDE 1: Cover ============ */}
        <Slide className="justify-center deck-print-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Foto profil */}
            <div className="shrink-0">
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-border shadow-lg print:w-32 print:h-32">
                  <img
                    src="/foto/profile.jpg"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl border-2 border-accent/25 -z-10 hidden sm:block print:hidden" />
              </div>
            </div>

            {/* Info Profil */}
            <div className="text-center lg:text-left flex-1 max-w-xl">
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2 print:text-[10px]">
                QA Portfolio
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-2 tracking-tight print:text-3xl">
                {profile.name}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary font-medium mb-1 print:text-sm">
                {deckData.headline}
              </p>
              <p className="text-xs sm:text-sm text-text-muted mb-4 print:text-xs print:mb-2">
                {deckData.tagline}
              </p>

              {/* Cover skill badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-5 print:mb-3 print:gap-1.5">
                {deckData.coverBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 text-xs font-medium text-accent bg-accent-lighter rounded-lg border border-accent/15 print:px-2 print:py-0.5 print:text-[10px]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Kontak ringkas */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1.5 text-xs text-text-muted print:text-[10px] print:gap-x-4">
                <span className="flex items-center gap-1.5">
                  <Mail size={13} className="text-accent shrink-0" />{" "}
                  {profile.links.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <LinkedinIcon size={13} className="text-accent shrink-0" />{" "}
                  linkedin.com/in/saktimujahid
                </span>
                <span className="flex items-center gap-1.5">
                  <ExternalLink size={13} className="text-accent shrink-0" />{" "}
                  sakti-mujahid.vercel.app
                </span>
              </div>
            </div>
          </div>
        </Slide>

        {/* ============ SLIDE 2: At a Glance ============ */}
        <Slide>
          <SlideHeader label="Overview" title="At a Glance" />

          {/* Short summary */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl mb-5 sm:mb-6 text-justify print:text-[11px] print:mb-3">
            {deckData.shortSummary}
          </p>

          {/* Featured metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-3 sm:gap-4 print:gap-2.5 mb-5 sm:mb-6 print:mb-3">
            {deckData.metrics.map((m) => (
              <div
                key={m.label}
                className="deck-metric-card p-4 sm:p-5 bg-bg rounded-xl border border-border text-center print:p-2.5"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-accent mb-1 print:text-xl">
                  {m.value}
                </p>
                <p className="text-xs font-semibold text-text mb-0.5 print:text-[10px]">
                  {m.label}
                </p>
                <p className="text-[11px] text-text-muted print:text-[9px]">
                  {m.context}
                </p>
              </div>
            ))}
          </div>

          {/* Academic credentials */}
          <div className="flex flex-wrap gap-2 text-xs text-text-muted print:gap-1.5">
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[10px]">
              {profile.university}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[10px]">
              {profile.major}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[10px]">
              {profile.semester}
            </span>
          </div>
        </Slide>

        {/* ============ SLIDE 3: Role Fit ============ */}
        <Slide>
          <SlideHeader label="Role Fit" title="Why I Fit This QA Role" />

          <p className="text-xs sm:text-sm text-text-secondary mb-4 sm:mb-5 max-w-3xl print:mb-2.5 print:text-xs">
            {deckData.roleFit.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 max-w-4xl">
            {deckData.roleFit.points.map((pt, i) => {
              const Icon = roleFitIcons[pt.icon] || ShieldCheck;
              return (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 bg-bg rounded-xl border border-border print:p-2.5"
                >
                  <div className="flex items-center gap-2.5 mb-2 print:mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center shrink-0 print:w-5 print:h-5">
                      <Icon
                        size={15}
                        className="text-accent"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-text print:text-[11px]">
                      {pt.requirement}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed text-justify print:text-[9.5px] print:leading-tight">
                    {pt.experience}
                  </p>
                </div>
              );
            })}
          </div>
        </Slide>

        {/* ============ SLIDE 4: Skills ============ */}
        <Slide>
          <SlideHeader label="Skills" title="QA Skills Overview" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4 sm:gap-5 print:gap-3 max-w-4xl">
            {qaSkills.map((group) => {
              const Icon = skillCategoryIcons[group.icon] || Bug;
              return (
                <div
                  key={group.category}
                  className="p-4 sm:p-5 bg-bg rounded-xl border border-border print:p-3"
                >
                  <div className="flex items-center gap-2 mb-3 print:mb-2">
                    <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center shrink-0 print:w-5 print:h-5">
                      <Icon
                        size={15}
                        className="text-accent"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-text print:text-xs">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[11px] font-medium text-text-secondary bg-surface rounded-lg border border-border-light print:px-2 print:py-0.5 print:text-[9.5px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>

        {/* ============ SLIDE 5: Featured Project — Harmony ============ */}
        <Slide>
          <SlideHeader label="Featured Project" title="Harmony FTI ITERA" />
          {(() => {
            const project = projects.find((p) => p.id === "harmony");
            const angle = deckData.projectAngles.harmony;
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4 max-w-4xl">
                <div>
                  {/* Screenshot Placeholder */}
                  <div className="w-full aspect-video bg-bg rounded-xl border border-border flex items-center justify-center mb-3 sm:mb-4 print:mb-2 overflow-hidden relative">
                    <div className="text-center p-4">
                      <ExternalLink
                        size={22}
                        className="text-accent mx-auto mb-1.5 opacity-80"
                      />
                      <p className="text-xs font-medium text-text mb-0.5 print:text-[10px]">
                        Correspondence Subsystem
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-accent hover:text-accent-hover font-medium underline print:text-[9px]"
                      >
                        harmony.fti.itera.ac.id ↗
                      </a>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-text-muted uppercase mb-1.5 print:text-[10px]">
                    Technologies & Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium text-accent bg-accent-lighter rounded print:px-1.5 print:text-[9px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-accent-lighter text-accent font-semibold text-xs mb-2.5 print:mb-1.5 print:text-[10px]">
                    {angle.highlight}
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 text-justify print:text-[10.5px] print:leading-relaxed print:mb-2.5">
                    {angle.summary}
                  </p>
                  <p className="text-xs font-semibold text-text-muted uppercase mb-1.5 print:text-[10px]">
                    Key QA Contributions
                  </p>
                  <ul className="space-y-1.5 print:space-y-1">
                    {angle.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="text-xs text-text-secondary flex items-start gap-2 text-justify print:text-[9.5px] print:leading-tight"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </Slide>

        {/* ============ SLIDE 6: Government Systems QA ============ */}
        <Slide>
          <SlideHeader
            label="Government Systems"
            title="SIMAMANG & SIMAS QA"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 sm:gap-5 print:gap-3 max-w-4xl">
            {["simamang", "simas"].map((id) => {
              const project = projects.find((p) => p.id === id);
              const angle = deckData.projectAngles[id];
              return (
                <div
                  key={id}
                  className="p-4 sm:p-5 bg-bg rounded-xl border border-border print:p-3"
                >
                  <div className="flex items-start justify-between mb-1.5 print:mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-text print:text-sm">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent shrink-0 ml-2"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-accent mb-2 print:text-[10px]">
                    {angle.highlight}
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3 text-justify print:text-[10px] print:leading-tight print:mb-2">
                    {angle.summary}
                  </p>
                  <ul className="space-y-1 mb-3 print:mb-2 print:space-y-0.5">
                    {angle.keyPoints.slice(0, 3).map((point, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-text-muted flex items-start gap-1.5 print:text-[9px] print:leading-tight"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1 border-t border-border-light">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[10px] font-medium text-accent bg-accent-lighter rounded print:text-[8px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>

        {/* ============ SLIDE 7: Experience & Certifications ============ */}
        <Slide>
          <SlideHeader
            label="Background"
            title="Experience & Certifications"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-5 lg:gap-6 print:gap-4 max-w-4xl">
            {/* Kolom Experience */}
            <div>
              <h3 className="text-xs font-semibold text-text-muted uppercase mb-2.5 print:mb-1.5 print:text-[10px]">
                Relevant Experience
              </h3>
              <div className="space-y-2 print:space-y-1.5">
                {filteredExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-2.5 sm:p-3 bg-bg rounded-lg border border-border print:p-2"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-text print:text-[11px]">
                      {exp.title}
                    </p>
                    <p className="text-[11px] text-accent print:text-[10px]">
                      {exp.organization}
                    </p>
                    <p className="text-[11px] text-text-muted print:text-[9px]">
                      {exp.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Sertifikat */}
            <div>
              <h3 className="text-xs font-semibold text-text-muted uppercase mb-2.5 print:mb-1.5 print:text-[10px]">
                QA & Software Engineering Certifications
              </h3>
              <div className="space-y-2 print:space-y-1.5">
                {filteredCerts.map((cert, i) => (
                  <a
                    key={i}
                    href={toViewLink(cert.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 sm:p-3 bg-bg rounded-lg border border-border hover:border-accent/40 transition-colors print:p-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-text leading-tight line-clamp-2 print:text-[10px]">
                        {cert.name}
                      </p>
                      <ExternalLink
                        size={12}
                        className="text-text-muted shrink-0 mt-0.5 print:hidden"
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-accent mt-0.5 print:text-[9px]">
                      {cert.category}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* ============ SLIDE 8: Closing / Contact ============ */}
        <Slide className="justify-center items-center text-center deck-print-center">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3 print:text-3xl">
            Thank You
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mb-6 sm:mb-8 max-w-lg print:mb-4 print:text-xs">
            {deckData.closingText}
          </p>

          <div className="flex flex-col items-center gap-2.5 sm:gap-3 text-xs sm:text-sm print:gap-2 print:text-xs">
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <Mail size={15} />
              {profile.links.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <LinkedinIcon size={15} />
              linkedin.com/in/saktimujahid
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <GithubIcon size={15} />
              github.com/Sakti-122140123
            </a>
            <a
              href={profile.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <ExternalLink size={15} />
              sakti-mujahid.vercel.app
            </a>
          </div>
        </Slide>
      </div>
    </>
  );
}
