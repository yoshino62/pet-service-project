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

profile = document.querySelector("#header .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
};

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

ScrollReveal().reveal("#about-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#about-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#about-page-intro .about-page-image img", {
  ...scrollRevealOption,
  delay: 1500,
  origin: "left",
});

ScrollReveal().reveal("#about-page-intro .about-page-main-content", {
  ...scrollRevealOption,
  delay: 1500,
  origin: "right",
});

ScrollReveal().reveal("#service-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#service-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
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

ScrollReveal().reveal("#store-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#store-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#contact-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#contact-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#contact-page .contact-row h3", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#contact-page .contact-row p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(
  "#contact-page .contact-row input, #contact-page .contact-row textarea",
  {
    ...scrollRevealOption,
    delay: 2000,
  }
);

ScrollReveal().reveal("#contact-page .contact-page-image img", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal("#cart-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#cart-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#cart-page h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#cart-page .cart-total", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal("#cart-page .product-container", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#checkout-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#checkout-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#checkout-page.checkout h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#checkout-page.checkout form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#order-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#order-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#order-page.orders h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#order-page .box-container", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#login-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#login-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#login-form-container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("#register-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#register-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#profile-header .page-header h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#profile-header .page-header p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#user-deatails .user", {
  ...scrollRevealOption,
  delay: 1000,
});
