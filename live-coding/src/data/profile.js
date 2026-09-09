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
    "Computer Science Graduate — Web Developer & Quality-Focused Engineer",
  // sub-headline, teks lebih panjang di bawah nama
  subheadline:
    "Computer Science graduate with hands-on experience building web applications and ensuring software quality through testing and structured documentation. Proficient in full-stack development, black-box testing, UAT, and cross-functional collaboration. Open to opportunities in web development, QA, and software engineering roles.",

  // ini 3 paragraf di section About — isi sesuai keinginan
  about: [
    "I am a recent Computer Science graduate from Institut Teknologi Sumatera (GPA 3.56/4.00), currently based in Jakarta. Through academic and internship projects, I have built web-based information systems using Laravel, React, and MySQL — gaining practical experience in both front-end and back-end development, as well as testing and quality assurance workflows.",
    "My background covers the full software development lifecycle: from requirements gathering and feature development to black-box testing, UAT execution, and structured documentation. I have achieved 100% black-box test pass rate and 88.57% UAT score on campus systems, while also leading feature development and coordinating with stakeholders during my internship at Dinas Kominfo.",
    "I am looking for opportunities where I can contribute my development skills, attention to detail, and quality-focused mindset — whether in web development, software testing, or roles that combine building and validating robust software solutions.",
  ],

  // link sosial dan kontak
  links: {
    email: "saktimujahid.9b@gmail.com",
    linkedin: "https://www.linkedin.com/in/saktimujahid/",
    github: "https://github.com/Sakti-122140123",
    portfolio: "https://sakti-mujahid.vercel.app",
  },

  // section "What I Bring" — 5 poin kelebihan Anda (general)
  roleFit: {
    intro:
      "My experience in web development and software testing has given me a well-rounded foundation — here is what I bring to a team:",
    points: [
      {
        requirement: "Full-Stack Web Development",
        experience:
          "Built and deployed web applications using Laravel, React, and MySQL — from designing database schemas and RESTful APIs to implementing responsive user interfaces with role-based access control.",
      },
      {
        requirement: "Software Testing & Quality Assurance",
        experience:
          "Achieved 100% black-box test pass rate and 88.57% UAT score on academic systems. Experienced in test case design, functional validation, edge case identification, and structured bug reporting with clear reproduction steps.",
      },
      {
        requirement: "SDLC & Agile Understanding",
        experience:
          "Worked with RUP methodology and Kanban task tracking across multiple projects. Understand the full software lifecycle from requirements gathering through development, testing, and delivery.",
      },
      {
        requirement: "Documentation & Stakeholder Communication",
        experience:
          "Maintained technical documentation, user guides, and progress reports. Collaborated with developers, government supervisors, and end-users to translate requirements into working features and validated solutions.",
      },
      {
        requirement: "Analytical & Detail-Oriented Mindset",
        experience:
          "Systematic approach to identifying edge cases, validating requirements, and ensuring feature completeness — habits developed through both building software and rigorously testing it.",
      },
    ],
  },
};

export default profile;
