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
