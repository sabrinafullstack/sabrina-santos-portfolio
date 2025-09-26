// scripts/port-carrosel.js - Versão Simples
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    
    if (!track) return;
    
    let currentIndex = 0;
    
    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    next.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth + 30;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Atualiza botões
        prev.disabled = currentIndex === 0;
        next.disabled = currentIndex === slides.length - 1;
    }
    
    // Inicializa
    updateCarousel();
});