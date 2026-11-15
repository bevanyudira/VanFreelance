/*
 * Semua isi halaman berasal dari file ini.
 *
 * Menambah platform:
 *   1. Taruh file logo di public/logos/<id>.<ekstensi>.
 *   2. Tambah satu objek di array `platforms` di bawah (urutan di array = urutan tampil).
 *      Isi `logo` dengan path relatif tanpa awalan slash, mis. 'logos/upwork.svg'.
 *   3. Beri komentar status login di atas objeknya.
 *
 * Menghapus platform: hapus objeknya dari array `platforms` (file logo boleh ikut dihapus).
 * Mengubah catatan: edit `note`. Teks ini statis dan bisa berubah di platform aslinya.
 * Mengganti alamat login: edit `loginUrl`, lalu perbarui komentar status login di atasnya.
 * Mengganti logo: timpa file di public/logos/ atau ubah nilai `logo`. Kalau file tidak
 * ada atau gagal dimuat, wordmark teks dari `wordmark` tampil otomatis.
 *
 * Grup yang tidak punya platform otomatis disembunyikan.
 */
import type { Group, Platform } from '../types'

export const groups: Group[] = [
  {
    id: 'A',
    title: 'Cari proyek dari klien',
    hint: 'Kamu melamar ke proyek yang diposting klien, klien membayar lewat platform.',
  },
  {
    id: 'B',
    title: 'Tawarkan jasa',
    hint: 'Kamu memasang jasa, klien yang mencari dan memesan.',
  },
  {
    id: 'C',
    title: 'Web3',
    hint: 'Bayaran biasanya dalam kripto. Cek escrow dan keamanannya sebelum mengerjakan.',
  },
]

export const platforms: Platform[] = [
  // login: terverifikasi (tautan "Login" di beranda, status 200)
  {
    id: 'projects-co-id',
    name: 'Projects.co.id',
    group: 'A',
    url: 'https://projects.co.id',
    loginUrl: 'https://projects.co.id/public/home/login',
    logo: 'logos/projects-co-id.png',
    note: 'Bid gratis, ada rekber, bayaran rupiah.',
    wordmark: { main: 'projects', sub: '.co.id', layout: 'inline' },
  },
  // login: terverifikasi (tautan "Log in" di beranda, status 200)
  {
    id: 'freelancer',
    name: 'Freelancer.com',
    group: 'A',
    url: 'https://www.freelancer.com',
    loginUrl: 'https://www.freelancer.com/login',
    logo: 'logos/freelancer.svg',
    note: 'Akun gratis dapat 6 bid per bulan.',
    wordmark: { main: 'freelancer', sub: '.com', layout: 'inline' },
  },
  // login: terverifikasi (tautan "Sign in" di beranda, status 200; /login tanpa .aspx menghasilkan 404)
  {
    id: 'guru',
    name: 'Guru',
    group: 'A',
    url: 'https://www.guru.com',
    loginUrl: 'https://www.guru.com/login.aspx',
    logo: 'logos/guru.svg',
    note: 'Akun gratis dapat 10 quote per bulan.',
    wordmark: { main: 'guru', layout: 'inline' },
  },
  // login: terverifikasi (tautan "Log in" di beranda, status 200; /login mengarah ke alamat ini)
  {
    id: 'upwork',
    name: 'Upwork',
    group: 'A',
    url: 'https://www.upwork.com',
    loginUrl: 'https://www.upwork.com/ab/account-security/login',
    logo: 'logos/upwork.svg',
    note: 'Melamar butuh Connects. Cocok setelah punya review.',
    wordmark: { main: 'upwork', layout: 'inline' },
  },
  // login: belum terverifikasi, cek manual
  // Tidak ada halaman login terpisah yang bisa ditemukan: tombol "Masuk" di beranda memulai
  // alur OAuth ke auth2.fastwork.id dengan parameter dinamis, jadi dipakai alamat beranda.
  {
    id: 'fastwork',
    name: 'Fastwork',
    group: 'B',
    url: 'https://fastwork.id',
    loginUrl: 'https://fastwork.id',
    logo: 'logos/fastwork.svg',
    note: 'Pasang jasa, dana klien ditahan sampai pekerjaan disetujui.',
    wordmark: { main: 'fast', sub: 'work', layout: 'stacked' },
  },
  // login: belum terverifikasi, cek manual
  // Situs memblokir permintaan otomatis (403). /login adalah alamat yang umum dipakai Fiverr,
  // tapi belum bisa dibuka dan dicek dari sini.
  {
    id: 'fiverr',
    name: 'Fiverr',
    group: 'B',
    url: 'https://www.fiverr.com',
    loginUrl: 'https://www.fiverr.com/login',
    logo: 'logos/fiverr.png',
    note: 'Pasar global, fee sekitar 20%.',
    wordmark: { main: 'fiverr', layout: 'inline' },
  },
  // login: belum terverifikasi, cek manual
  // Beranda tidak punya tautan login. Situs memakai jendela pop-up login (Privy), jadi dipakai
  // alamat beranda. Alamat ini diteruskan ke https://superteam.fun/earn/.
  {
    id: 'superteam-earn',
    name: 'Superteam Earn',
    group: 'C',
    url: 'https://earn.superteam.fun',
    loginUrl: 'https://earn.superteam.fun',
    logo: 'logos/superteam-earn.svg',
    note: 'Proyek dan bounty ekosistem Solana, dibayar USDC.',
    wordmark: { main: 'superteam', sub: 'earn', layout: 'stacked' },
  },
]
