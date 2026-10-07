# Merit System Polri - Backend API 👮‍♂️🛡️

> RESTful API terpusat untuk Sistem Manajemen Kualifikasi, Rekam Jejak, dan Riwayat Jabatan (Merit System) Personel Polri.

![Node.js](https://img.shields.io/badge/Node.js-v14+-43853D?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-404D59?style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI_3.0-85EA2D?style=flat-square&logo=swagger&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=flat-square&logo=JSON%20web%20tokens&logoColor=white)

---

## 📖 Ringkasan

Sistem ini adalah kerangka Backend (REST API) yang dirancang secara terstruktur dan skalabel menggunakan pola arsitektur **Controller-Service-Router**. API ini bertugas mengelola seluruh data fundamental yang berkaitan dengan *Merit System* Personel Polri, mulai dari data Personel, Satuan Kerja (Satker), Riwayat Pendidikan, hingga Mutasi dan Penempatan.

## ✨ Fitur Unggulan

- **Arsitektur Berlapis (Layered Architecture):** Memisahkan *Routing*, *Business Logic* (Services), dan *Request Handling* (Controllers) untuk *maintainability* yang tinggi.
- **Keamanan (Authentication & Authorization):** Menggunakan *JSON Web Token* (JWT) dengan *Role-Based Access Control* (Admin & Operator).
- **Global Error Handling:** Intersepsi dan standarisasi struktur *error response* terpusat (termasuk menangani *MySQL Foreign Key Constraint Fails* secara anggun).
- **Dokumentasi Otomatis:** Terintegrasi penuh dengan **Swagger UI** (OpenAPI 3.0) untuk eksplorasi dan *testing* API secara interaktif.
- **Relasi Database Kompleks:** Mengakomodasi 19+ entitas terelasi (Personel, Jabatan, Kepangkatan, DSP, Mutasi, Satker, dsb) menggunakan pola *Left Join* responsif.

## 🗂️ Struktur Proyek

```text
.
├── src/
│   ├── config/
│   │   ├── db.js              # Konfigurasi database
│   │   └── swagger.js         # Konfigurasi Swagger
│   │
│   ├── controllers/           # Menangani HTTP request & response
│   ├── middlewares/           # Middleware (JWT Auth & Global Error Handler)
│   ├── routes/                # Definisi endpoint API & anotasi Swagger
│   ├── services/              # Business logic & database queries (CRUD & relasi)
│   ├── validators/            # Validasi input menggunakan express-validator
│   │
│   └── server.js              # Entry point aplikasi
│
├── .env                       # Environment variables
├── database.md                # Dokumentasi skema database
└── package.json               # Dependensi Node.js
```

## 🚀 Panduan Instalasi & Menjalankan Aplikasi

### 1. Prasyarat Sistem
- **Node.js** (v14.x atau versi terbaru)
- **MySQL Server** (XAMPP, Laragon, atau native)

### 2. Konfigurasi Database
1. Buat database baru di MySQL (misal: \`db_merit_system\`).
2. Impor struktur tabel menggunakan referensi *schema* yang ada di dokumentasi proyek (\`database.md\` / *raw queries*).
3. Buat file \`.env\` di *root* direktori proyek berdasarkan konfigurasi lokal Anda:

   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=db_merit_system
   JWT_SECRET=isirahasia
   ```

### 3. Instalasi Dependensi
Buka terminal di dalam direktori proyek, lalu jalankan:

```bash
npm install
```

### 4. Menjalankan Server
Untuk lingkungan *development* (menggunakan \`nodemon\` jika dikonfigurasi):

```bash
npm run start
```
> *Aplikasi akan berjalan di port 3000 (atau port yang didefinisikan di \`.env\`)*

---

## 📚 Dokumentasi API (Swagger UI)

Setelah server berhasil berjalan, dokumentasi lengkap dan interaktif dari API ini dapat diakses secara langsung melalui *browser*:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

Melalui halaman Swagger UI tersebut, Anda dapat:
1. Membaca spesifikasi *Request Body* dari seluruh 19+ Endpoint API.
2. Melakukan proses otentikasi (klik gembok / \`Authorize\`) menggunakan JWT.
3. Mencoba eksekusi *Request* secara langsung dari halaman *browser*.

### Endpoint Tersedia (Garis Besar)
Aplikasi ini melingkupi manajemen data untuk entitas berikut:
- `Auth`
- `Role`
- `Personel`, `Riwayat Pendidikan`
- `Satker`, `Unit Organisasi`, `Tingkat Organisasi`, `Tipe Organisasi`
- `Jabatan`, `Jabatan Struktur`, `Jabatan Pangkat`
- `Pangkat Polri`, `Pangkat PNS`
- `DSP` 
- `Mutasi` & `Penempatan`

---

## 🔒 Mekanisme Otentikasi (JWT)

1. Lakukan \`POST /api/auth/login\` dengan mengirimkan payload \`username\` dan \`password\`.
2. Jika berhasil, server akan mengembalikan *Access Token*.
3. Salin token tersebut.
4. Pada Swagger UI, klik tombol **Authorize** di bagian atas halaman, lalu masukkan token tersebut.
5. (Atau) Jika menggunakan Postman/Insomnia, masukkan token tersebut ke dalam header:
   \`Authorization: Bearer <TOKEN_ANDA>\`

---
*Didesain dan dikembangkan untuk mendukung Sistem Informasi Polri yang modern, cepat, dan handal.*
