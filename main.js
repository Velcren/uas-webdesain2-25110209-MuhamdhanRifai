document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Logika Filter Produk
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productItems = document.querySelectorAll(".product-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Ubah status active pada button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            productItems.forEach(item => {
                if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 2. Logika Tombol Beli (Simulasi WhatsApp / Checkout)
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const productPrice = this.getAttribute("data-price");
            
            // Simulasi redirect ke WhatsApp toko
            const nomorAdmin = "628123456789"; // Ganti dengan nomor WhatsApp aslimu
            const pesan = `Halo HelmZone, saya tertarik untuk membeli produk *${productName}* seharga *${productPrice}*. Apakah stoknya masih tersedia?`;
            
            // Encode pesan agar format URL valid
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodeURIComponent(pesan)}`;
            
            // Tampilkan alert konfirmasi sebelum diarahkan
            alert(`Membuka WhatsApp untuk memesan: ${productName}`);
            window.open(urlWhatsApp, '_blank');
        });
    });
});