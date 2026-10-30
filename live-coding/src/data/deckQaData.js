// Data khusus untuk deck QA role — visual portfolio & PDF-ready
const deckQaData = {
  // ---- Cover ----
  headline: "Manual QA & Software Testing Specialist",
  tagline: "Computer Science Graduate · Institut Teknologi Sumatera · GPA 3.56/4.00",
  coverBadges: [
    "Black-Box Testing",
    "UAT Execution",
    "Test Case Design (EP & BVA)",
    "Bug Reporting & Retesting",
    "Multi-Role Access Testing",
  ],

  // ---- At a Glance — featured metrics ----
  metrics: [
    {
      value: "100%",
      label: "Black-Box Pass Rate",
      context: "Harmony FTI ITERA Subsystem",
      detail: "Full functional test execution with EP & BVA",
    },
    {
      value: "88.57%",
      label: "UAT Acceptance Score",
      context: "Correspondence Module",
      detail: "Validated directly with faculty stakeholders",
    },
    {
      value: "3",
      label: "Deployed Web Systems",
      context: "Government & Higher Ed",
      detail: "Tested in production environments",
    },
    {
      value: "50+",
      label: "Validated Users & Roles",
      context: "Multi-Role Workflows",
      detail: "Admin, Faculty, Staff & Public Applicants",
    },
  ],

  // ---- Short summary ----
  shortSummary:
    "Detail-oriented Computer Science graduate (GPA 3.56/4.00) with proven hands-on experience in black-box testing, User Acceptance Testing (UAT), and structured STLC documentation across government and academic production systems. Committed to preventing defect leakage, ensuring seamless user journeys, and collaborating cross-functionally with engineering teams.",

  // ---- Role Fit (6 poin seimbang untuk grid 3x2) ----
  roleFit: {
    intro:
      "A combination of technical software engineering background, hands-on testing execution, and structured documentation skills:",
    points: [
      {
        icon: "ShieldCheck",
        requirement: "Black-Box Testing & UAT",
        experience:
          "Achieved 100% test pass rate and 88.57% UAT score on Harmony FTI. Designed comprehensive test cases covering positive, negative, and edge-case scenarios.",
      },
      {
        icon: "GitBranch",
        requirement: "STLC & Test Design (EP & BVA)",
        experience:
          "Applied Equivalence Partitioning and Boundary Value Analysis to maximize test coverage while minimizing redundant test cycles across multiple inputs.",
      },
      {
        icon: "Bug",
        requirement: "Bug Reporting & Retesting",
        experience:
          "Documented high-quality bug reports with unambiguous reproduction steps, expected vs actual outcomes, and retested fixes to verify zero regression.",
      },
      {
        icon: "Users",
        requirement: "Multi-Role & Access Control Testing",
        experience:
          "Validated permission boundaries and role-based workflows across Admin, Faculty, Staff, and Applicant personas to protect data integrity.",
      },
      {
        icon: "ClipboardCheck",
        requirement: "Input/Process/Output Validation",
        experience:
          "Enforced systematic end-to-end data flow validation: frontend constraints, backend processing logic, and accurate database mutations.",
      },
      {
        icon: "Code2",
        requirement: "Developer Collaboration & Root Cause",
        experience:
          "Leveraged full-stack programming background (Laravel, React, MySQL) to understand underlying system architecture and communicate effectively with developers.",
      },
    ],
  },

  // ---- Project angles ----
  projectAngles: {
    harmony: {
      angle: "High-Impact Academic Information System",
      highlight: "100% Black-Box Pass Rate · 88.57% UAT Acceptance",
      summary:
        "Led Quality Assurance on the correspondence subsystem of Harmony FTI ITERA, an integrated academic platform serving thousands of campus users. Spearheaded functional validation, boundary value analysis, multi-role access control, and user acceptance testing with faculty stakeholders.",
      keyPoints: [
        "Achieved 100% functional test pass rate across all correspondence modules",
        "Achieved 88.57% UAT score measured across multi-stakeholder evaluations",
        "Designed test scenarios using Equivalence Partitioning & Boundary Value Analysis",
        "Conducted multi-role testing for Admin, Faculty, and Student workflows",
        "Performed retesting after bug resolution and verified zero regression impact",
      ],
    },
    simamang: {
      angle: "Government Internship Management System",
      highlight: "50+ Participants · Public Registration & Admin Workflows",
      summary:
        "Executed functional QA for the official internship management system of Dinas Kominfo Kota Bandar Lampung. Verified registration workflows, status tracking, and administrative verification pipelines.",
      keyPoints: [
        "Tested public applicant registration workflows for 50+ participants",
        "Validated multi-role permissions and data visibility (Admin vs Applicants)",
        "Tested input validation boundaries on file uploads and form submissions",
        "Collaborated with government supervisors and developers on defect fixes",
      ],
    },
    simas: {
      angle: "Inter-Agency Administrative Information System",
      highlight: "30+ Government Agencies · Official Correspondence Workflow",
      summary:
        "Conducted end-to-end testing on an internal correspondence management system deployed across 30+ regional government agencies (OPD) in Bandar Lampung. Ensured reliable document tracking and administrative compliance.",
      keyPoints: [
        "Validated official document tracking across 30+ regional government bodies",
        "Verified multi-tier document approval and role-based access permissions",
        "Tested document status transitions, audit logs, and data accuracy",
        "Executed regression testing cycles prior to institutional release",
      ],
    },
  },

  // ---- Closing ----
  closingText:
    "Open to Junior Manual QA, QA Engineer, and Software Testing opportunities. Equipped with proven black-box testing methodologies, structured STLC documentation, and a quality-driven mindset. Available for full-time on-site (Jakarta) and remote roles.",
};

export default deckQaData;
