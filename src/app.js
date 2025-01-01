const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1500,
};

ScrollReveal().reveal("#hero_content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal("#hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#hero_content h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#hero_content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal("#hero-btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".intro-card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".about-row:nth-child(2) .about-image img ", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-row:nth-child(3) .about-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about-row:nth-child(4) .about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content span", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content h4", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".store-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram-grid img", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(1)", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(2)", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(3)", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(4)", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(5)", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#service-intro .service-intro-box:nth-child(6)", {
  ...scrollRevealOption,
  delay: 2500,
});
