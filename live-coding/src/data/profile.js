// ini file data utama — ganti teks di sini, tampilan web akan otomatis berubah
const profile = {
  // identitas diri
  name: "Sakti Mujahid Imani",
  location: "Jakarta, Indonesia",
  university: "Institut Teknologi Sumatera",
  major: "Computer Science (Teknik Informatika)",
  semester: "Graduated (GPA 3.56/4.00)",

  // headline muncul di Hero (bagian atas pertama)
  headline:
    "Computer Science Graduate | Manual QA & Software Testing",
  // sub-headline, teks lebih panjang di bawah nama
  subheadline:
    "Detail-oriented Computer Science graduate with hands-on experience in black-box testing, UAT, and structured documentation through web system development projects. Proficient in test case design, bug reporting, and cross-functional collaboration. Seeking a Junior Manual QA role at NTT Data to contribute to software quality assurance.",

  // ini 3 paragraf di section About — isi sesuai keinginan
  about: [
    "I am a recent Computer Science graduate from Institut Teknologi Sumatera (GPA 3.56/4.00), currently based in Jakarta. Through academic and internship projects, I have built web-based information systems and gained practical experience in black-box testing, UAT execution, and structured test documentation — achieving 100% black-box test pass rate and 88.57% UAT score on a campus correspondence system.",
    "My background includes understanding the full SDLC from requirements gathering through testing and delivery. I have experience writing test cases, documenting bugs with clear steps to reproduce, collaborating with developers to verify fixes, and maintaining structured documentation throughout the development cycle — skills directly aligned with manual QA workflows.",
    "I am looking for a Junior Manual QA position where I can contribute my analytical skills, attention to detail, and testing experience — whether in test case design, regression testing, bug reporting, or supporting product quality in an Agile team environment.",
  ],

  // link sosial dan kontak
  links: {
    email: "saktimujahid.9b@gmail.com",
    linkedin: "https://www.linkedin.com/in/saktimujahid/",
    github: "https://github.com/Sakti-122140123",
    portfolio: "https://sakti-mujahid.vercel.app",
  },

  // section "What I Bring" — 5 poin kelebihan Anda
  roleFit: {
    intro:
      "My experience in web development and testing has prepared me for a QA role — here is what I bring to NTT Data:",
    points: [
      {
        requirement: "Black-Box Testing & UAT Execution",
        experience:
          "Achieved 100% black-box test pass rate and 88.57% UAT score on the Harmony FTI correspondence system. Designed and executed test cases covering functional validation, edge cases, and user workflow scenarios.",
      },
      {
        requirement: "SDLC & Agile Understanding",
        experience:
          "Worked with RUP methodology and Kanban task tracking across multiple projects. Understand the full software development lifecycle from requirements gathering to testing and delivery.",
      },
      {
        requirement: "Bug Reporting & Documentation",
        experience:
          "Documented test results, bug reports with clear reproduction steps, and structured technical documentation — ensuring developers can efficiently identify and resolve issues.",
      },
      {
        requirement: "Cross-Functional Collaboration",
        experience:
          "Worked alongside developers, government supervisors, and end-users — translating technical requirements into test scenarios and communicating test findings to non-technical stakeholders.",
      },
      {
        requirement: "Analytical & Detail-Oriented Mindset",
        experience:
          "Systematic approach to identifying edge cases, validating requirements, and ensuring feature completeness — habits developed through real-world testing and academic project delivery.",
      },
    ],
  },
};

export default profile;
