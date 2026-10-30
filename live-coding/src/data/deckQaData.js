// Data khusus untuk deck QA role — restructured untuk visual portfolio
const deckQaData = {
  // ---- Cover ----
  headline: "Manual QA & Software Testing",
  tagline: "Computer Science Graduate · Jakarta, Indonesia",
  coverBadges: [
    "Black-Box Testing",
    "UAT Execution",
    "Bug Reporting",
    "Test Case Design",
  ],

  // ---- At a Glance — featured metrics ----
  metrics: [
    { value: "100%", label: "Black-Box Test Pass Rate", context: "Harmony FTI ITERA" },
    { value: "88.57%", label: "UAT Score", context: "Correspondence Subsystem" },
    { value: "3", label: "Systems Tested & Deployed", context: "Government & Academic" },
    { value: "50+", label: "End Users Validated", context: "Multi-Role Testing" },
  ],

  // ---- Short summary (replaces 3 long paragraphs) ----
  shortSummary:
    "Detail-oriented Computer Science graduate (GPA 3.56/4.00) with hands-on experience in black-box testing, UAT, and structured test documentation across government and academic systems. Seeking a QA role to contribute to software quality assurance.",

  // ---- About (condensed to 2 focused paragraphs) ----
  about: [
    "Recent Computer Science graduate from Institut Teknologi Sumatera, currently based in Jakarta. Gained practical testing experience through academic capstone projects and a government internship — designing test cases, executing multi-role testing, documenting bugs, and validating system functionality across 3 deployed web applications.",
    "Proficient in black-box testing techniques (EP, BVA), UAT execution, retesting, and regression testing. Experienced in collaborating with developers and stakeholders to ensure delivered solutions meet requirements and quality standards.",
  ],

  // ---- Role Fit (5 poin, rewritten lebih ringkas) ----
  roleFit: {
    intro:
      "My academic and internship experience has built a strong foundation for a QA role:",
    points: [
      {
        icon: "ShieldCheck",
        requirement: "Black-Box Testing & UAT",
        experience:
          "Achieved 100% test pass rate and 88.57% UAT score. Designed test cases using EP and BVA techniques across 3 systems.",
      },
      {
        icon: "GitBranch",
        requirement: "SDLC & STLC Understanding",
        experience:
          "Applied structured STLC from test planning through execution, defect tracking, retesting, and regression testing.",
      },
      {
        icon: "Bug",
        requirement: "Bug Reporting & Documentation",
        experience:
          "Documented bug reports with clear reproduction steps. Performed retesting after fixes to verify resolution.",
      },
      {
        icon: "Users",
        requirement: "Multi-Role Testing",
        experience:
          "Tested features across admin, faculty, staff, and applicant roles — validating access control and data integrity.",
      },
      {
        icon: "ClipboardCheck",
        requirement: "Input/Process/Output Validation",
        experience:
          "Systematic approach to validating data flow: input constraints, processing logic, and output accuracy.",
      },
    ],
  },

  // ---- Project angles (rewritten untuk membedakan tiap project) ----
  projectAngles: {
    harmony: {
      angle: "Comprehensive Testing with Measurable Results",
      highlight: "100% test pass rate · 88.57% UAT score",
      summary:
        "Led quality assurance on the correspondence subsystem of an academic information system. Designed comprehensive test cases covering functional validation, edge cases, and multi-user workflows (admin, faculty, students). Achieved measurable testing outcomes with systematic EP and BVA techniques.",
      keyPoints: [
        "Achieved 100% functional test pass rate and 88.57% UAT score",
        "Designed test cases using Equivalence Partitioning and Boundary Value Analysis",
        "Validated input/process/output across admin, faculty, and student roles",
        "Executed retesting and regression testing after bug fixes",
      ],
    },
    simamang: {
      angle: "Government System Testing at Scale",
      highlight: "50+ participants · Multi-role access testing",
      summary:
        "Conducted functional testing on a government internship management system used by 50+ participants. Focused on registration workflow validation and multi-role access control (admin, applicants), ensuring system reliability for public-facing government services.",
      keyPoints: [
        "Tested registration workflows serving 50+ internship participants",
        "Validated multi-role access control (admin, applicants)",
        "Designed structured test scenarios with EP and BVA techniques",
        "Ensured system reliability for government public services",
      ],
    },
    simas: {
      angle: "Cross-Agency Correspondence System",
      highlight: "30+ government agencies · Document workflow testing",
      summary:
        "Tested a correspondence management system used by 30+ government agencies. Focused on document workflow accuracy, multi-user role integrity (admin, staff), and ensuring the system met institutional requirements for administrative operations.",
      keyPoints: [
        "Validated correspondence workflows across 30+ government agencies",
        "Tested document management and tracking accuracy",
        "Verified multi-role integrity (admin, staff) and access permissions",
        "Collaborated with developers on defect resolution and retesting",
      ],
    },
  },

  // ---- Closing ----
  closingText:
    "Open to Junior Manual QA and software testing opportunities. Experienced in black-box testing, UAT, test case design, and bug reporting. I would love to hear from you.",
};

export default deckQaData;
