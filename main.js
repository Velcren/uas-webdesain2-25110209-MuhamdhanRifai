function pindahHalaman(namaHalaman) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page-view').forEach(function (el) {
        el.classList.remove('active');
    });

    const target = document.getElementById('page-' + namaHalaman);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link-page').forEach(function (link){
        const isActive = link.getAttribute('data-page') === namaHalaman;
        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-white-50', isActive);
    });

    window.scrollTo({ top:0, behavior: 'instant'});

    $('#navbarLinks').collapse('hide');

    if (namaHalaman === 'akademik') {
        setTimeout(function () {
            $('[data-spy="scroll"]').each(function () {
                $(this).scrollspy('refresh');
            });
        }, 50);
    }
}

// Pasang event listener ke semua elemen yang punya data-page
document.querySelectorAll('[data-page]').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        pindahHalaman(this.getAttribute('data-page'));
    });
});

//background image
const heroSlides = document.querySelectorAll('#hero .hero-slide');
let currentSlideIndex = 0;

function changeSlide() {
  // Hapus kelas 'active' dari slide saat ini
  heroSlides[currentSlideIndex].classList.remove('active');

  // Hitung indeks slide berikutnya, mengulang ke awal jika mencapai akhir
  currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;

  // Tambahkan kelas 'active' ke slide baru
  heroSlides[currentSlideIndex].classList.add('active');
}

// Atur interval pergantian slide setiap 5 detik (5000 ms)
setInterval(changeSlide, 5000);