const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
   if (window.scrollY >= 50) {
      navbar.classList.add("bg-white");
      navbar.classList.add("shadow-sm");
      navbar.classList.remove("py-3");
   } else {
      navbar.classList.remove("bg-white");
      navbar.classList.remove("shadow-sm");
      navbar.classList.add("py-3");
   }
});

// loader
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
   loader.classList.add("loader");
});
