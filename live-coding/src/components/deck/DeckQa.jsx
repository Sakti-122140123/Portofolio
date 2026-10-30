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
  Code2,
  CheckCircle2,
  GraduationCap,
  Award,
  Layers,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import ThemeToggle from "../common/ThemeToggle";
import profile from "../../data/profile";
import projects from "../../data/projects";
import { certificates } from "../../data/skills";
import experience from "../../data/experience";
import deckData from "../../data/deckQaData";

function Slide({ children, className = "" }) {
  return (
    <div
      className={`deck-slide bg-surface px-6 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-7 print:px-0 print:py-0 ${className}`}
    >
      {children}
    </div>
  );
}

function SlideHeader({ label, title, subtitle }) {
  return (
    <div className="mb-3 sm:mb-4 lg:mb-4 print:mb-2 shrink-0">
      <div className="flex items-center gap-2 mb-1 print:mb-0.5">
        <span className="h-2 w-2 rounded-full bg-accent inline-block" />
        <p className="text-accent text-[11px] sm:text-xs font-bold uppercase tracking-widest print:text-[9.5px]">
          {label}
        </p>
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-text leading-tight print:text-[21px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-text-muted mt-1 print:text-[10px] print:mt-0.5 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SlideFooter({ slideNumber, totalSlides = 8 }) {
  return (
    <div className="mt-auto pt-2.5 sm:pt-3 print:pt-1.5 border-t border-border flex items-center justify-between text-[10px] sm:text-[11px] text-text-muted print:text-[8.5px] shrink-0">
      <span className="font-medium text-text-secondary">
        {profile.name} — Quality Assurance & Software Testing Portfolio
      </span>
      <span className="font-semibold text-accent">
        {slideNumber} / {totalSlides}
      </span>
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
  Code2,
};

const skillCategoryIcons = {
  Bug,
  FileText,
  Wrench,
};

const detailedSkills = [
  {
    category: "Testing Methodologies & Types",
    icon: "Bug",
    items: [
      "Black Box Testing",
      "User Acceptance Testing (UAT)",
      "Equivalence Partitioning (EP)",
      "Boundary Value Analysis (BVA)",
      "Retesting & Verification",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "Negative Testing & Edge Cases",
    ],
  },
  {
    category: "STLC, Process & Documentation",
    icon: "FileText",
    items: [
      "Test Scenario Design",
      "Detailed Test Case Authoring",
      "Expected vs Actual Result",
      "Bug Reporting & Defect Lifecycle",
      "Multi-Role Permission Matrix",
      "Traceability & Test Coverage",
      "Test Summary Reporting",
      "Acceptance Criteria Review",
    ],
  },
  {
    category: "QA Tools & Environment",
    icon: "Wrench",
    items: [
      "Postman (API Testing)",
      "Jira (Issue & Defect Tracking)",
      "Trello (Agile Kanban)",
      "Git & GitHub (Version Control)",
      "VS Code & Browser DevTools",
      "MySQL / SQL Database Queries",
      "Google Workspace & Spreadsheets",
      "Vercel Deployment Testing",
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
      {/* Responsive Print Toolbar */}
      <div className="print-hide fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
          {/* Sisi Kiri: Branding & Context (Responsif) */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="/"
              className="text-base sm:text-lg font-black text-text tracking-tight hover:text-accent transition-colors shrink-0"
              title="Return to Main Site"
            >
              SMI<span className="text-accent">.</span>
            </a>
            <span className="hidden xs:inline-block h-4 w-px bg-border shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 text-[10.5px] sm:text-xs font-bold bg-accent-lighter text-accent rounded-md shrink-0">
                  QA Deck
                </span>
                <span className="text-xs sm:text-sm font-semibold text-text truncate hidden md:inline">
                  — {profile.name}
                </span>
              </div>
              <p className="text-[10px] text-text-muted hidden lg:block truncate">
                Landscape A4 · Optimized for HR & Technical Recruiter Review
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Action Buttons, Switch Deck, Export, & Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Tombol Back ke Home */}
            <a
              href="/"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-xs text-text-secondary hover:text-accent hover:bg-bg rounded-lg border border-border transition-colors font-medium shrink-0"
              title="Back to Home"
            >
              <ArrowLeft size={13} />
              <span className="hidden sm:inline">Home</span>
            </a>

            {/* Tombol ke Web Dev Deck (SELALU MUNCUL, TIDAK HILANG LAGI) */}
            <a
              href="/deck-webdev"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-xs text-text-secondary hover:text-accent hover:bg-bg rounded-lg border border-border transition-colors font-medium shrink-0"
              title="Switch to Web Developer Deck"
            >
              <span className="hidden sm:inline">Web Dev Deck</span>
              <span className="sm:hidden">Web Dev</span>
              <ArrowRight size={13} />
            </a>

            {/* Tombol Export PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent-hover transition-colors cursor-pointer shadow-xs active:scale-95 shrink-0"
              title="Export as Landscape A4 PDF"
            >
              <FileDown size={14} />
              <span className="hidden sm:inline">Export PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            {/* Tombol Dark Mode / Theme Toggle (SEJAJAR SEMPURNA DALAM NAVBAR) */}
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="deck-container pt-16 print-pt-0">
        {/* ========================================================================= */}
        {/* SLIDE 1: Cover                                                            */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-center my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 print:grid-cols-12 gap-8 lg:gap-10 print:gap-8 items-center">
              {/* Kolom Kiri: Foto Profil */}
              <div className="lg:col-span-4 print:col-span-4 flex flex-col items-center lg:items-start print:items-start">
                <div className="relative">
                  <div className="w-44 h-56 sm:w-52 sm:h-64 print:w-44 print:h-56 rounded-2xl overflow-hidden border-2 border-border shadow-md print:shadow-none bg-slate-100">
                    <img
                      src="/foto/profile.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border-2 border-accent/30 -z-10 hidden sm:block print:hidden" />
                </div>
                <div className="mt-3.5 px-3 py-1.5 rounded-lg bg-bg border border-border text-center print:text-left w-44 sm:w-52 print:w-44">
                  <p className="text-[10.5px] font-semibold text-accent print:text-[9.5px]">
                    Open to QA Opportunities
                  </p>
                  <p className="text-[9.5px] text-text-muted print:text-[8.5px]">
                    Jakarta, Indonesia · Remote Available
                  </p>
                </div>
              </div>

              {/* Kolom Kanan: Kredensial & Headline */}
              <div className="lg:col-span-8 print:col-span-8 text-center lg:text-left print:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lighter border border-accent/20 mb-3 print:mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse print:animate-none" />
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider print:text-[10px]">
                    Quality Assurance Portfolio · 2026
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight mb-2 print:text-[34px] print:leading-tight">
                  {profile.name}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-accent font-semibold mb-2 print:text-[16px]">
                  {deckData.headline}
                </p>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5 print:text-[11.5px] print:mb-3.5 max-w-2xl text-justify lg:text-left print:text-left">
                  {deckData.tagline}. Focused on functional verification, black-box testing techniques, structured STLC documentation, and cross-functional defect resolution.
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start print:justify-start gap-1.5 sm:gap-2 mb-5 print:mb-4">
                  {deckData.coverBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-xs font-semibold text-text-secondary bg-bg rounded-lg border border-border print:px-2 print:py-0.5 print:text-[10px]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* 3 Quick Facts Grid */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5 print:mb-3 max-w-xl text-left">
                  <div className="p-2.5 sm:p-3 bg-bg rounded-xl border border-border print:p-2">
                    <p className="text-[10px] text-text-muted font-medium uppercase print:text-[8.5px]">Education</p>
                    <p className="text-xs font-bold text-text mt-0.5 print:text-[10.5px]">CS Graduate</p>
                    <p className="text-[10px] text-accent print:text-[9px]">ITERA · GPA 3.56</p>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-bg rounded-xl border border-border print:p-2">
                    <p className="text-[10px] text-text-muted font-medium uppercase print:text-[8.5px]">Focus</p>
                    <p className="text-xs font-bold text-text mt-0.5 print:text-[10.5px]">Black Box & UAT</p>
                    <p className="text-[10px] text-accent print:text-[9px]">EP, BVA, Retest</p>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-bg rounded-xl border border-border print:p-2">
                    <p className="text-[10px] text-text-muted font-medium uppercase print:text-[8.5px]">Core Tools</p>
                    <p className="text-xs font-bold text-text mt-0.5 print:text-[10.5px]">Postman, Jira</p>
                    <p className="text-[10px] text-accent print:text-[9px]">Git, MySQL, Trello</p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-wrap justify-center lg:justify-start print:justify-start gap-x-5 gap-y-1.5 text-xs text-text-muted print:text-[10px]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail size={13} className="text-accent shrink-0" /> {profile.links.email}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <LinkedinIcon size={13} className="text-accent shrink-0" /> linkedin.com/in/saktimujahid
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <ExternalLink size={13} className="text-accent shrink-0" /> sakti-mujahid.vercel.app
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SlideFooter slideNumber={1} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 2: At a Glance & Testing Impact                                     */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Overview"
              title="At a Glance: Executive Summary & Testing Impact"
              subtitle="Demonstrated QA experience across academic and government production systems with measurable validation outcomes."
            />

            {/* 4 Featured Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-3 sm:gap-4 print:gap-3 my-2 print:my-1.5">
              {deckData.metrics.map((m) => (
                <div
                  key={m.label}
                  className="deck-metric-card p-4 sm:p-4.5 bg-bg rounded-xl border border-border text-left print:p-3"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="text-2xl sm:text-3xl font-black text-accent tracking-tight print:text-[23px]">
                      {m.value}
                    </p>
                    <span className="h-2 w-2 rounded-full bg-accent/40" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-text leading-snug print:text-[11px]">
                    {m.label}
                  </p>
                  <p className="text-[11px] text-accent font-medium mt-0.5 print:text-[9.5px]">
                    {m.context}
                  </p>
                  <p className="text-[10px] text-text-muted mt-1 print:text-[8.5px] leading-tight">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Section: Summary & Core Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 print:grid-cols-12 gap-4 sm:gap-5 print:gap-3 my-2 print:my-1.5 items-stretch">
              {/* Kolom Kiri: Ringkasan Profil */}
              <div className="lg:col-span-7 print:col-span-7 p-4 sm:p-5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3">
                <p className="text-xs font-bold text-text uppercase tracking-wider mb-2 print:text-[10px] flex items-center gap-1.5">
                  <FileText size={14} className="text-accent" /> Professional Background & Focus
                </p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-justify print:text-[10.5px] print:leading-normal mb-3">
                  {deckData.shortSummary}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-text-muted print:gap-1.5 print:text-[9.5px] pt-2 border-t border-border-light">
                  <span className="font-semibold text-text">Target Roles:</span>
                  <span className="px-2 py-0.5 bg-surface rounded border border-border">Manual QA</span>
                  <span className="px-2 py-0.5 bg-surface rounded border border-border">QA Engineer</span>
                  <span className="px-2 py-0.5 bg-surface rounded border border-border">Software Tester</span>
                </div>
              </div>

              {/* Kolom Kanan: 4 Core Competencies */}
              <div className="lg:col-span-5 print:col-span-5 p-4 sm:p-5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3">
                <p className="text-xs font-bold text-text uppercase tracking-wider mb-2 print:text-[10px] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-accent" /> Key Testing Principles
                </p>
                <div className="space-y-2 print:space-y-1.5 text-xs print:text-[10px]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-tight">
                      <strong className="text-text">Equivalence Partitioning & BVA:</strong> Eliminating test redundancy while catching critical edge-case defects.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-tight">
                      <strong className="text-text">Multi-Role Journey Validation:</strong> Verifying data access boundaries across Admin, Faculty, and Student personas.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-tight">
                      <strong className="text-text">Defect Traceability & Retesting:</strong> Writing clear reproduction steps to ensure rapid developer turnaround.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Academic & Institutional Credential Bar */}
            <div className="p-3 bg-bg rounded-xl border border-border flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted print:p-2 print:text-[9.5px]">
              <div className="flex items-center gap-2">
                <GraduationCap size={15} className="text-accent" />
                <span className="font-semibold text-text">{profile.university}</span>
                <span>— {profile.major}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-accent-lighter text-accent font-bold rounded-md">
                  GPA: 3.56 / 4.00
                </span>
                <span>Graduated with Honors Background</span>
              </div>
            </div>
          </div>
          <SlideFooter slideNumber={2} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 3: Role Fit (6 Pillars Grid)                                        */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Role Fit"
              title="Why I Am Prepared for This QA Role"
              subtitle={deckData.roleFit.intro}
            />

            {/* 6 Grid Cards (3x2) filling canvas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-3.5 sm:gap-4 print:gap-2.5 my-auto">
              {deckData.roleFit.points.map((pt, i) => {
                const Icon = roleFitIcons[pt.icon] || ShieldCheck;
                return (
                  <div
                    key={i}
                    className="p-4 sm:p-4.5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5 print:mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-accent-lighter flex items-center justify-center shrink-0 print:w-6 print:h-6">
                          <Icon size={16} className="text-accent" strokeWidth={2} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-text leading-snug print:text-[11px]">
                          {pt.requirement}
                        </h3>
                      </div>
                      <p className="text-[11.5px] sm:text-xs text-text-secondary leading-relaxed text-justify print:text-[10px] print:leading-relaxed">
                        {pt.experience}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-border-light flex items-center justify-between text-[10px] text-accent font-semibold print:text-[8.5px]">
                      <span>Verified in Production</span>
                      <span>STLC Pillar #{i + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <SlideFooter slideNumber={3} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 4: Skills & Testing Toolkit Architecture                            */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Skills & Toolkit"
              title="Comprehensive QA Competencies & Tooling"
              subtitle="Methodologies, processes, and tools practiced across academic and governmental testing lifecycles."
            />

            {/* 3 Main Skill Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-4 sm:gap-5 print:gap-3 my-2 print:my-1.5">
              {detailedSkills.map((group) => {
                const Icon = skillCategoryIcons[group.icon] || Bug;
                return (
                  <div
                    key={group.category}
                    className="p-4 sm:p-5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3 print:mb-2 pb-2.5 border-b border-border-light">
                        <div className="w-8 h-8 rounded-lg bg-accent-lighter flex items-center justify-center shrink-0 print:w-6 print:h-6">
                          <Icon size={16} className="text-accent" strokeWidth={2} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-text print:text-[11.5px]">
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
                  </div>
                );
              })}
            </div>

            {/* Testing Workflow Pipeline Bar (Filling the bottom canvas) */}
            <div className="p-3.5 sm:p-4 bg-bg rounded-xl border border-border print:p-2.5">
              <p className="text-[10.5px] font-bold text-text uppercase tracking-wider mb-2 print:text-[9.5px] flex items-center gap-1.5">
                <Layers size={13} className="text-accent" /> End-to-End Testing Workflow Cycle
              </p>
              <div className="grid grid-cols-5 gap-2 text-center text-xs print:text-[9px]">
                <div className="p-2 bg-surface rounded-lg border border-border-light">
                  <p className="font-bold text-accent">1. Requirements</p>
                  <p className="text-[10px] text-text-muted mt-0.5 print:text-[8px]">Specs & Acceptance Criteria</p>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-border-light">
                  <p className="font-bold text-accent">2. Test Design</p>
                  <p className="text-[10px] text-text-muted mt-0.5 print:text-[8px]">Scenarios, EP & BVA Cases</p>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-border-light">
                  <p className="font-bold text-accent">3. Test Execution</p>
                  <p className="text-[10px] text-text-muted mt-0.5 print:text-[8px]">Positive, Negative & Roles</p>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-border-light">
                  <p className="font-bold text-accent">4. Defect Logging</p>
                  <p className="text-[10px] text-text-muted mt-0.5 print:text-[8px]">Reproduction, Retest, Regress</p>
                </div>
                <div className="p-2 bg-surface rounded-lg border border-border-light">
                  <p className="font-bold text-accent">5. UAT & Release</p>
                  <p className="text-[10px] text-text-muted mt-0.5 print:text-[8px]">User Sign-off & Reports</p>
                </div>
              </div>
            </div>
          </div>
          <SlideFooter slideNumber={4} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 5: Featured Project — Harmony FTI ITERA (GAMBAR TIDAK TERPOTONG)   */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Featured Project"
              title="Harmony FTI ITERA — Academic Subsystem QA"
              subtitle="Integrated academic correspondence system serving 11,000+ students and 300+ faculty members across Fakultas Teknologi Industri."
            />

            {/* Top: Browser Mockup Frame dengan Screenshot Harmony 100% UTUH */}
            <div className="w-full bg-slate-900 rounded-xl border border-border overflow-hidden shadow-sm my-1 print:my-1">
              {/* Browser Window Header */}
              <div className="px-3.5 py-1.5 bg-slate-800/90 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 print:text-[9.5px]">
                    https://harmony.fti.itera.ac.id
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold print:text-[8.5px]">
                    Production Deployed
                  </span>
                </div>
              </div>

              {/* Screenshot Asli (Aspect Ratio 1024 / 475) -> 100% Tampak Utuh Tanpa Terpotong */}
              <div className="w-full aspect-[1024/475] bg-black">
                <img
                  src="/projects/harmony.jpg"
                  alt="Harmony FTI ITERA UI Full Screenshot"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Bottom: 3 Balanced Analytical Information Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-3.5 sm:gap-4 print:gap-2.5 mt-2 print:mt-1.5">
              {/* Kolom 1: Project & Tech Stack */}
              <div className="p-3.5 sm:p-4 bg-bg rounded-xl border border-border print:p-2.5">
                <p className="text-xs font-bold text-text uppercase tracking-wider mb-1.5 print:text-[10px]">
                  System Context & Role
                </p>
                <p className="text-xs text-text-secondary leading-relaxed mb-3 print:text-[9.5px] print:leading-tight">
                  <strong className="text-text">Role:</strong> Quality Assurance & Developer.<br />
                  Academic correspondence workflow handling formal document approvals, student submissions, and deanery sign-offs.
                </p>
                <p className="text-[10.5px] font-semibold text-text-muted uppercase mb-1 print:text-[8.5px]">
                  Tech & Testing Stack
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Postman", "Laravel", "React", "MySQL", "Trello"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10.5px] font-medium text-accent bg-accent-lighter rounded print:text-[8.5px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Kolom 2: QA Focus & Techniques */}
              <div className="p-3.5 sm:p-4 bg-bg rounded-xl border border-border print:p-2.5">
                <p className="text-xs font-bold text-text uppercase tracking-wider mb-1.5 print:text-[10px]">
                  Testing Scope & Methods
                </p>
                <ul className="space-y-1.5 text-xs text-text-secondary print:text-[9.5px] print:space-y-1">
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Applied Equivalence Partitioning & Boundary Value Analysis.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Tested multi-role permission boundaries (Admin, Faculty, Student).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Input/process/output validation with Postman API tests.</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Quantifiable Impact */}
              <div className="p-3.5 sm:p-4 bg-bg rounded-xl border border-border print:p-2.5">
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1.5 print:text-[10px]">
                  Measurable QA Results
                </p>
                <div className="space-y-2 print:space-y-1.5">
                  <div className="flex items-baseline justify-between p-2 bg-surface rounded-lg border border-border-light">
                    <span className="text-xs font-semibold text-text print:text-[10px]">Black-Box Pass Rate</span>
                    <span className="text-base font-black text-accent print:text-sm">100%</span>
                  </div>
                  <div className="flex items-baseline justify-between p-2 bg-surface rounded-lg border border-border-light">
                    <span className="text-xs font-semibold text-text print:text-[10px]">UAT Stakeholder Score</span>
                    <span className="text-base font-black text-accent print:text-sm">88.57%</span>
                  </div>
                  <p className="text-[10px] text-text-muted print:text-[8.5px] leading-tight">
                    Executed full retesting after fixes with zero regression leakage prior to production deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SlideFooter slideNumber={5} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 6: Government Systems QA — SIMAMANG & SIMAS                         */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Government Systems"
              title="Dinas Kominfo Kota Bandar Lampung — Production QA"
              subtitle="Ensuring operational reliability, document security, and access control integrity for local government digital services."
            />

            {/* 2 Big Cards Grid Filling the Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 sm:gap-5 print:gap-3 my-auto">
              {/* Kartu SIMAMANG */}
              {(() => {
                const project = projects.find((p) => p.id === "simamang");
                const angle = deckData.projectAngles.simamang;
                return (
                  <div className="p-4 sm:p-5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3.5">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-[10.5px] font-bold text-accent uppercase tracking-wider print:text-[9px]">
                            Public & Administrative Service
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-text print:text-sm">
                            {project.name} — Internship Management System
                          </h3>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent shrink-0 p-1 rounded-md bg-surface border border-border"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      <div className="inline-block px-2.5 py-1 rounded bg-accent-lighter text-accent font-semibold text-xs mb-3 print:text-[9.5px] print:mb-2">
                        {angle.highlight}
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed mb-3.5 text-justify print:text-[10px] print:leading-relaxed">
                        {angle.summary}
                      </p>

                      <p className="text-[11px] font-bold text-text uppercase tracking-wider mb-1.5 print:text-[9px]">
                        Key QA Activities:
                      </p>
                      <ul className="space-y-1.5 print:space-y-1 mb-4">
                        {angle.keyPoints.map((point, i) => (
                          <li
                            key={i}
                            className="text-xs text-text-secondary flex items-start gap-2 print:text-[9.5px] print:leading-tight"
                          >
                            <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2.5 border-t border-border-light flex flex-wrap items-center justify-between gap-1">
                      <span className="text-[10px] text-text-muted uppercase font-semibold print:text-[8px]">
                        Stack:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-medium text-accent bg-accent-lighter rounded print:text-[8px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Kartu SIMAS */}
              {(() => {
                const project = projects.find((p) => p.id === "simas");
                const angle = deckData.projectAngles.simas;
                return (
                  <div className="p-4 sm:p-5 bg-bg rounded-xl border border-border flex flex-col justify-between print:p-3.5">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-[10.5px] font-bold text-accent uppercase tracking-wider print:text-[9px]">
                            Regional Inter-Agency Workflow
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-text print:text-sm">
                            {project.name} — Administrative & Correspondence System
                          </h3>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent shrink-0 p-1 rounded-md bg-surface border border-border"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      <div className="inline-block px-2.5 py-1 rounded bg-accent-lighter text-accent font-semibold text-xs mb-3 print:text-[9.5px] print:mb-2">
                        {angle.highlight}
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed mb-3.5 text-justify print:text-[10px] print:leading-relaxed">
                        {angle.summary}
                      </p>

                      <p className="text-[11px] font-bold text-text uppercase tracking-wider mb-1.5 print:text-[9px]">
                        Key QA Activities:
                      </p>
                      <ul className="space-y-1.5 print:space-y-1 mb-4">
                        {angle.keyPoints.map((point, i) => (
                          <li
                            key={i}
                            className="text-xs text-text-secondary flex items-start gap-2 print:text-[9.5px] print:leading-tight"
                          >
                            <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2.5 border-t border-border-light flex flex-wrap items-center justify-between gap-1">
                      <span className="text-[10px] text-text-muted uppercase font-semibold print:text-[8px]">
                        Stack:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-medium text-accent bg-accent-lighter rounded print:text-[8px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <SlideFooter slideNumber={6} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 7: Experience & QA Certifications                                   */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <SlideHeader
              label="Background"
              title="Experience & Certified QA Foundations"
              subtitle="Practical development and testing tenure paired with formal software engineering certifications."
            />

            {/* 2 Full Columns Filling Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 sm:gap-5 print:gap-3 my-auto">
              {/* Kolom Kiri: Experience (4 items) */}
              <div>
                <h3 className="text-xs font-bold text-text uppercase tracking-wider mb-2.5 print:mb-1.5 print:text-[10px] flex items-center gap-1.5">
                  <Award size={14} className="text-accent" /> Hands-On Testing & Engineering Roles
                </h3>
                <div className="space-y-2.5 print:space-y-1.5">
                  {filteredExperience.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-3 bg-bg rounded-xl border border-border print:p-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs sm:text-sm font-bold text-text print:text-[11px] leading-tight">
                          {exp.title}
                        </p>
                        <span className="text-[10px] text-text-muted font-medium whitespace-nowrap print:text-[8.5px]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[11px] text-accent font-semibold mt-0.5 print:text-[9.5px]">
                        {exp.organization}
                      </p>
                      <p className="text-[10.5px] text-text-secondary mt-1 print:text-[8.5px] leading-tight">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Certifications (6 items) */}
              <div>
                <h3 className="text-xs font-bold text-text uppercase tracking-wider mb-2.5 print:mb-1.5 print:text-[10px] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-accent" /> Software Engineering Credentials
                </h3>
                <div className="space-y-2 print:space-y-1.5">
                  {filteredCerts.map((cert, i) => (
                    <a
                      key={i}
                      href={toViewLink(cert.path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2.5 sm:p-3 bg-bg rounded-xl border border-border hover:border-accent/40 transition-colors print:p-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold text-text leading-tight print:text-[10px]">
                            {cert.name}
                          </p>
                          <p className="text-[10px] text-accent font-medium mt-0.5 print:text-[8.5px]">
                            {cert.category} · Verified Credential
                          </p>
                        </div>
                        <ExternalLink
                          size={12}
                          className="text-text-muted shrink-0 mt-0.5 print:hidden"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <SlideFooter slideNumber={7} />
        </Slide>

        {/* ========================================================================= */}
        {/* SLIDE 8: Closing / Contact                                                */}
        {/* ========================================================================= */}
        <Slide className="justify-between">
          <div className="flex-1 flex flex-col justify-center my-auto max-w-4xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lighter border border-accent/20 mb-3 mx-auto">
              <span className="text-accent text-[11px] font-bold uppercase tracking-wider print:text-[9.5px]">
                Ready to Contribute
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text mb-2 print:text-[28px]">
              Let&apos;s Build Reliable Software Together
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary mb-6 sm:mb-7 max-w-xl mx-auto print:text-[11px] print:mb-4 leading-relaxed">
              {deckData.closingText}
            </p>

            {/* 4 Contact Grid Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-3 print:gap-2.5 mb-6 print:mb-4 text-left">
              <a
                href={`mailto:${profile.links.email}`}
                className="p-3.5 bg-bg rounded-xl border border-border hover:border-accent transition-colors block print:p-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center mb-2">
                  <Mail size={15} className="text-accent" />
                </div>
                <p className="text-[10px] text-text-muted uppercase font-medium">Email</p>
                <p className="text-xs font-bold text-text truncate mt-0.5">{profile.links.email}</p>
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-bg rounded-xl border border-border hover:border-accent transition-colors block print:p-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center mb-2">
                  <LinkedinIcon size={15} className="text-accent" />
                </div>
                <p className="text-[10px] text-text-muted uppercase font-medium">LinkedIn</p>
                <p className="text-xs font-bold text-text truncate mt-0.5">/in/saktimujahid</p>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-bg rounded-xl border border-border hover:border-accent transition-colors block print:p-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center mb-2">
                  <GithubIcon size={15} className="text-accent" />
                </div>
                <p className="text-[10px] text-text-muted uppercase font-medium">GitHub</p>
                <p className="text-xs font-bold text-text truncate mt-0.5">Sakti-122140123</p>
              </a>

              <a
                href={profile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-bg rounded-xl border border-border hover:border-accent transition-colors block print:p-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-accent-lighter flex items-center justify-center mb-2">
                  <ExternalLink size={15} className="text-accent" />
                </div>
                <p className="text-[10px] text-text-muted uppercase font-medium">Portfolio</p>
                <p className="text-xs font-bold text-text truncate mt-0.5">sakti-mujahid.vercel.app</p>
              </a>
            </div>

            {/* Recruiter Summary Pill */}
            <div className="p-3.5 bg-bg rounded-xl border border-border text-xs text-text-secondary max-w-2xl mx-auto print:p-2.5 print:text-[10px] leading-relaxed">
              <strong className="text-text">Key Value Proposition:</strong> Computer Science graduate (GPA 3.56) combining deep STLC understanding, hands-on black-box & UAT execution, full-stack technical background, and disciplined defect reporting for high-performing engineering teams.
            </div>
          </div>
          <SlideFooter slideNumber={8} />
        </Slide>
      </div>
    </>
  );
}
