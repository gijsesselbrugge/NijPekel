document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const variant1 = document.getElementById("variant1");
  const variant2 = document.getElementById("variant2");
  const variant1Btn = document.getElementById("variant1-btn");
  const variant2Btn = document.getElementById("variant2-btn");

  variant1Btn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    variant1.classList.remove("hidden");
  });

  variant2Btn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    variant2.classList.remove("hidden");
  });

  // Slider logic
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    slider.addEventListener("input", (e) => {
      const container = e.target.parentElement;
      const imageAfter = container.querySelector(".image-after");
      imageAfter.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
    });
  });
});
