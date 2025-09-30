const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("open");
});

  // close menu when clicking a link 
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbar.classList.remove("open");
    });
});