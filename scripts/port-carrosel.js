// scripts/carousel.js

document.addEventListener('DOMContentLoaded', function() {
    class ModernPortfolioCarousel {
        constructor() {
            this.carousel = document.querySelector('.portfolio-carousel');
            this.track = document.querySelector('.carousel-track');
            this.slides = document.querySelectorAll('.carousel-slide');
            this.prevBtn = document.querySelector('.carousel-prev');
            this.nextBtn = document.querySelector('.carousel-next');
            this.indicatorsContainer = document.querySelector('.carousel-indicators');
            
            this.currentIndex = 0;
            this.slidesPerView = this.getSlidesPerView();
            this.isAnimating = false;
            
            this.init();
        }
        
        init() {
            this.createIndicators();
            this.updateCarousel();
            this.addEventListeners();
            this.setupResponsive();
        }
        
        getSlidesPerView() {
            const width = window.innerWidth;
            if (width <= 768) return 1;
            if (width <= 1024) return 2;
            return 3;
        }
        
        createIndicators() {
            this.indicatorsContainer.innerHTML = '';
            const totalGroups = Math.ceil(this.slides.length / this.slidesPerView);
            
            for (let i = 0; i < totalGroups; i++) {
                const indicator = document.createElement('button');
                indicator.classList.add('carousel-indicator');
                indicator.setAttribute('aria-label', `Ir para o grupo ${i + 1}`);
                indicator.addEventListener('click', () => this.goToGroup(i));
                
                this.indicatorsContainer.appendChild(indicator);
            }
            
            this.indicators = document.querySelectorAll('.carousel-indicator');
        }
        
        updateCarousel() {
            if (this.isAnimating) return;
            
            this.isAnimating = true;
            const slideWidth = this.slides[0].offsetWidth + 30; // width + gap
            const translateX = -this.currentIndex * slideWidth;
            
            this.track.style.transform = `translateX(${translateX}px)`;
            
            // Atualiza controles após a animação
            setTimeout(() => {
                this.updateControls();
                this.isAnimating = false;
            }, 600);
        }
        
        updateControls() {
            // Botões
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = this.currentIndex >= this.slides.length - this.slidesPerView;
            
            // Indicadores
            const activeIndicator = Math.floor(this.currentIndex / this.slidesPerView);
            this.indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === activeIndicator);
            });
        }
        
        next() {
            if (this.currentIndex < this.slides.length - this.slidesPerView && !this.isAnimating) {
                this.currentIndex++;
                this.updateCarousel();
            }
        }
        
        prev() {
            if (this.currentIndex > 0 && !this.isAnimating) {
                this.currentIndex--;
                this.updateCarousel();
            }
        }
        
        goToGroup(groupIndex) {
            const newIndex = groupIndex * this.slidesPerView;
            if (newIndex !== this.currentIndex && !this.isAnimating) {
                this.currentIndex = newIndex;
                this.updateCarousel();
            }
        }
        
        addEventListeners() {
            // Botões de navegação
            this.prevBtn.addEventListener('click', () => this.prev());
            this.nextBtn.addEventListener('click', () => this.next());
            
            // Teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });
            
            // Swipe para mobile
            this.addSwipeSupport();
        }
        
        addSwipeSupport() {
            let startX = 0;
            let currentX = 0;
            
            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            }, { passive: true });
            
            this.track.addEventListener('touchmove', (e) => {
                currentX = e.touches[0].clientX;
            }, { passive: true });
            
            this.track.addEventListener('touchend', () => {
                const diff = startX - currentX;
                const swipeThreshold = 50;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) this.next();
                    else this.prev();
                }
            });
        }
        
        setupResponsive() {
            let resizeTimeout;
            
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const newSlidesPerView = this.getSlidesPerView();
                    if (newSlidesPerView !== this.slidesPerView) {
                        this.slidesPerView = newSlidesPerView;
                        this.createIndicators();
                        this.currentIndex = Math.min(this.currentIndex, this.slides.length - this.slidesPerView);
                        this.updateCarousel();
                    }
                }, 250);
            });
        }
    }
    
    // Inicializa o carrossel
    new ModernPortfolioCarousel();
});