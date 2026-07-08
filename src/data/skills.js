// daftar skill dikelompokkan per kategori
const skills = [
  {
    category: "Project & Coordination",
    icon: "ClipboardList", // nama icon dari Lucide, ganti sesuai kebutuhan
    items: [
      "Project Scheduling",
      "Progress Tracking",
      "Documentation & Reporting",
      "Requirements Gathering",
      "Stakeholder Communication",
      "Task Prioritization",
      "Teamwork & Collaboration",
      "Meeting Notes & Action Items",
    ],
  },
  {
    category: "Technical Skills",
    icon: "Code2",
    items: [
      "React",
      "Laravel",
      "JavaScript / PHP",
      "HTML & CSS",
      "MySQL / SQL Database",
      "RESTful APIs",
      "Machine Learning (Python / Scikit-learn)",
      "Data Analysis & Visualization",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    items: [
      "Git & GitHub",
      "VS Code",
      "Laragon",
      "Google Workspace",
      "Microsoft Office",
      "Spreadsheet / Reporting Tools",
      "Figma (Basic)",
      "Vercel",
    ],
  },
];

// daftar sertifikat — tambah sesuai punya Anda
const certificates = [
  {
    name: "Coding Camp — Machine Learning powered by DBS Foundation",
    issuer: "DBS Foundation",
    year: "2025",
    link: "https://www.linkedin.com/in/saktimujahid/", // link ke sertifikat (LinkedIn / file)
  },
  {
    name: "Digistar Program by Telkom Indonesia",
    issuer: "Telkom Indonesia",
    year: "2024",
    link: "", // isi link-nya kalau punya sertifikat digital
  },
  // kalau mau nambah sertifikat, hapus komen di bawah ini
  // {
  //   name: "Nama Sertifikat",
  //   issuer: "Penerbit",
  //   year: "2024",
  //   link: "https://link-sertifikat",
  // },
];

export { skills, certificates };
