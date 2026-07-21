function pindahHalaman(namaHalaman) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page-view').forEach(function (el) {
        el.classList.remove('active');
    });

    // Tampilkan halaman target
    const target = document.getElementById('page-' + namaHalaman);
    if (target) {
        target.classList.add('active');
    }

    // Perbarui status menu navigasi aktif
    document.querySelectorAll('.nav-link-page').forEach(function (link) {
        const isActive = link.getAttribute('data-page') === namaHalaman;
        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-white-50', !isActive);
    });

    // Scroll otomatis ke bagian paling atas
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Tutup menu mobile jika sedang terbuka
    $('#navbarLinks').collapse('hide');
}

// Tambahkan listener untuk semua tombol/link berkait data-page
document.querySelectorAll('[data-page]').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');
        pindahHalaman(targetPage);
    });
});