// Toggle Menu untuk Responsif di HP
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menangani Form Submit ke Back-End
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    formStatus.textContent = "Mengirim pesan...";
    formStatus.style.color = "#0ea5e9";

    try {
        // Mengirim data ke local server (Back-End)
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            formStatus.textContent = "Pesan berhasil terkirim! Saya akan segera menghubungi Anda.";
            formStatus.style.color = "#22c55e"; // Warna hijau
            contactForm.reset();
        } else {
            throw new Error("Gagal mengirim");
        }
    } catch (error) {
        formStatus.textContent = "Maaf, terjadi kesalahan saat mengirim pesan. Coba lagi nanti.";
        formStatus.style.color = "#ef4444"; // Warna merah
    }

    // Mengambil elemen formulir kontak berdasarkan ID 'contactForm'
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    // Access Key Web3Forms Anda
    formData.append("access_key", "5756fab6-dfa3-4357-8b2b-63a8c0be0140");

    const originalText = submitBtn.textContent;

    // Mengubah status tombol saat proses pengiriman
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset(); // Mengosongkan isian form setelah berhasil
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        // Mengembalikan tombol ke status awal
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
});

