// btn animatin hero section
const btn = document.querySelector(".svg-btn");
const line = btn.querySelector("path");

// when mouse enters
btn.addEventListener("mouseenter", () => {
  gsap.to(line, {
    duration: 0.5,
    attr: { d: "M18 25 Q60 15 120 25 T210 40" }, // curva alterada
    ease: "power1.inOut"
  });
});

// back when mouse leaves
btn.addEventListener("mouseleave", () => {
  gsap.to(line, {
    duration: 0.5,
    attr: { d: "M18 20 Q50 12 100 22 T202 33" }, // volta para o original
    ease: "power1.inOut"
  });
});
