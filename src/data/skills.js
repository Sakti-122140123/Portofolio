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

// daftar sertifikat — isi file di public/sertifikat/[kategori]/
// path: relative dari folder public (contoh: "/sertifikat/dicoding/nama-file.pdf")
const certificates = [
  // ========== DICODING ==========
  { name: "Belajar Dasar Manajemen Proyek", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar Manajemen Proyek.pdf" },
  { name: "Belajar Analisis Data dengan Python", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Analisis Data dengan Python.pdf" },
  { name: "Belajar Dasar Visualisasi Data", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar Visualisasi Data.pdf" },
  { name: "Belajar Fundamental Pemrosesan Data", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Fundamental Pemrosesan Data.pdf" },
  { name: "Belajar Machine Learning untuk Pemula", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Machine Learning untuk Pemula.pdf" },
  { name: "Belajar Pengembangan Machine Learning", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Pengembangan Machine Learning.pdf" },
  { name: "Machine Learning Terapan", category: "Dicoding", path: "/sertifikat/dicoding/Machine Learning Terapan.pdf" },
  { name: "Membangun Sistem Machine Learning", category: "Dicoding", path: "/sertifikat/dicoding/Membangun Sistem Machine Learning.pdf" },
  { name: "Belajar Penerapan Data Science dengan Microsoft Fabric", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Penerapan Data Science dengan Microsoft Fabric.pdf" },
  { name: "Belajar Penggunaan Generative AI", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Penggunaan Generative AI.pdf" },
  { name: "Membangun Aplikasi Gen AI dengan Microsoft Azure", category: "Dicoding", path: "/sertifikat/dicoding/Membangun Aplikasi Gen AI dengan Microsoft Azure.pdf" },
  { name: "AI Mini Camp", category: "Dicoding", path: "/sertifikat/dicoding/AI Mini Camp - Sakti Mujahid Imani.jpg" },
  { name: "Belajar Dasar AI", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar AI.pdf" },
  { name: "AI Praktis untuk Produktivitas", category: "Dicoding", path: "/sertifikat/dicoding/AI Praktis Untuk Produktivitas.pdf" },
  { name: "Prompt Engineering untuk Software Developer", category: "Dicoding", path: "/sertifikat/dicoding/Prompt Engineering untuk Software Developer.pdf" },
  { name: "Cloud Practitioner Essentials (AWS Cloud)", category: "Dicoding", path: "/sertifikat/dicoding/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).pdf" },
  { name: "Cloud Practitioner Essentials", category: "Dicoding", path: "/sertifikat/dicoding/Cloud Practitioner Essentials.pdf" },
  { name: "Belajar Back-End Pemula dengan JavaScript", category: "Dicoding", path: "/sertifikat/dicoding/Back-End Pemula dengan JavaScript.pdf" },
  { name: "Belajar Dasar Pemrograman JavaScript", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar Pemrograman JavaScript.pdf" },
  { name: "Belajar Dasar SQL", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar Structured Query Language (SQL).pdf" },
  { name: "Belajar Prinsip Pemrograman SOLID", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Prinsip Pemrograman SOLID.pdf" },
  { name: "Belajar Dasar Git dengan GitHub", category: "Dicoding", path: "/sertifikat/dicoding/Belajar Dasar Git dengan GitHub.pdf" },
  { name: "Memulai Pemrograman dengan Python", category: "Dicoding", path: "/sertifikat/dicoding/Memulai Pemrograman dengan Python.pdf" },
  { name: "Memulai Pemrograman Dengan Java", category: "Dicoding", path: "/sertifikat/dicoding/Memulai Pemrograman Dengan Java.pdf" },
  { name: "Memulai Pemrograman Dengan C", category: "Dicoding", path: "/sertifikat/dicoding/Memulai Pemrograman Dengan C.pdf" },
  { name: "Memulai Pemrograman dengan Haskell", category: "Dicoding", path: "/sertifikat/dicoding/Memulai Pemrograman dengan Haskell.pdf" },
  { name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", category: "Dicoding", path: "/sertifikat/dicoding/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.pdf" },
  { name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", category: "Dicoding", path: "/sertifikat/dicoding/Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf" },
  { name: "Financial Literacy 101", category: "Dicoding", path: "/sertifikat/dicoding/Financial Literacy 101.pdf" },

  // ========== ASPRAK ==========
  { name: "Asisten Energi ITERA (AEI)", category: "Asprak", path: "/sertifikat/asprak/Sakti Mujahid Imani AEI.pdf" },
  { name: "Asisten Fisika 2 (2023-2024)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asisten Fisika 2 2023-2024.pdf" },
  { name: "Asprak Fisdas I (2023)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak Fisdas I 2023.pdf" },
  { name: "Asprak Fisdas I (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/SERTIFIKAT ASPRAK FISDAS I TA 2024-2025.pdf" },
  { name: "Asprak Fisdas II (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/SERTIFIKAT ASPRAK FISDAS II TA 2024-2025.pdf" },
  { name: "Asprak Matriks dan Ruang Vektor (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak Matriks dan Ruang Vektor 2024-2025.pdf" },
  { name: "Asprak Pengenalan Prodi TI (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak Pengenalan Prodi Teknik Informatika 2024-2025.pdf" },
  { name: "Asprak PKS 1 (2023-2024)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak PKS 1 2023-2024.pdf" },
  { name: "Asprak PKS 1 (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak PKS 1 2024-2025.pdf" },
  { name: "Asprak PKS 2 (2023-2024)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak PKS 2 2023-2024.pdf" },
  { name: "Asprak Teori Bahasa Formal dan Otomata (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/Sertifikat Asprak Teori Bahasa Formal dan Otomata - 2024-205.pdf" },
  { name: "Kordas Fisdas I (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/SERTIFIKAT KORDAS FISDAS I TA 2024-2025.pdf" },
  { name: "Kordas Fisdas II (2024-2025)", category: "Asprak", path: "/sertifikat/asprak/SERTIFIKAT KORDAS FISDAS II TA 2024-2025.pdf" },

  // ========== HIMPUNAN ==========
  { name: "Staff Divisi Pengembangan dan Pelatihan Keprofesian HMIF", category: "Himpunan", path: "/sertifikat/himpunan/HMIF Staff Divisi Pengembangan dan Pelatihan Keprofesian.pdf" },
  { name: "Surat Rekomendasi Aktif Organisasi HMIF", category: "Himpunan", path: "/sertifikat/himpunan/Sakti Mujahid Imani HMIF.pdf" },
  { name: "Sertifikat Himpunan", category: "Himpunan", path: "/sertifikat/himpunan/Himpunan 2.pdf" },

  // ========== SEMINAR ==========
  { name: "Sertifikat Webinar Kewirausahaan", category: "Seminar", path: "/sertifikat/seminar/Sakti Mujahid Imani - Sertifikat Webinar Kewirausahaan.pdf" },
  { name: "Tryout Merdeka 2022", category: "Seminar", path: "/sertifikat/seminar/E-CERTIF_Sakti Mujahid Imani_TO MERDEKA 2022.pdf" },
  { name: "National Investor Summit KSPM FEB UI", category: "Seminar", path: "/sertifikat/seminar/E-Certificate National Investor Summit KSPM FEB UI - Sakti Mujahid Imani.pdf" },
  { name: "Workshop BUMN 2022 — Strategi Pengembangan Softskill", category: "Seminar", path: "/sertifikat/seminar/Sertifikat Peserta BUMN 2022 Sakti Mujahid Imani.pdf" },
  { name: "SMKI Foreg II 2023", category: "Seminar", path: "/sertifikat/seminar/Sakti Mujahid Imani Sertifikat SMKI Foreg II 2023.pdf" },
  { name: "LOGINAR 2024", category: "Seminar", path: "/sertifikat/seminar/SERTIFIKAT LOGINAR-222.pdf" },
  { name: "DevCoach — Machine Learning & Computer Vision", category: "Seminar", path: "/sertifikat/seminar/devcoach-160-machine-learning-melihat-dunia-dengan-ai-eksplorasi-computer-vision-certificate.pdf" },
  { name: "Digdaya x Hackathon 2026 — Webinar Series", category: "Seminar", path: "/sertifikat/seminar/digdaya-x-hackathon-2026-webinar-series-10-rethinking-the-ledger-membangun-sistem-keuangan-modern-yang-immutable-dan-scalable-certificate.pdf" },
  { name: "Virtual Roadshow METC x IMPHNEN — Hackathon & Datathon", category: "Seminar", path: "/sertifikat/seminar/virtual-roadshow-metc-x-imphnen-h2w-tips-dan-trik-menjadi-pemenang-hackathon-dan-datathon-dengan-bantuan-generative-ai-certificate.pdf" },
  { name: "Participant Certificate", category: "Seminar", path: "/sertifikat/seminar/Sakti Mujahid Imani_Participant Certificate.pdf" },
  { name: "Webinar Sertifikat (1)", category: "Seminar", path: "/sertifikat/seminar/Sakti Mujahid Imani (1).png" },
  { name: "Webinar — Sustainability of Digital Media as Marketing Communication Tools", category: "Seminar", path: "/sertifikat/seminar/SAKTI MUJAHID IMANI-2.png" },

  // ========== LAINNYA ==========
  { name: "Data Analytics — RevoU", category: "Lainnya", path: "/sertifikat/lainnya/Data Analytics RevoU.pdf" },
  { name: "Digistar by Telkom Indonesia", category: "Lainnya", path: "/sertifikat/lainnya/Digistar Sakti Mujahid Imani.pdf" },
  { name: "DFIR Foundations — Blue Cape Security", category: "Lainnya", path: "/sertifikat/lainnya/saktimujahid.9b-DFIR-Foundations-and-Techniques-DFIR-Foundations-Techniques-Professional-Skills-and-Readiness-Blue-Cape-Security.pdf" },
  { name: "Panitia PPLK 2023", category: "Lainnya", path: "/sertifikat/lainnya/Sertifikat Panitia PPLK 2023.png" },
  { name: "Tahfidz Juz 30", category: "Lainnya", path: "/sertifikat/lainnya/Sakti Mujahid Imani Juz 30.jpg" },
];

export { skills, certificates };
