// aos konfigurasi
AOS.init();

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

// PORTOFOLIO

function animateValue(obj, start, end, duration) {
   let startTimestamp = null;
   const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
         window.requestAnimationFrame(step);
      }
   };
   window.requestAnimationFrame(step);
}

const client = document.getElementById("client");
animateValue(client, 1500, 1, 5000);

const review = document.getElementById("review");
animateValue(review, 10.0, 4.6, 5000);

const download = document.getElementById("download");
animateValue(download, 0, 1000, 5000);

const produk = document.getElementById("produk");
animateValue(produk, 500, 6, 5000);

// FORM KE SPREADSHEET
const scriptURL = "https://script.google.com/macros/s/AKfycbytyFvLUlzTi9A0Zt21SN8p_FxMO2rLdk37-xqJjNx2eelu8UXTqdaZmsm4ZmAma2KC/exec";
const form = document.forms["Message"];

form.addEventListener("submit", (e) => {
   e.preventDefault();
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => alert2("Success!", "success"))
      .catch((error) => alert2("Error!", "danger"));

   form.reset();
});

var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function alert2(message, type) {
   var wrapper = document.createElement("div");
   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

   alertPlaceholder.append(wrapper);
}
