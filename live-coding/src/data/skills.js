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
  { name: "Belajar Dasar Manajemen Proyek", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1_mT_TcZtk4FWcZfOmOaHQmnjEaHyrxAw" },
  { name: "Belajar Analisis Data dengan Python", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1gc0D2iGK62U0gCDhGWNDcEJ1hZeEOlVh" },
  { name: "Belajar Dasar Visualisasi Data", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1hoAgdmDq_sJueY3j_2TXTL_ok-Bmf46v" },
  { name: "Belajar Fundamental Pemrosesan Data", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1iiLFpPI9sh5bwsFhs7Q0UFpGQoX8qPFO" },
  { name: "Belajar Machine Learning untuk Pemula", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1d7m4puHr5FxCAOAnygOihGgOOzWY9h1q" },
  { name: "Belajar Pengembangan Machine Learning", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1nG4M0-sty76yNwiyafak3vp1GYVoNrFZ" },
  { name: "Machine Learning Terapan", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1N_OiITqJBHRt0rF-ddpXwFsBIglCL_2w" },
  { name: "Membangun Sistem Machine Learning", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Hc5lJMlL_vGiEUe8Z8ffAn5NA076_qve" },
  { name: "Belajar Penerapan Data Science dengan Microsoft Fabric", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1wHhKVY7H-vtq0Zy03wSe2U9Eq_s4jfv_" },
  { name: "Belajar Penggunaan Generative AI", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1YQ-KtfL0yv2j7WsG_AsEPTXMw8v_8-CW" },
  { name: "Membangun Aplikasi Gen AI dengan Microsoft Azure", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1YdSB1XJN0GB9rDhb9A0lqAR0N_ZQ1nFW" },
  { name: "AI Mini Camp", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Vbd7etzUTyJ1JpIIVIpfy2UsttLLU2iI" },
  { name: "Belajar Dasar AI", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=112al8-XdTfHoWnXdoEWqJAmJADMJWmuA" },
  { name: "AI Praktis untuk Produktivitas", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=14C5n4XR-5jnOum88wivSzE_Opr16LuB4" },
  { name: "Prompt Engineering untuk Software Developer", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1lESWxxBRPS0TeCknPiOv-qpkDB8j2-Qd" },
  { name: "Cloud Practitioner Essentials (AWS Cloud)", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Zh-b5h9Gqkb4Gf7xucYsJp059VcI-K2l" },
  { name: "Cloud Practitioner Essentials", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1FvzvWs1ydx1eLc-y0h3fPVs4BA3AMI1v" },
  { name: "Belajar Back-End Pemula dengan JavaScript", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Ev2e2yrNYb8LoYCJiRRmUv3iIHd_H0cN" },
  { name: "Belajar Dasar Pemrograman JavaScript", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1vctSxXUzCi6gg6w4D9bUloKczzH2TF0W" },
  { name: "Belajar Dasar SQL", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1TpCZtqgt2W0eMbpCNeMN05vQjiP4UoEA" },
  { name: "Belajar Prinsip Pemrograman SOLID", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1uFMR7BWtdYQUbUBB-ENXmcsb4nVdblZ_" },
  { name: "Belajar Dasar Git dengan GitHub", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1L_c8_29ELuYYrrz90F4KR0lymkBuuvl8" },
  { name: "Memulai Pemrograman dengan Python", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1eLlbaXTLYTWkLFNGsF5C9OsrYCVL6AEF" },
  { name: "Memulai Pemrograman Dengan Java", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1zg0MQck1tps4wQxeKfxmoWoiWc-2n1rf" },
  { name: "Memulai Pemrograman Dengan C", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1AG9KQ80GWU9gCGdIqFEdecNDWgV3N5Kq" },
  { name: "Memulai Pemrograman dengan Haskell", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1VwyxyIMM-Q-3cJcNAEXO6_Owi76AFOu0" },
  { name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Jr9kgTMWK3zntXqok0jruASKenYVPcjt" },
  { name: "Pengenalan ke Logika Pemrograman", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1I72-s83oE1KIKLY7Gx1E0xT0Cpxf3bO3" },
  { name: "Financial Literacy 101", category: "Dicoding", path: "https://drive.google.com/uc?export=download&id=1Q7QiakQgPY712YXla3sMjojet3hw5k1T" },

  // ========== TEACHING ASSISTANT ==========
  { name: "Agama dan Etika Islam (AEI) - Semester Genap, ITERA (2023/2024)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1RVtN9aHeqjwTdv0RrhRfbnlYprNTtXA-" },
  { name: "Dasar Rekayasa Perangkat Lunak - Semester Genap, Teknik Informatika ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1NxrMC-zS8HlyBQn5JmNiA3kVqpZ8jg3q" },
  { name: "Kewirausahaan - Semester Genap, Teknik Informatika ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1VXoaCN8jWGUDDuJZa9W74zEXRhjLOuHL" },
  { name: "Koordinator Praktikum Fisika Dasar dan Pengantar Fisika - Semester Ganjil, ITERA (2025/2026)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1hBsp4dlznid3tP1EAr7CD-uDoC7icY_8" },
  { name: "Koordinator Praktikum Fisika Dasar I - Semester Ganjil, ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1VzmP5AjHFu0lo2VJ7k2HuNyLBSMm4bZD" },
  { name: "Koordinator Praktikum Fisika Dasar II - Semester Genap, ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1xmXFACI3-jLcWkypL0782hQrZ77zdZks" },
  { name: "Matriks dan Ruang Vektor - Semester Ganjil, Teknik Informatika ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1NijRjeT2W2DjcD0OjR2FUSBykdsx9GCT" },
  { name: "Pengantar Komputer dan Software I - Semester Ganjil, ITERA (2023/2024)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1fGuwfkYkfMANan_eD2FLIy9SY74eYNwe" },
  { name: "Pengantar Komputer dan Software I - Semester Ganjil, ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=11Xap1XTDTtG8BGy88qVTXagFxgoXGsOB" },
  { name: "Pengantar Komputer dan Software II - Semester Genap, ITERA (2023/2024)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1Fl7rfTPDew6LbvTtYmjEQfrUkVzrhH0e" },
  { name: "Pengenalan Prodi Teknik Informatika - Semester Ganjil, Teknik Informatika ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1abKcljUPh-N_ZibQjuY5k_u9UIkiDKyX" },
  { name: "Praktikum Fisika Dasar dan Pengantar Fisika - Semester Ganjil, ITERA (2025/2026)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1k2UflaCMezH5gkXoi8o8AdpOG4nl1NDK" },
  { name: "Praktikum Fisika Dasar I - Semester Ganjil, ITERA (2023/2024)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1KCPz-nhjB99JPG0XmmoGfowQ2Jik56P6" },
  { name: "Praktikum Fisika Dasar I - Semester Ganjil, ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1wnCFTT2QC8rlLEqQ24UoOrDRGFh_iRRo" },
  { name: "Praktikum Fisika Dasar II - Semester Genap, ITERA (2023/2024)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=1o3ENi0PRZhK8mv_DHT4XuGe3bBkg91rb" },
  { name: "Praktikum Fisika Dasar II - Semester Genap, ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=17ANC0fPiJi-tERF6PTzUNyJEK78RvNft" },
  { name: "Teori Bahasa Formal dan Otomata - Semester Ganjil, Teknik Informatika ITERA (2024/2025)", category: "Teaching Assistant", path: "https://drive.google.com/uc?export=download&id=17GrMg9vF-TSs2YxnqW5UazXZuRCjl1oQ" },

  // ========== ORGANIZATION ==========
  { name: "Staff Divisi Pengembangan dan Pelatihan Keprofesian HMIF", category: "Organization", path: "/sertifikat/himpunan/HMIF Staff Divisi Pengembangan dan Pelatihan Keprofesian.pdf" },
  { name: "Surat Rekomendasi Aktif Organisasi HMIF", category: "Organization", path: "/sertifikat/himpunan/Sakti Mujahid Imani HMIF.pdf" },
  { name: "Sertifikat Himpunan", category: "Organization", path: "/sertifikat/himpunan/Himpunan 2.pdf" },

  // ========== SEMINARS & WORKSHOPS ==========
  { name: "Sertifikat Webinar Kewirausahaan", category: "Seminars & Workshops", path: "/sertifikat/seminar/Sakti Mujahid Imani - Sertifikat Webinar Kewirausahaan.pdf" },
  { name: "Tryout Merdeka 2022", category: "Seminars & Workshops", path: "/sertifikat/seminar/E-CERTIF_Sakti Mujahid Imani_TO MERDEKA 2022.pdf" },
  { name: "National Investor Summit KSPM FEB UI", category: "Seminars & Workshops", path: "/sertifikat/seminar/E-Certificate National Investor Summit KSPM FEB UI - Sakti Mujahid Imani.pdf" },
  { name: "Workshop BUMN 2022 — Strategi Pengembangan Softskill", category: "Seminars & Workshops", path: "/sertifikat/seminar/Sertifikat Peserta BUMN 2022 Sakti Mujahid Imani.pdf" },
  { name: "SMKI Foreg II 2023", category: "Seminars & Workshops", path: "/sertifikat/seminar/Sakti Mujahid Imani Sertifikat SMKI Foreg II 2023.pdf" },
  { name: "LOGINAR 2024", category: "Seminars & Workshops", path: "/sertifikat/seminar/SERTIFIKAT LOGINAR-222.pdf" },
  { name: "DevCoach — Machine Learning & Computer Vision", category: "Seminars & Workshops", path: "/sertifikat/seminar/devcoach-160-machine-learning-melihat-dunia-dengan-ai-eksplorasi-computer-vision-certificate.pdf" },
  { name: "Digdaya x Hackathon 2026 — Webinar Series", category: "Seminars & Workshops", path: "/sertifikat/seminar/digdaya-x-hackathon-2026-webinar-series-10-rethinking-the-ledger-membangun-sistem-keuangan-modern-yang-immutable-dan-scalable-certificate.pdf" },
  { name: "Virtual Roadshow METC x IMPHNEN — Hackathon & Datathon", category: "Seminars & Workshops", path: "/sertifikat/seminar/virtual-roadshow-metc-x-imphnen-h2w-tips-dan-trik-menjadi-pemenang-hackathon-dan-datathon-dengan-bantuan-generative-ai-certificate.pdf" },
  { name: "Participant Certificate", category: "Seminars & Workshops", path: "/sertifikat/seminar/Sakti Mujahid Imani_Participant Certificate.pdf" },
  { name: "Webinar Sertifikat (1)", category: "Seminars & Workshops", path: "/sertifikat/seminar/Sakti Mujahid Imani (1).png" },
  { name: "Webinar — Sustainability of Digital Media as Marketing Communication Tools", category: "Seminars & Workshops", path: "/sertifikat/seminar/SAKTI MUJAHID IMANI-2.png" },

  // ========== OTHERS ==========
  { name: "Data Analytics — RevoU", category: "Others", path: "https://drive.google.com/uc?export=download&id=1QZxh13paKkCpkx5u1YvwExsMohq_d7hv" },
  { name: "Digistar by Telkom Indonesia", category: "Others", path: "https://drive.google.com/uc?export=download&id=14vDFIjoUgpyUHW9nmwt-bLLfGoql3OFc" },
  { name: "DFIR Foundations — Blue Cape Security", category: "Others", path: "https://drive.google.com/uc?export=download&id=1Bovqvf3f9UNIx2OTm7KIHah7NpaWo1Nl" },
  { name: "Panitia PPLK 2023", category: "Others", path: "/sertifikat/lainnya/Sertifikat Panitia PPLK 2023.png" },
  { name: "Tahfidz Juz 30", category: "Others", path: "/sertifikat/lainnya/Sakti Mujahid Imani Juz 30.jpg" },
];

export { skills, certificates };
