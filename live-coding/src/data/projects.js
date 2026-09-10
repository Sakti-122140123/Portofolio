// daftar proyek — mau nambah/kurang proyek, edit di sini
const projects = [
  {
    id: "harmony",
    name: "Harmony FTI ITERA",
    shortDescription:
      "Integrated academic information system for Fakultas Teknologi Industri, Institut Teknologi Sumatera, supporting academic services, student-faculty workflows, and structured information delivery.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    description:
      "Conducted Black Box Testing and User Acceptance Testing (UAT) on the correspondence subsystem, achieving 100% functional test pass rate and 88.57% UAT score. Designed test scenarios and test cases using Equivalence Partitioning (EP) and Boundary Value Analysis (BVA). Executed regression testing after each sprint to ensure feature stability. Validated API endpoints using Postman for request-response verification.",
    keyContribution: [
      "Achieved 100% functional test pass rate and 88.57% UAT score on correspondence subsystem",
      "Designed test cases using EP and BVA techniques covering functional validation and edge cases",
      "Executed regression testing to verify feature stability after each development sprint",
      "Validated API endpoints using Postman and documented test results for stakeholder review",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React, designed database schemas, implemented RESTful APIs, and deployed to institutional servers.",
    qaRelevance:
      "Conducted Black Box Testing, UAT, EP, BVA, and regression testing. Designed test scenarios and test cases. Achieved 100% test pass rate and 88.57% UAT score.",
    relevance:
      "Quality assurance and full-stack development in an academic institution, delivering measurable testing results.",
    link: "https://harmony.fti.itera.ac.id/",
    featured: true,
  },
  {
    id: "simamang",
    name: "SIMAMANG",
    shortDescription:
      "Web-based internship management system for Dinas Kominfo Bandar Lampung, supports internship registration, status tracking, and administrative data management.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    description:
      "Conducted functional testing on internship registration and management system for 50+ participants. Designed test scenarios and test cases using EP and BVA techniques. Executed regression testing to verify bug fixes and feature stability. Performed API validation using Postman. Collaborated with government staff to validate features against institutional requirements.",
    keyContribution: [
      "Designed test scenarios and test cases using EP and BVA for registration workflows",
      "Executed regression testing to verify bug fixes and feature stability",
      "Validated API endpoints using Postman for request-response verification",
      "Documented test results and collaborated with staff for requirement validation",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government internship management system.",
    qaRelevance:
      "Conducted functional testing, EP, BVA, and regression testing. Designed test scenarios and test cases. Validated API using Postman.",
    relevance:
      "Quality assurance for a government digital transformation project, ensuring system reliability.",
    link: "https://simamang.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "simas",
    name: "SIMAS",
    shortDescription:
      "Web-based administrative information system for Dinas Kominfo Bandar Lampung, supporting document management, correspondence tracking, and internal workflow automation.",
    role: "Quality Assurance & Developer",
    techStack: ["Postman", "Laravel", "React", "MySQL", "Trello"],
    description:
      "Conducted functional testing on correspondence management system used by 30+ government agencies. Designed test scenarios and test cases using EP and BVA techniques. Executed regression testing to verify bug fixes and feature stability. Performed API validation using Postman. Collaborated with staff to validate features against institutional requirements.",
    keyContribution: [
      "Designed test scenarios and test cases using EP and BVA for correspondence workflows",
      "Executed regression testing to verify bug fixes and feature stability",
      "Validated API endpoints using Postman for request-response verification",
      "Documented test results and collaborated with staff for requirement validation",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government administrative system.",
    qaRelevance:
      "Conducted functional testing, EP, BVA, and regression testing. Designed test scenarios and test cases. Validated API using Postman.",
    relevance:
      "Quality assurance for a government digital transformation project, ensuring system reliability.",
    link: "https://simas.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "casheye",
    name: "CashEye",
    shortDescription:
      "Financial tracking application designed to help users monitor income, expenses, and budgets with clear data visualization and reporting.",
    role: "Developer & Documentation Lead",
    techStack: ["React", "JavaScript", "CSS", "GitHub Pages"],
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
    name: "Kyuubi, Multimodal Music Emotion Recognition",
    shortDescription:
      "Academic machine learning project exploring emotion recognition in music using audio, lyrics, and MIDI through a late fusion approach.",
    role: "Team Member, Research & Documentation",
    techStack: ["Python", "Scikit-learn", "Librosa", "Pandas", "NumPy"],
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
