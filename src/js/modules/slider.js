const slider = (autoplay = true, interval = 4000) => {
  const width = window.getComputedStyle(
    document.querySelector(".slider__inner")
  ).width;
  const slides = document.querySelectorAll(".slider__item");
  const slidesField = document.querySelector(".slider__slides");
  const nextBtn = document.querySelector(".slider__next");
  const dots = document.querySelectorAll(".slider__dots");

  let timerId;

  slidesField.style.width = 100 * slides.length + "%";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  let offset = 0;
  let slideIndex = 0;

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, "");
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");

    if (autoplay) {
      clearInterval(timerId);
      updateAutoplayInteval();
    }
  });

  const updateAutoplayInteval = () => {
    timerId = setInterval(() => nextBtn.click(), interval);
  };

  if (autoplay) {
    updateAutoplayInteval();
  }
};

export default slider;
