import { FileDown, Mail, ExternalLink } from "lucide-react";
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
      <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight print:text-2xl">{title}</h2>
    </div>
  );
}

const qaProjectIds = ["harmony", "simamang", "simas"];
const qaCertIds = [
  "Dasar Rekayasa Perangkat Lunak - Semester Genap, Teknik Informatika ITERA (2024/2025)",
  "Staff Divisi Pengembangan dan Pelatihan Keprofesian HMIF",
  "Pengantar Komputer dan Software I - Semester Ganjil, ITERA (2024/2025)",
  "Matriks dan Ruang Vektor - Semester Ganjil, Teknik Informatika ITERA (2024/2025)",
  "Teori Bahasa Formal dan Otomata - Semester Ganjil, Teknik Informatika ITERA (2024/2025)",
];

function toViewLink(path) {
  if (path.includes("drive.google.com")) {
    return path.replace("https://drive.google.com/uc?export=download&id=", "https://drive.google.com/file/d/").replace(/$/, "/view");
  }
  return path;
}

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
    category: "QA Tools",
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

const qaExperienceIds = ["website-fakultas", "kominfo-internship", "hmif", "teaching-assistant"];

export default function DeckQa() {
  const handlePrint = () => window.print();
  const featured = projects.filter((p) => qaProjectIds.includes(p.id));
  const filteredCerts = certificates.filter((c) => qaCertIds.includes(c.name));
  const filteredExperience = experience.filter((e) => qaExperienceIds.includes(e.id));

  return (
    <>
      {/* Print Button — hidden during print */}
      <div className="print-hide fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-text truncate">QA Portfolio Deck</p>
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
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-accent text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              <FileDown size={15} />
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="deck-container pt-16 print-pt-0">
        {/* ============ SLIDE 1: Cover ============ */}
        <Slide className="justify-center items-center text-center deck-print-center">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            QA Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-3 tracking-tight print:text-4xl">
            {profile.name}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-2 max-w-xl print:text-base">
            {deckData.headline}
          </p>
          <p className="text-xs sm:text-sm text-text-muted mb-6 sm:mb-8 max-w-lg print:mb-4 print:text-xs">
            {deckData.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-text-muted print:gap-4 print:text-xs">
            <span>{profile.links.email}</span>
            <span>linkedin.com/in/saktimujahid</span>
            <span>sakti-mujahid.vercel.app</span>
          </div>
        </Slide>

        {/* ============ SLIDE 2: Professional Summary ============ */}
        <Slide>
          <SlideHeader label="About" title="Professional Summary" />
          <div className="space-y-3 sm:space-y-4 max-w-3xl print:space-y-2">
            {deckData.about.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-text-secondary leading-relaxed text-justify print:text-xs print:leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-4 text-xs text-text-muted print:mt-4 print:gap-2">
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[11px]">
              {profile.university}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[11px]">
              {profile.major}
            </span>
            <span className="px-3 py-1.5 bg-bg rounded-lg border border-border print:px-2 print:py-1 print:text-[11px]">
              {profile.semester}
            </span>
          </div>
        </Slide>

        {/* ============ SLIDE 3: Why I Fit This Role ============ */}
        <Slide>
          <SlideHeader
            label="Role Fit"
            title="Why I Fit This QA Role"
          />

          <p className="text-xs sm:text-sm text-text-secondary mb-4 sm:mb-6 max-w-3xl text-justify print:mb-2.5 print:text-xs">
            {deckData.roleFit.intro}
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:gap-3 max-w-3xl print:gap-1.5">
            {deckData.roleFit.points.map((pt, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-bg rounded-lg border border-border print:p-2"
              >
                <span className="text-accent font-bold text-xs sm:text-sm mt-0.5 shrink-0 print:text-xs">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-text mb-0.5 print:text-[11px]">
                    {pt.requirement}
                  </p>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed text-justify print:text-[10px] print:leading-tight">
                    {pt.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* ============ SLIDE 4: Skills Overview ============ */}
        <Slide>
          <SlideHeader label="Skills" title="QA Skills Overview" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4 sm:gap-6 print:gap-4">
            {qaSkills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-text mb-2.5 sm:mb-3 print:mb-1.5 print:text-xs">
                  {group.category}
                </h3>
                <div className="space-y-1.5 print:space-y-1">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="text-xs text-text-secondary px-2.5 py-1.5 bg-bg rounded border border-border print:px-2 print:py-0.5 print:text-[10px] print:leading-tight"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* ============ SLIDES 5-6: Projects ============ */}
        {featured.map((project) => (
          <Slide key={project.id}>
            <SlideHeader label="Project" title={project.name} />
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 lg:gap-8 print:gap-5 max-w-4xl">
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1 print:text-[10px]">
                  Role
                </p>
                <p className="text-sm text-text-secondary mb-3 sm:mb-4 text-justify print:mb-2 print:text-xs">
                  {project.role}
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1 print:text-[10px]">
                  Description
                </p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 sm:mb-4 text-justify print:mb-2 print:text-[10.5px] print:leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1 print:text-[10px]">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[11px] font-medium text-accent bg-accent-lighter rounded print:px-1.5 print:py-0.5 print:text-[9.5px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1 print:text-[10px]">
                  Key Contributions
                </p>
                <ul className="space-y-1.5 mb-3 sm:mb-4 print:mb-2 print:space-y-1">
                  {project.keyContribution.map((c, i) => (
                    <li
                      key={i}
                      className="text-xs text-text-secondary flex items-start gap-2 text-justify print:text-[10px] print:leading-tight"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-text-muted uppercase mb-1 print:text-[10px]">
                  QA Relevance
                </p>
                <p className="text-xs text-text-secondary leading-relaxed text-justify print:text-[10px] print:leading-relaxed">
                  {project.qaRelevance}
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
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 lg:gap-8 print:gap-6">
            <div>
              <h3 className="text-xs font-semibold text-text-muted uppercase mb-2 sm:mb-3 print:mb-2 print:text-xs">
                Experience & Activities
              </h3>
              <div className="space-y-2 sm:space-y-2.5 print:space-y-1.5">
                {filteredExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-2.5 sm:p-3 bg-bg rounded-lg border border-border print:p-2"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-text print:text-[11px] print:leading-tight">
                      {exp.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-accent print:text-[10px]">{exp.organization}</p>
                    <p className="text-[11px] sm:text-xs text-text-muted print:text-[9px]">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-text-muted uppercase mb-2 sm:mb-3 print:mb-2 print:text-xs">
                Certifications
              </h3>
              <div className="space-y-2 sm:space-y-2.5 print:space-y-1.5">
                {filteredCerts.map((cert, i) => (
                  <a
                    key={i}
                    href={toViewLink(cert.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 sm:p-3 bg-bg rounded-lg border border-border hover:border-accent/30 transition-colors print:p-2"
                  >
                    <p className="text-xs font-semibold text-text leading-tight line-clamp-2 print:text-[10.5px] print:leading-tight">
                      {cert.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* ============ SLIDE: Contact & Closing ============ */}
        <Slide className="justify-center items-center text-center deck-print-center">
          <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3 print:text-3xl">Thank You</h2>
          <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8 max-w-lg print:mb-4 print:text-xs">
            {deckData.closingText}
          </p>
          <div className="flex flex-col items-center gap-3 text-xs sm:text-sm print:gap-2 print:text-xs">
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
