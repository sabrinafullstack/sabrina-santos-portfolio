window.addEventListener("load", () => {
    gsap.from(".hero-text h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-text p", { opacity: 0, y: -30, duration: 1, delay: 0.3 });
    //gsap.from(".hero-text .btn", { opacity: 0, scale: 0.8, duration: 0.5, delay: 0.6 });
    gsap.from(".hero-image img", { opacity: 0, x: 100, duration: 1, delay: 0.8 });
});
