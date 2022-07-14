const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
   if (window.scrollY >= 50) {
      navbar.classList.add("bg-white");
      navbar.classList.add("shadow-sm");
   } else {
      navbar.classList.remove("bg-white");
      navbar.classList.remove("shadow-sm");
   }
});
