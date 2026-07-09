# 🏰 Clubby Network Portal — Portal Komunitas Minecraft Bedrock Indonesia

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Landing page resmi dan portal hub interaktif untuk **Club Minecraft Indonesia (Clubby Network)**. Platform ini dirancang dengan arsitektur modern berbasis React + TypeScript + Tailwind CSS untuk menyediakan informasi penting seputar server IP, grup komunitas WhatsApp, unduhan Minecraft Bedrock Edition terbaru, daftar peringkat (ranks), tautan voting portal harian, serta dukungan donasi.

---

## ✨ Fitur Utama

1. **Mobile-First & High-Performance Design**: Responsive Web Design (RWD) yang telah dioptimasi penuh agar ringan, bebas tumpah tindih (overlap), dan memiliki scrolling super lancar di layar seluler maupun monitor ultra-wide.
2. **Modular State Navigation**: Transisi antar halaman (Home, Server, Download, Community, Ranks, Vote, Donate, Developer) yang ditenagai oleh React state dan micro-animations dari `motion` (framer-motion) untuk mencegah kelambatan pemuatan halaman penuh.
3. **Download Center**: Menyediakan tautan unduh bersih (clean) untuk Minecraft Bedrock Edition (Stable & Beta).
4. **Community Hub**: Menghubungkan pemain ke grup WhatsApp resmi berdasarkan kriteria interaksi (Group Utama, Pengumuman, WhatsApp Channel, Let's Join SMP).
5. **Vote Rewards Tracker**: Menyediakan link vote portal eksternal untuk mendukung server agar mendapatkan hadiah Lootbox gratis di dalam game.
6. **Open Source Contribution Hub**: Terkoneksi langsung dengan GitHub API Config repositori untuk menggalang kontribusi pengembang komunitas secara transparan.

---

## 🛠️ Stack Teknologi

- **Frontend Library**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Type-safe compilation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion v12+)
- **Iconography**: [Lucide React](https://lucide.dev/) (Clean vector icons)

---

## 🚀 Panduan Memulai (Instalasi Lokal)

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) versi 18 atau yang terbaru, serta NPM/Yarn.

### Langkah-Langkah

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/mcpeserver/clubby-network-portal.git
   cd clubby-network-portal
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Akses website di [http://localhost:3000](http://localhost:3000) (atau port yang disetel oleh sistem).

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build static web akan berada pada direktori `dist/` dan siap dideploy di Vercel, Netlify, Cloud Run, atau VPS.

---

## 📁 Struktur Direktori

```text
├── public/                # File statis (robots.txt, sitemap.xml, favicons)
├── src/
│   ├── assets/            # Gambar, logo, & vektor lokal
│   ├── components/        # Komponen modular visual terpisah per section
│   │   ├── AboutClubby.tsx
│   │   ├── AboutCommunity.tsx
│   │   ├── CommunityGroups.tsx
│   │   ├── DonationSection.tsx
│   │   ├── DownloadMinecraft.tsx
│   │   ├── Footer.tsx
│   │   ├── GithubCollaboration.tsx
│   │   ├── HeroSection.tsx
│   │   ├── QuickActions.tsx
│   │   ├── RankList.tsx
│   │   ├── ServerFeatures.tsx
│   │   ├── StickyHeader.tsx
│   │   └── VoteSection.tsx
│   ├── constants.ts       # Semua tautan, link WhatsApp, URL Download, & API
│   ├── App.tsx            # Komponen inti & State Router navigasi
│   ├── main.tsx           # Entry point utama React
│   ├── index.css          # Impor Tailwind CSS & custom CSS Variables
│   └── types.ts           # Definisi interface TypeScript
├── index.html             # HTML Shell dengan metadata SEO & Open Graph (OG)
├── package.json           # File deklarasi modul & script NPM
└── tsconfig.json          # Konfigurasi compiler TypeScript
```

---

## 🤝 Berkontribusi

Kami mengapresiasi setiap masukan dan kontribusi kode! Ikuti aturan berikut untuk kontribusi:

1. **Fork** repositori ini.
2. Buat branch fitur baru (`git checkout -b feature/FiturKerenAnda`).
3. Commit perubahan Anda (`git commit -m "feat: Menambahkan widget Server Status"`).
4. Push ke branch tersebut (`git push origin feature/FiturKerenAnda`).
5. Buat **Pull Request (PR)** baru ke branch utama (`main`).

Selengkapnya mengenai kontribusi dapat dibaca pada [CONTRIBUTING.md](./.github/CONTRIBUTING.md) atau hubungi tim pengembang via GitHub Issue.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](./LICENSE) untuk detail lebih lanjut.
