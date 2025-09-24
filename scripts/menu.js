const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("open");
});

  // fecha o menu ao clicar em um link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbar.classList.remove("open");
    });
});