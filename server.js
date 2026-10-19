const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Mengizinkan Front-End mengirim data ke Back-End
app.use(express.json()); // Membantu membaca data JSON dari formulir

// Route / API endpoint untuk menerima pesan kontak
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validasi sederhana
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Semua kolom wajib diisi!" });
    }

    // Di skenario nyata, di sini Anda bisa menyimpan ke Database (seperti MySQL/MongoDB) 
    // atau mengirimkannya ke email Anda menggunakan library 'nodemailer'.
    // Untuk saat ini, kita akan mencetak pesan di terminal server:
    
    console.log("=== PESAN BARU DARI PORTOFOLIO ===");
    console.log(`Nama   : ${name}`);
    console.log(`Email  : ${email}`);
    console.log(`Pesan  : ${message}`);
    console.log("==================================");

    // Mengirim respon sukses kembali ke Front-End
    res.status(200).json({ success: true, message: "Pesan berhasil diterima!" });
});

// Menjalankan Server
app.listen(PORT, () => {
    console.log(`✅ Back-End Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;