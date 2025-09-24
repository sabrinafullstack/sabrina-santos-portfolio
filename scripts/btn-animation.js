// seleciona o botão e a listra
const btn = document.querySelector(".svg-btn");
const line = btn.querySelector("path");

// anima quando o mouse entra
btn.addEventListener("mouseenter", () => {
  gsap.to(line, {
    duration: 0.5,
    attr: { d: "M18 25 Q60 15 120 25 T210 40" }, // curva alterada
    ease: "power1.inOut"
  });
});

// volta quando o mouse sai
btn.addEventListener("mouseleave", () => {
  gsap.to(line, {
    duration: 0.5,
    attr: { d: "M18 20 Q50 12 100 22 T202 33" }, // volta para o original
    ease: "power1.inOut"
  });
});
