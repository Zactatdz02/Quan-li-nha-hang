let currentSlideKhaivi = 0;
let currentSlideBuasang = 0;
let currentSlideBuatrua = 0;
let currentSlideBuatoi = 0;

function moveSlideKhaivi(direction) {
    moveSlide(direction, currentSlideKhaivi, '#slider-container-khaivi', (index) => currentSlideKhaivi = index);
}

function moveSlideBuasang(direction) {
    moveSlide(direction, currentSlideBuasang, '#slider-container-buasang', (index) => currentSlideBuasang = index);
}

function moveSlideBuatrua(direction) {
    moveSlide(direction, currentSlideBuatrua, '#slider-container-buatrua', (index) => currentSlideBuatrua = index);
}

function moveSlideBuatoi(direction) {
    moveSlide(direction, currentSlideBuatoi, '#slider-container-buatoi', (index) => currentSlideBuatoi = index);
}

function moveSlide(direction, currentSlide, containerSelector, setCurrentSlide) {
    const slides = document.querySelectorAll(`${containerSelector} .slide`);
    const totalSlides = slides.length;
    
    let visibleSlides;
    if (window.innerWidth > 1024) {
        visibleSlides = Math.min(totalSlides, 3); // Máy tính
    } else if (window.innerWidth > 768) {
        visibleSlides = Math.min(totalSlides, 2); // iPad
    } else {
        visibleSlides = 1; // Điện thoại
    }

    // Cập nhật chỉ số slide hiện tại
    currentSlide = Math.max(0, Math.min(currentSlide + direction, totalSlides - visibleSlides));
    setCurrentSlide(currentSlide);
    updateSlides(slides, visibleSlides, currentSlide);
}

function updateSlides(slides, visibleSlides, currentSlide) {
    const offset = currentSlide * (100 / visibleSlides);
    slides[0].parentElement.style.transform = `translateX(-${offset}%)`; // Di chuyển slider
}

// Khởi tạo các slide khi tài liệu được tải
document.addEventListener('DOMContentLoaded', function() {
    const containers = ['#slider-container-khaivi', '#slider-container-buasang', '#slider-container-buatrua', '#slider-container-buatoi'];
    containers.forEach(container => {
        const slides = document.querySelectorAll(`${container} .slide`);
        updateSlides(slides, window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1, 0);
    });
});

// Cập nhật số slide khi thay đổi kích thước cửa sổ
window.addEventListener('resize', function() {
    const containers = ['#slider-container-khaivi', '#slider-container-buasang', '#slider-container-buatrua', '#slider-container-buatoi'];
    containers.forEach(container => {
        const slides = document.querySelectorAll(`${container} .slide`);
        let visibleSlides = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        updateSlides(slides, visibleSlides, 0);
    });
});
