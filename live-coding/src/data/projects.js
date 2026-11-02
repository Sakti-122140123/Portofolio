// daftar proyek — mau nambah/kurang proyek, edit di sini
const projects = [
  {
    id: "harmony",
    name: "Harmony FTI ITERA",
    category: "Academic Information System",
    image: "/projects/harmony.jpg",
    shortDescription:
      "Integrated academic information system for Fakultas Teknologi Industri, Institut Teknologi Sumatera, supporting academic correspondence, multi-role approval workflows, and structured document delivery.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Testing Pass Rate", value: "100%" },
      { label: "UAT Stakeholder Score", value: "88.6%" },
      { label: "Target Audience", value: "11,000+ Users" },
    ],
    description:
      "Conducted Black Box Testing and User Acceptance Testing (UAT) on the correspondence subsystem, achieving 100% functional test pass rate and 88.57% UAT score. Designed test scenarios and test cases using Equivalence Partitioning (EP) and Boundary Value Analysis (BVA). Validated input, process, and output for each feature. Compared expected vs actual results and documented all discrepancies. Tested multi-user roles (admin, faculty, students). Executed retesting after bug fixes and regression testing to ensure no impact on other user journeys.",
    keyContribution: [
      "Achieved 100% functional test pass rate and 88.57% UAT score on correspondence subsystem",
      "Designed test cases using EP and BVA, validated input/process/output, and compared expected vs actual results",
      "Tested multi-user roles (admin, faculty, lecturer, students) to ensure correct access and workflows",
      "Executed retesting after bug fixes and regression testing to verify feature stability",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React, designed database schemas, implemented RESTful APIs, and deployed to institutional servers.",
    qaRelevance:
      "Conducted Black Box Testing, UAT, EP, BVA, retesting, regression testing. Validated input/process/output. Compared expected vs actual results. Tested multi-user roles.",
    relevance:
      "Quality assurance and full-stack development in an academic institution, delivering measurable testing results.",
    link: "https://harmony.fti.itera.ac.id/",
    featured: true,
  },
  {
    id: "simamang",
    name: "SIMAMANG",
    category: "Government Information System",
    image: null,
    shortDescription:
      "Web-based internship management system for Dinas Kominfo Kota Bandar Lampung, supporting internship registration, status tracking, evaluation workflows, and administrative records.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Participants Managed", value: "50+ Interns" },
      { label: "Architecture", value: "Laravel + React" },
      { label: "Methodology", value: "EP & BVA Testing" },
    ],
    description:
      "Conducted functional testing on internship registration and management system for 50+ participants. Designed test scenarios and test cases using EP and BVA techniques. Validated input, process, and output for each feature. Compared expected vs actual results and documented all discrepancies. Tested multi-user roles (admin, applicants). Executed retesting after bug fixes and regression testing to ensure no impact on other user journeys.",
    keyContribution: [
      "Designed test scenarios and test cases using EP and BVA for registration workflows",
      "Validated input/process/output and compared expected vs actual results",
      "Tested multi-user roles (admin, applicants) to ensure correct access and workflows",
      "Executed retesting after bug fixes and regression testing to verify feature stability",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government internship management system.",
    qaRelevance:
      "Conducted functional testing, EP, BVA, retesting, regression testing. Validated input/process/output. Compared expected vs actual results. Tested multi-user roles.",
    relevance:
      "Quality assurance for a government digital transformation project, ensuring system reliability.",
    link: "https://simamang.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "simas",
    name: "SIMAS",
    category: "Government Workflow & Archiving",
    image: null,
    shortDescription:
      "Web-based administrative information system for Dinas Kominfo Kota Bandar Lampung, supporting digital document management, inter-agency correspondence, and internal workflow automation.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    metrics: [
      { label: "Government Agencies", value: "30+ OPD" },
      { label: "System Scope", value: "Digital Archive & Flow" },
      { label: "Verification", value: "Role Permission Matrix" },
    ],
    description:
      "Conducted functional testing on correspondence management system used by 30+ government agencies. Designed test scenarios and test cases using EP and BVA techniques. Validated input, process, and output for each feature. Compared expected vs actual results and documented all discrepancies. Tested multi-user roles (admin, staff). Executed retesting after bug fixes and regression testing to ensure no impact on other user journeys.",
    keyContribution: [
      "Designed test scenarios and test cases using EP and BVA for correspondence workflows",
      "Validated input/process/output and compared expected vs actual results",
      "Tested multi-user roles (admin, staff) to ensure correct access and workflows",
      "Executed retesting after bug fixes and regression testing to verify feature stability",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government administrative system.",
    qaRelevance:
      "Conducted functional testing, EP, BVA, retesting, regression testing. Validated input/process/output. Compared expected vs actual results. Tested multi-user roles.",
    relevance:
      "Quality assurance for a government digital transformation project, ensuring system reliability.",
    link: "https://simas.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "casheye",
    name: "CashEye",
    category: "Frontend Web Application",
    image: null,
    shortDescription:
      "Personal financial tracking web application designed to help users monitor income, categorize expenditures, and track budgets with intuitive visual reporting.",
    role: "Developer & Documentation Lead",
    techStack: ["React", "JavaScript", "CSS", "GitHub Pages"],
    metrics: [
      { label: "Category", value: "Personal Finance" },
      { label: "Interface", value: "Responsive React UI" },
      { label: "Deployment", value: "GitHub Pages" },
    ],
    description:
      "Developed a financial tracking web application as a team project, focusing on user-friendly interfaces for income and expense monitoring. The project emphasized clear data presentation and practical reporting features.",
    keyContribution: [
      "Designed user flows for financial data entry and budget visualization",
      "Organized team task distribution and tracked feature completion",
      "Created project documentation including user guides and technical notes",
      "Ensured the final product met defined requirements and user expectations",
    ],
    devRelevance:
      "Developed a React-based financial tracking app with clean UI, data visualization, and budget reporting features. Managed the project from design through deployment on GitHub Pages.",
    qaRelevance:
      "Conducted functional testing on income/expense tracking flows and budget visualization. Validated user interface responsiveness and data accuracy across different input scenarios.",
    relevance:
      "Led a team project from design through deployment, managing task distribution, documentation, and ensuring the final product met user needs.",
    link: "https://wahyuapriansyah1.github.io/protofolio-casheye/",
    featured: true,
  },
  {
    id: "kyuubi-mml",
    name: "Kyuubi — Multimodal Music Emotion",
    category: "Machine Learning & Research",
    image: null,
    shortDescription:
      "Academic machine learning research project exploring emotion classification in music by integrating audio features, lyrics semantics, and MIDI data through a late fusion model.",
    role: "Team Member, Research & Documentation",
    techStack: ["Python", "Scikit-learn", "Librosa", "Pandas", "NumPy"],
    metrics: [
      { label: "Architecture", value: "Late Fusion ML" },
      { label: "Modalities", value: "Audio, Lyrics, MIDI" },
      { label: "Core Tooling", value: "Scikit-learn & Librosa" },
    ],
    description:
      "Participated in a team-based academic ML project focused on multimodal music emotion recognition. The project combined audio features, lyrics analysis, and MIDI data using a late fusion approach to classify emotional content in music.",
    keyContribution: [
      "Documented experiment procedures, parameters, and results systematically",
      "Coordinated task division among team members for parallel research tracks",
      "Created visualizations and reports summarizing model performance",
      "Contributed to structured academic writing and presentation materials",
    ],
    devRelevance:
      "Built Python data processing pipelines with Scikit-learn and Librosa for audio feature extraction. Applied software engineering practices to a machine learning project with structured code organization.",
    qaRelevance:
      "Systematically documented experiment procedures, parameters, and results. Tracked model performance metrics and validated outputs, transferable skills for test documentation and result reporting.",
    relevance:
      "Practiced structured documentation, experiment tracking, and research task coordination in a team-based academic project.",
    link: "https://github.com/Sakti-122140123",
    featured: true,
  },
];

export default projects;
