# Project Context: Personal Portfolio

## Tentang proyek

- Website portfolio pribadi Sakti Mujahid Imani sebagai Software Engineer, dibangun dengan **Vite 8 + React 19 (SPA)** dan **Tailwind CSS v4**.
- Tujuan: Menunjukkan keahlian teknis dan portofolio proyek nyata kepada recruiter, tech lead, dan klien.
- Untuk semua pekerjaan UI, pegang teguh skill `modern-frontend-design` (gaya minimalis editorial, bersih, tanpa AI slop).

## Arsitektur web & deck

1. **Halaman Utama (`/`)**: General Portfolio — merangkum seluruh spektrum pengalaman (Web Development, Institutional Systems, QA & Testing, Multimodal ML Research, dan Pengalaman Akademik/Asisten Praktikum).
2. **Specialized Pitch Decks**:
   - `/deck-webdev`: Khusus posisi Web Developer / Full-Stack Engineer.
   - `/deck-qa`: Khusus posisi Manual QA / Software Testing Specialist.
   - Kedua deck dioptimalkan untuk presentasi layar (16:9) dan **cetak PDF landscape A4** (`@media print`, 297mm x 210mm per slide).

## Aturan teknis & styling

- Stack resmi: React 19, Vite 8, Tailwind CSS v4 (`@import "tailwindcss"`), Framer Motion 12, Lucide React.
- **Bukan Next.js**: Proyek ini adalah client-side SPA. Jangan memakai Server Components atau directive `"use client"`.
- Semua warna, border, dan spacing menggunakan CSS variables / token yang sudah ada di `src/index.css`.
- Desain *engineer-first*: Hindari dekorasi murahan seperti neon glow blob, fake browser mockup 3 titik, dan pinging animations. Gunakan tipografi tegas, hairline border 1px, dan font monospace untuk metadata teknis.

## Aturan konten & copywriting

- Teks portfolio dalam bahasa Inggris, profesional, autentik, dan langsung ke poin (*de-jargonized*).
- Setiap proyek harus memiliki deskripsi dan metrik yang unik serta realistis (jangan menduplikasi teks antar proyek, dan jangan gunakan klaim berlebihan seperti "100% test pass rate").
- Jangan membuat klaim, angka, atau pengalaman fiktif. Jika butuh data riil, gunakan data yang sudah ada di `src/data/`.

## Aturan sertifikat

- Sertifikat yang kurang relevan (webinar 1 jam, tryout, non-teknis) **dijadikan comment `//`, jangan dihapus**.
- Halaman utama menampilkan banyak sertifikat berbobot (Dicoding teknis, Asisten Praktikum ITERA, HMIF, DBS, Hibah, Digistar).
- Di kedua deck (`/deck-qa` dan `/deck-webdev`), **hanya cantumkan 5–6 sertifikat yang strictly relevan** dengan bidang masing-masing.

## Sebelum selesai

- Jalankan `npm --prefix live-coding run lint` dan pastikan 0 errors.
- Jalankan `npm --prefix live-coding run build` dan pastikan build sukses.
- Cek responsivitas mobile (375px) dan desktop (1280px), serta preview cetak PDF pada kedua deck.
