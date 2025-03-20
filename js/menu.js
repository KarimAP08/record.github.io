const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
    openMenu.style.display = "none"; // Oculta el botón de abrir
    closeMenu.style.display = "block"; // Muestra el botón de cerrar
});

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
    openMenu.style.display = "block"; // Muestra el botón de abrir
    closeMenu.style.display = "none"; // Oculta el botón de cerrar
});
