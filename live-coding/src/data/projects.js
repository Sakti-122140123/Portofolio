// daftar proyek — mau nambah/kurang proyek, edit di sini
const projects = [
  {
    id: "harmony",
    name: "Harmony FTI ITERA",
    shortDescription:
      "Integrated academic information system for Fakultas Teknologi Industri, Institut Teknologi Sumatera, supporting academic services, student-faculty workflows, and structured information delivery.",
    role: "Full Stack Developer",
    techStack: ["Laravel", "React", "MySQL", "Postman"],
    description:
      "Developed a digital correspondence administration subsystem using React, Laravel, and MySQL, applying RUP methodology and Trello Kanban for structured software development. Improved the campus correspondence process from 7–10 working days to 2–5 working days by developing digital administrative workflows. Conducted Black Box Testing and User Acceptance Testing (UAT), including API validation with Postman, achieving 100% functional test results and an 88.57% UAT score.",
    keyContribution: [
      "Reduced correspondence processing time from 7–10 days to 2–5 days through digital workflow automation",
      "Achieved 100% functional test pass rate and 88.57% UAT score on correspondence subsystem",
      "Conducted API validation using Postman and documented test results for stakeholder review",
      "Applied RUP methodology and Kanban task tracking for structured development process",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React, designed database schemas, implemented RESTful APIs, and deployed to institutional servers.",
    qaRelevance:
      "Conducted Black Box Testing and UAT, achieving 100% functional test pass rate and 88.57% UAT score. Designed test cases covering functional validation, edge cases, and user workflow scenarios.",
    relevance:
      "Full-stack development and quality assurance in an academic institution, delivering measurable process improvements.",
    link: "https://harmony.fti.itera.ac.id/",
    featured: true,
  },
  {
    id: "simamang",
    name: "SIMAMANG",
    shortDescription:
      "Web-based internship management system for Dinas Kominfo Bandar Lampung, supports internship registration, status tracking, and administrative data management.",
    role: "Full Stack Developer",
    techStack: ["Laravel", "React", "MySQL", "Laragon"],
    description:
      "Developed SIMAMANG to support internship registration and management for more than 50 participants. Built web features using Laravel, React.js, Inertia.js, PHP, and JavaScript. Conducted functional testing, identified bugs, and verified fixes to improve system reliability. Collaborated with staff to translate administrative requirements into practical digital solutions. Supported post-deployment maintenance and quality assurance.",
    keyContribution: [
      "Supported internship registration and management for 50+ participants through a centralized system",
      "Built full-stack features using Laravel, React.js, Inertia.js, PHP, and JavaScript",
      "Conducted functional testing, identified bugs, and verified fixes to improve reliability",
      "Collaborated with government staff to translate administrative requirements into digital solutions",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government internship management system. Gained experience in requirements gathering, iterative development, and deploying to institutional servers.",
    qaRelevance:
      "Conducted functional testing, identified bugs, and verified fixes. Validated features against institutional requirements and documented test results for stakeholder review.",
    relevance:
      "Full-stack development and quality assurance for a government digital transformation project.",
    link: "https://simamang.bandarlampungkota.go.id/",
    featured: true,
  },
  {
    id: "simas",
    name: "SIMAS",
    shortDescription:
      "Web-based administrative information system for Dinas Kominfo Bandar Lampung, supporting document management, correspondence tracking, and internal workflow automation.",
    role: "Full Stack Developer",
    techStack: ["Laravel", "React", "MySQL", "Laragon"],
    description:
      "Developed SIMAS, a correspondence management system used by more than 30 government agencies. Built web features using Laravel, React.js, Inertia.js, PHP, and JavaScript. Conducted functional testing, identified bugs, and verified fixes to improve system reliability. Collaborated with staff to translate administrative requirements into practical digital solutions.",
    keyContribution: [
      "Developed SIMAS serving 30+ government agencies for correspondence management",
      "Built full-stack features using Laravel, React.js, Inertia.js, PHP, and JavaScript",
      "Conducted functional testing, identified bugs, and verified fixes to improve reliability",
      "Collaborated with government staff to translate administrative requirements into digital solutions",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React.js for a government administrative system. Applied database design, API development, and iterative delivery in a structured institutional environment.",
    qaRelevance:
      "Conducted functional testing, identified bugs, and verified fixes. Validated feature completeness against requirements and documented test results for stakeholder review.",
    relevance:
      "Full-stack development and quality assurance for a government digital transformation project.",
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
