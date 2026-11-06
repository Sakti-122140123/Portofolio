// daftar proyek — mau nambah/kurang proyek, edit di sini
const projects = [
  {
    id: "harmony",
    name: "Harmony FTI ITERA",
    category: "Academic Information System",
    image: "/projects/harmony.jpg",
    shortDescription:
      "Integrated academic correspondence system for Fakultas Teknologi Industri, Institut Teknologi Sumatera — handling multi-tier document approval workflows across faculties, departments, and student bodies campus-wide.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Campus-Wide Reach", value: "11,000+ Users" },
      { label: "UAT Stakeholder Score", value: "88.57%" },
      { label: "Access Roles Verified", value: "4 User Tiers" },
    ],
    description:
      "The correspondence subsystem of Harmony manages official document flows (incoming letters, outgoing approvals, disposition chains) across the entire Faculty of Industrial Technology. The core challenge was ensuring that hierarchical approval chains between Dean, Department Heads, Lecturers, and Students work correctly without data leakage across role boundaries. I designed test scenarios using Equivalence Partitioning and Boundary Value Analysis, validated expected vs actual results across all permission tiers, and executed regression testing after each bug-fix cycle to verify zero side effects on existing workflows.",
    keyContribution: [
      "Validated hierarchical document approval chains across 4 user roles (Admin, Faculty, Lecturer, Student)",
      "Designed 120+ test cases using EP and BVA to cover edge-case input boundaries and multi-step workflows",
      "Achieved 88.57% UAT acceptance score measured through structured stakeholder evaluation forms",
      "Executed retesting and regression cycles after each fix to verify zero impact on existing user journeys",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React, designed database schemas for correspondence tracking, implemented RESTful APIs, and deployed to institutional servers.",
    qaRelevance:
      "Conducted structured Black Box Testing and UAT on multi-role correspondence workflows. Designed EP & BVA test cases, validated data integrity across permission boundaries, and performed regression testing after fixes.",
    relevance:
      "Quality assurance and full-stack development for a production academic system serving 11,000+ campus users.",
    link: "https://harmony.fti.itera.ac.id/",
    featured: true,
  },
  {
    id: "simamang",
    name: "SIMAMANG",
    category: "Government Information System",
    image: null,
    shortDescription:
      "Official internship management portal for Dinas Kominfo Kota Bandar Lampung — managing public registration, document verification, intern scoring, and administrative reporting for municipal internship programs.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Cohorts Processed", value: "50+ Interns" },
      { label: "System Architecture", value: "Laravel REST + React" },
      { label: "Workflow Scope", value: "Registration to Evaluation" },
    ],
    description:
      "SIMAMANG digitized the entire internship pipeline at Dinas Kominfo — from public applicant registration and document uploads, through admin review and placement, to periodic evaluation scoring and final reporting. The main testing challenge was validating file upload boundaries (size limits, format restrictions), ensuring admin-only visibility of applicant scores, and verifying that status transitions (Pending → Accepted → Active → Completed) couldn't be bypassed or reversed. I tested both the public-facing registration flow and admin management dashboard independently.",
    keyContribution: [
      "Validated end-to-end registration flow: form submission, file upload constraints, and confirmation emails",
      "Tested admin dashboard: applicant filtering, score entry, and status lifecycle transitions",
      "Verified data isolation between Admin and Applicant roles to prevent unauthorized score visibility",
      "Collaborated with government supervisors to align test scenarios with institutional requirements",
    ],
    devRelevance:
      "Built full-stack features with Laravel REST API and React.js frontend for a government internship management portal.",
    qaRelevance:
      "Tested public registration workflows, file upload validation, role-based data isolation, and admin lifecycle management for a government production system.",
    relevance:
      "Quality assurance and development for a government digital transformation project at Dinas Kominfo Kota Bandar Lampung.",
    link: "https://simamang.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "simas",
    name: "SIMAS",
    category: "Government Workflow & Archiving",
    image: null,
    shortDescription:
      "Inter-agency digital correspondence system for Dinas Kominfo Kota Bandar Lampung — supporting official document disposition, hierarchical approval chains, and institutional e-archiving across 30+ municipal government agencies (OPD).",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Municipal OPDs Connected", value: "30+" },
      { label: "Document Flow", value: "Hierarchical Disposition" },
      { label: "Verification", value: "Role Permission Matrix" },
    ],
    description:
      "SIMAS handles formal government correspondence across 30+ OPD (Organisasi Perangkat Daerah) in Bandar Lampung — incoming mail registration, multi-level disposition routing between agency heads, and digital archival with audit trails. The key testing challenge was verifying that disposition chains route correctly through complex organizational hierarchies and that archived documents maintain data integrity. I designed a role-permission matrix covering Admin, Agency Heads, and Staff across multiple OPDs, then validated document status transitions and audit log accuracy.",
    keyContribution: [
      "Designed and executed a role-permission matrix covering Admin, Agency Heads, and Staff across 30+ OPDs",
      "Validated multi-tier disposition routing: incoming mail → agency head review → staff action → archive",
      "Verified document audit trail integrity and prevented unauthorized status reversals",
      "Executed regression testing prior to institutional release across connected government agencies",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for an inter-agency government correspondence and archiving system.",
    qaRelevance:
      "Tested hierarchical disposition workflows, role-permission boundaries across 30+ agencies, document audit trails, and archive integrity.",
    relevance:
      "Quality assurance for a multi-agency government digital correspondence system in production across Kota Bandar Lampung.",
    link: "https://simas.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "casheye",
    name: "CashEye",
    category: "Frontend Web Application",
    image: null,
    shortDescription:
      "Team-built personal finance tracker built with React — featuring transaction categorization, income vs expense analytics, and a responsive dashboard for real-time cashflow monitoring.",
    role: "Developer & Documentation Lead",
    techStack: ["React", "JavaScript", "CSS", "GitHub Pages"],
    metrics: [
      { label: "Application Type", value: "React SPA" },
      { label: "Core Feature", value: "Cashflow Analytics" },
      { label: "Deployment", value: "GitHub Pages" },
    ],
    description:
      "CashEye is a team project focused on practical personal finance management. The app handles transaction entry with category tagging, calculates running balances with dynamic state updates, and renders visual summaries of income vs expenses. I led the project documentation effort and coordinated task distribution among team members, ensuring each feature module was delivered on schedule and integrated cleanly into the single-page application architecture.",
    keyContribution: [
      "Designed component architecture for transaction entry, category management, and balance calculation",
      "Coordinated team task distribution and tracked feature completion milestones",
      "Created project documentation including user guides and technical architecture notes",
      "Deployed and configured the application on GitHub Pages with proper routing",
    ],
    devRelevance:
      "Developed a React SPA with component-based architecture, dynamic state management for financial calculations, and deployment automation on GitHub Pages.",
    qaRelevance:
      "Validated transaction entry flows, balance calculation accuracy, and responsive layout across viewport sizes.",
    relevance:
      "Led a team project from design through deployment, managing documentation and ensuring the final product met functional requirements.",
    link: "https://wahyuapriansyah1.github.io/protofolio-casheye/",
    featured: true,
  },
  {
    id: "kyuubi-mml",
    name: "Kyuubi — Multimodal Music Emotion",
    category: "Machine Learning & Research",
    image: null,
    shortDescription:
      "Academic research project exploring emotion classification in music by fusing three data modalities — audio spectral features (Librosa), lyrics semantics (NLP), and MIDI note patterns — through a late fusion machine learning architecture.",
    role: "Team Member, Research & Documentation",
    techStack: ["Python", "Scikit-learn", "Librosa", "Pandas", "NumPy"],
    metrics: [
      { label: "Architecture", value: "Late Fusion ML" },
      { label: "Data Modalities", value: "Audio · Lyrics · MIDI" },
      { label: "Pipeline", value: "Scikit-learn & Librosa" },
    ],
    description:
      "Kyuubi explores whether combining multiple data modalities improves emotion classification accuracy over single-modality approaches. The pipeline extracts MFCCs and spectral features from audio (Librosa), TF-IDF vectors from lyrics text, and note density/velocity features from MIDI files, then trains independent classifiers per modality before combining predictions through a late fusion layer. I focused on experiment documentation, performance visualization, and coordinating parallel research tracks among team members.",
    keyContribution: [
      "Documented experiment procedures, hyperparameter configurations, and per-modality accuracy metrics",
      "Created performance comparison visualizations across single-modality vs fused model results",
      "Coordinated task division for parallel feature extraction pipelines (audio, lyrics, MIDI)",
      "Contributed to structured academic writing and presentation materials for final submission",
    ],
    devRelevance:
      "Built Python data processing pipelines with Scikit-learn and Librosa for multi-source feature extraction and late fusion classification.",
    qaRelevance:
      "Systematically documented experiment procedures, tracked model performance metrics, and validated reproducibility of results across multiple runs.",
    relevance:
      "Practiced structured documentation, experiment tracking, and research coordination in a team-based academic ML project.",
    link: "https://github.com/Sakti-122140123",
    featured: true,
  },
];

export default projects;
