# Portal freelance

Halaman satu layar untuk mencari proyek freelance. Isinya tautan ke tujuh platform dalam tiga kelompok: cari proyek dari klien, tawarkan jasa, dan Web3. Klik logo platform, dan halaman masuknya terbuka di tab baru. Dibuat dengan Vue 3, TypeScript, dan Vite, tanpa backend dan tanpa penyimpanan data. Hasil build berupa situs statis.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Untuk membuat versi produksi: `npm run build`. Hasilnya ada di folder `dist`.

## Mengatur platform

Semua isi halaman ada di `src/data/platforms.ts`. Petunjuk singkatnya juga tertulis di komentar bagian atas file itu.

- **Menambah platform**: taruh file logo di `public/logos/`, lalu tambah satu objek di array `platforms`. Urutan di array adalah urutan tampil.
- **Menghapus platform**: hapus objeknya dari array `platforms`.
- **Mengubah catatan**: edit `note`. Teks ini statis dan bisa saja sudah berubah di platform aslinya.
- **Mengubah alamat login**: edit `loginUrl`, lalu perbarui komentar status login di atas objeknya.

Grup yang tidak punya platform otomatis disembunyikan.

## Mengganti logo

Taruh file di `public/logos/` dengan nama mengikuti `id` platform (misalnya `public/logos/upwork.svg`), lalu samakan nilai `logo` di data, tanpa awalan slash (`logos/upwork.svg`). Kalau file tidak ada atau gagal dimuat, wordmark teks tampil otomatis sebagai pengganti.

## Memeriksa link login

Setelah deploy, klik tiap logo sekali dan pastikan halaman yang terbuka benar. Perbaiki yang salah di `platforms.ts`, terutama entri bertanda `login: belum terverifikasi, cek manual`.

## Deploy

**Vercel**: impor repo. Vite terdeteksi otomatis (build `npm run build`, output `dist`), tanpa konfigurasi tambahan.

**GitHub Pages**: workflow sudah ada di `.github/workflows/deploy.yml`. Di GitHub buka Settings, Pages, lalu pada Source pilih **GitHub Actions**. Setiap push ke `main` akan men-deploy situs.

`vite.config.ts` memakai `base: './'` supaya build jalan di root (Vercel) maupun subpath repo (GitHub Pages).

## Catatan merek dagang

Logo adalah merek dagang milik masing-masing platform. Logo dipakai hanya untuk menandai tautan, dan proyek ini tidak berafiliasi dengan platform mana pun. Cek pedoman merek tiap platform kalau repo dibuat publik.

## Keamanan

Jangan menaruh username, password, atau token di file mana pun, karena repo publik bisa dilihat siapa saja. Login dilakukan langsung di situs masing-masing platform.

Kredensial juga tidak boleh disimpan di kode, repo, atau penyimpanan browser aplikasi ini. Kalau nanti ingin mempercepat login, alternatif yang lebih aman adalah mengandalkan pengelola kata sandi atau fitur isi otomatis browser di halaman login platform. Satu-satunya tempat yang menentukan apa yang terjadi saat tile diklik adalah fungsi `launchTarget` di `src/launch.ts`.

## Asumsi dan hal yang perlu dicek manual

Asumsi yang diambil saat membangun:

- **Logo Fiverr hanya ikon.** Halaman brand dan beranda Fiverr memblokir permintaan otomatis (403). Yang berhasil diambil adalah `apple-touch-icon.png` resmi dari fiverr.com, jadi tile Fiverr menampilkan ikon "fi" tanpa tulisan. Kalau mau logo lengkap, ganti `public/logos/fiverr.png` dengan file dari halaman brand Fiverr.
- **Logo Upwork dan Guru hitam.** Keduanya diambil apa adanya dari situs resmi (Upwork: `upwork-logo.svg`, Guru: SVG di header). Situs itu sendiri menampilkannya hitam. Upwork juga punya versi hijau, kalau mau pakai versi itu ganti filenya.
- **Logo Superteam Earn** diambil dari header halaman Earn (`superteam.fun/assets/logo.svg`).
- **Alamat beranda Superteam Earn** (`earn.superteam.fun`) diteruskan situs ke `superteam.fun/earn/`. Alamat dari data dipertahankan.
- **Warna tombol dan kotak huruf grup B (mode terang)** memakai `#0a766c`, bukan `#0e8f83`. Dengan warna aslinya, teks tombol hanya mencapai kontras 3,5:1, di bawah batas AA 4,5:1. Di mode gelap warnanya tidak diubah.
- **Warna wordmark fallback** memakai nilai warna mode terang di kedua mode (`--a-ink`, `--b-ink`, `--c-ink` di `src/style.css`). Alasannya, tile selalu berlatar putih, dan warna aksen mode gelap yang terang akan sulit dibaca di atasnya.
- **Tombol "Situs utama"** berteks warna `--ink` dengan bingkai `--line`, supaya kontras teks terjamin di semua grup.
- **Dependensi:** `@vue/tsconfig` (basis konfigurasi TypeScript bawaan scaffold Vite) tetap dipakai. `@types/node` dihapus karena tidak dibutuhkan.

Status alamat login:

| Platform | Alamat | Status |
|----------|--------|--------|
| Projects.co.id | `https://projects.co.id/public/home/login` | Terverifikasi |
| Freelancer.com | `https://www.freelancer.com/login` | Terverifikasi |
| Guru | `https://www.guru.com/login.aspx` | Terverifikasi (`/login` tanpa `.aspx` menghasilkan 404) |
| Upwork | `https://www.upwork.com/ab/account-security/login` | Terverifikasi |
| Fastwork | `https://fastwork.id` | Belum terverifikasi: tidak ada halaman login terpisah, tombol "Masuk" memulai alur OAuth |
| Fiverr | `https://www.fiverr.com/login` | Belum terverifikasi: situs memblokir permintaan otomatis (403) |
| Superteam Earn | `https://earn.superteam.fun` | Belum terverifikasi: login diduga berupa pop-up di beranda |
