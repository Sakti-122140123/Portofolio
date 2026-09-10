// daftar proyek — mau nambah/kurang proyek, edit di sini
const projects = [
  {
    // id dipakai sebagai key unik, jangan ada spasi
    id: "harmony",
    name: "Harmony FTI ITERA",
    // teks pendek yang muncul di kartu proyek
    shortDescription:
      "Integrated academic information system for Fakultas Teknologi Industri, Institut Teknologi Sumatera — supporting academic services, student-faculty workflows, and structured information delivery.",
    role: "Developer & Team Contributor",
    // teknologi yang dipakai (muncul sebagai badge/chip)
    techStack: ["Laravel", "React", "MySQL"],
    // deskripsi panjang — muncul pas diklik "View details"
    description:
      "Contributed to the development of an integrated information system serving the Faculty of Industrial Technology at ITERA. The platform centralizes academic services, student-faculty interactions, and structured information delivery within the faculty ecosystem.",
    // poin-poin kontribusi Anda
    keyContribution: [
      "Translated faculty requirements into functional features through direct communication with stakeholders",
      "Built multi-user interfaces with role-based access for students and faculty",
      "Coordinated feature development and task handoffs within the team",
      "Maintained documentation for system modules and user workflows",
    ],
    devRelevance:
      "Practiced full-stack development with Laravel and React, designed database schemas, built RESTful APIs, and implemented role-based access control — directly applicable to web development roles.",
    qaRelevance:
      "Conducted black-box testing and UAT on the correspondence system, achieving 100% test pass rate and 88.57% UAT score. Designed test cases covering functional validation, edge cases, and user workflow scenarios.",
    relevance:
      "Practiced full-stack development, stakeholder communication, and cross-functional coordination — building a complete information system from requirements through deployment.",
    link: "https://harmony.fti.itera.ac.id/",
    featured: true, // true = tampil di halaman, false = disembunyikan
  },
  {
    id: "simamang",
    name: "SIMAMANG",
    shortDescription:
      "Web-based internship management system for Dinas Kominfo Bandar Lampung — supports internship registration, status tracking, and administrative data management.",
    role: "Full-Stack Developer (Intern)",
    techStack: ["Laravel", "React", "MySQL", "Laragon"],
    description:
      "Contributed to a web-based system that manages internship-related workflows for Dinas Kominfo Kota Bandar Lampung. The system supports registration, status tracking, and data management through an admin dashboard — digitizing previously manual processes.",
    keyContribution: [
      "Coordinated with government supervisors to gather and clarify requirements",
      "Developed registration and tracking features aligned with institutional needs",
      "Maintained progress documentation and delivered status updates to supervisors",
      "Ensured deliverables stayed on scope and within agreed timelines",
    ],
    devRelevance:
      "Built full-stack features with Laravel and React for a government internship management system. Gained experience in requirements gathering, iterative development, and deploying to institutional servers.",
    qaRelevance:
      "Performed functional testing on registration and tracking workflows. Validated features against institutional requirements and documented test results for stakeholder review.",
    relevance:
      "Contributed to a government digital transformation project, coordinating with institutional stakeholders and delivering features within structured timelines.",
    link: "https://simamang.bandarlampungkota.go.id/",
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
    name: "Kyuubi — Multimodal Music Emotion Recognition",
    shortDescription:
      "Academic machine learning project exploring emotion recognition in music using audio, lyrics, and MIDI through a late fusion approach.",
    role: "Team Member — Research & Documentation",
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
      "Systematically documented experiment procedures, parameters, and results. Tracked model performance metrics and validated outputs — transferable skills for test documentation and result reporting.",
    relevance:
      "Practiced structured documentation, experiment tracking, and research task coordination in a team-based academic project.",
    link: "https://github.com/Sakti-122140123",
    featured: true,
  },
];

export default projects;
