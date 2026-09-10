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
    "Computer Science Graduate, Developer & Engineer",
  // sub-headline, teks lebih panjang di bawah nama
  subheadline:
    "Computer Science graduate with hands-on experience in web development, software testing, and cross-functional collaboration. Built and deployed information systems for government and academic institutions. Open to opportunities in software engineering, web development, and quality assurance roles.",

  // ini 3 paragraf di section About — isi sesuai keinginan
  about: [
    "I am a recent Computer Science graduate from Institut Teknologi Sumatera (GPA 3.56/4.00), currently based in Jakarta. Through academic and internship projects, I have built web-based information systems using Laravel, React, and MySQL, gaining practical experience across the full development lifecycle.",
    "During my internship at Dinas Kominfo Kota Bandar Lampung, I contributed to developing and maintaining web systems for government workflows, coordinating directly with supervisors and internal teams to deliver digital solutions aligned with institutional requirements.",
    "Beyond technical development, I have been actively involved in student organizations, mentorship programs, and certificate courses, building strong foundations in teamwork, communication, and continuous learning. I am looking for opportunities where I can contribute my skills and grow as a software engineer.",
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
      "My academic and internship experience has given me a well-rounded foundation. Here is what I bring to a team:",
    points: [
      {
        requirement: "Full-Stack Development",
        experience:
          "Built and deployed web applications using Laravel, React, and MySQL, from designing database schemas and RESTful APIs to implementing responsive user interfaces with role-based access control.",
      },
      {
        requirement: "Software Quality & Testing",
        experience:
          "Practiced black-box testing, UAT execution, and structured bug reporting on academic and internship projects. Committed to delivering reliable, well-tested software.",
      },
      {
        requirement: "SDLC & Agile Understanding",
        experience:
          "Worked with RUP methodology and Kanban task tracking across multiple projects. Understand the full software lifecycle from requirements gathering through development, testing, and delivery.",
      },
      {
        requirement: "Documentation & Communication",
        experience:
          "Maintained technical documentation, user guides, and progress reports. Collaborated with developers, government supervisors, and end-users to translate requirements into working features.",
      },
      {
        requirement: "Teamwork & Continuous Learning",
        experience:
          "Actively involved in student organizations, mentorship programs, and certificate courses. Strong foundation in collaboration, communication, and adapting to new technologies and workflows.",
      },
    ],
  },
};

export default profile;
