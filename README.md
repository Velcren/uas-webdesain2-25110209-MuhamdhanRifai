# UAS Web Desain II - Project UMKM Caesar Helm

## Informasi Mahasiswa & Mata Kuliah
* **Nama** : Muhamdhan Rifa'i
* **NIM** : 25 11 0209
* **Mata Kuliah** : Web Desain 2 (MKK 123)
* **UMKM** : Caesar Helm Rajawali
* **Lokasi** : Jl. Rajawali, Sukajadi, Pekanbaru

---

## Deskripsi Project
Project ini merupakan pembuatan website profil & katalog produk interaktif untuk UMKM **Caesar Helm Pekanbaru**. Website dikembangkan menggunakan pendekatan **Single Page Application (SPA)** agar navigasi antarhalaman terasa cepat, modern, dan *seamless* tanpa memuat ulang (*reload*) halaman peramban.

---

## Fitur Utama Website
1. **Home (Beranda)**
   * Hero Banner / Carousel Slider promosi berbasis Bootstrap 4.
   * Ringkasan keunggulan layanan dan produk toko.
2. **About (Profil Toko)**
   * Informasi latar belakang UMKM Caesar Helm Rajawali Pekanbaru.
   * Visi dan misi pelayanan keselamatan berkendara.
3. **Produk (Katalog Helm)**
   * Etalase produk helms terbagi ke beberapa tipe (Full Face, Half Face, dan Classic/Retro).
   * Informasi detail harga singkat serta tombol *call-to-action* pemesanan.
4. **Kontak & Lokasi**
   * Formulir pesan/inquiry terintegrasi.
   * Informasi kontak (Email, Telp/WA, Jam Operasional).
   * Integrasi *Google Maps Embed* lokasi toko Caesar Helm Rajawali.

---

## Teknologi yang Digunakan
* **HTML5**: Struktur konten web dinamis.
* **CSS3**: Kustomisasi gaya visual, tema *color palette* (Navy & Gold), dan animasi transisi (`@keyframes fadeUp`).
* **Bootstrap 4.5.3**: Framework CSS untuk tata letak responsif, grid system, modal, dan carousel.
* **Bootstrap Icons & Font Awesome**: Iconography pendukung interface.
* **JavaScript (ES6) & jQuery**: Manipulasi DOM untuk logika navigasi perpindahan halaman (*Single Page Application*).

---

## Tahap Pembuatan

### 1. Perancangan & Penyusunan Struktur HTML (`index.html`)
* Membuat struktur dasar halaman web lengkap dengan komponen *Navbar*, *Carousel*, serta section khusus untuk `page-home`, `page-about`, `page-produk`, dan `page-kontak`.
* Menerapkan atribut kustom `data-page="..."` pada setiap tombol/link navigasi untuk mempermudah identifikasi target oleh JavaScript.

### 2. Styling & Responsivitas (`style.css`)
* Menentukan identitas warna utama website (*Navy* dan *Gold*).
* Menambahkan gaya visual *Card* modern, *Icon Box*, serta efek *hover* pada katalog produk.
* Menyiapkan kelas `.page-view` (`display: none`) dan `.page-view.active` (`display: block`) sebagai pondasi animasi perpindahan halaman SPA.

### 3. Pengembangan Interaktivitas (`script.js`)
* Membuat fungsi utama `pindahHalaman(namaHalaman)` yang bekerja dengan cara:
  1. Menangkap event `click` dari tombol bernavigasi.
  2. Mencegah aksi *reload* default browser (`e.preventDefault()`).
  3. Menghapus kelas `.active` dari halaman lama dan menambahkan kelas `.active` ke elemen ID target (misal `#page-about`).
  4. Mengatur ulang *state* aktif pada menu *Navbar* dan mengembalikan posisi *scroll* ke bagian paling atas (`scrollTo`).

### 4. Pengujian & Finishing
* Pengujian responsivitas tampilan pada berbagai ukuran layar (*mobile*, *tablet*, *desktop*).
* Memastikan semua tautan gambar produk, ikon, serta peta interaktif Google Maps berfungsi dengan baik.

---

## Cara Menjalankan Project
1. Unduh atau *clone* repositori ini.
2. Pastikan file `index.html`, `style.css`, `script.js`, dan folder `bootstrap-4.5.3-dist` berada dalam satu direktori yang sama.
3. Buka file `index.html` menggunakan *web browser* pilihan Anda (Google Chrome, Edge, Firefox, dll.).