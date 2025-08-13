document.querySelectorAll(".accordion-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    // Toggle active class for content
    const isActive = targetContent.classList.contains("active");
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.classList.remove("active");
    });
    document.querySelectorAll(".accordion-toggle").forEach((btn) => {
      btn.classList.remove("active");
    });

    if (!isActive) {
      targetContent.classList.add("active");
      button.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".carousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    loopAdditionalSlides: 1,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: false,
    },
    speed: 800,
    effect: "slide",
    grabCursor: true,
    allowTouchMove: true,
    freeMode: false,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 25 },
    },
  });

  const prevButton = document.getElementById("carouselPrev");
  const nextButton = document.getElementById("carouselNext");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      swiper.slidePrev();
    });
    nextButton.addEventListener("click", function () {
      swiper.slideNext();
    });
  }

  const carouselCards = document.querySelectorAll(".carousel-card");
  carouselCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.05)";
      this.style.transition = "all 0.3s ease";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});
