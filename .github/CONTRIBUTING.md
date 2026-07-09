# 🤝 Panduan Kontribusi Clubby Network

Terima kasih atas ketertarikan Anda untuk berkontribusi pada pengembangan portal komunitas **Clubby Network**! Kontribusi dari komunitas sangatlah berharga untuk menjaga portal ini tetap up-to-date, aman, dan berkinerja tinggi.

Berikut adalah beberapa panduan yang perlu Anda ikuti untuk mengajukan perubahan:

---

## 🛠️ Persiapan Lingkungan Kerja

1. **Fork Repositori**: Lakukan fork pada repositori portal ini ke akun GitHub pribadi Anda.
2. **Clone Lokal**:
   ```bash
   git clone https://github.com/AKUN_GITHUB_ANDA/clubby-network-portal.git
   cd clubby-network-portal
   ```
3. **Instal Dependensi**: Gunakan Node.js v18+ dan NPM:
   ```bash
   npm install
   ```
4. **Jalankan Dev Server**:
   ```bash
   npm run dev
   ```

---

## 🌿 Aturan Branch & Alur Kerja

- Selalu buat branch baru yang deskriptif dari branch utama (`main`):
  ```bash
  git checkout -b feature/nama-fitur
  # ATAU
  git checkout -b bugfix/nama-bug
  ```
- Lakukan perubahan kode secara modular (pisahkan komponen jika terlalu besar).
- Sebelum melakukan commit, pastikan tidak ada kesalahan ketik (typo) atau eror TypeScript:
  ```bash
  npm run lint
  npm run build
  ```

---

## ✍️ Aturan Penulisan Kode (Coding Standards)

1. **TypeScript & Type Safety**:
   - Selalu gunakan pengetikan statis yang jelas (hindari `any` jika memungkinkan).
   - Ekstrak komponen baru ke folder `src/components/` dan impor secara modular.
2. **Styling**:
   - Selalu gunakan utility class dari **Tailwind CSS**.
   - Hindari inline styling (`style={{ ... }}`) kecuali untuk nilai dinamis yang dihitung oleh JavaScript.
3. **Optimasi Mobile-First**:
   - Desain tata letak harus responsif dan diuji di resolusi ponsel (`sm:`, `md:`) sebelum layar besar (`lg:`, `xl:`).
   - Pastikan teks dan tombol tidak saling bertumpukan atau terpotong di layar HP.

---

## 📥 Pengajuan Pull Request (PR)

1. Push branch Anda ke repository fork Anda:
   ```bash
   git push origin feature/nama-fitur
   ```
2. Buka halaman GitHub dari repositori utama dan klik **"New Pull Request"**.
3. Tulis judul PR yang jelas (misal: `feat: menambahkan info update server v1.21`).
4. Jelaskan apa saja perubahan yang Anda lakukan dan lampirkan screenshot jika ada perubahan UI.
5. Tunggu proses review dan feedback dari admin pengembang.

Terima kasih banyak atas waktu dan kontribusi berharga Anda!
