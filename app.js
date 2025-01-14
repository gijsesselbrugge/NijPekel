// Haal alle sliders en bijbehorende elementen op
const sliders = document.querySelectorAll('.slider');
const imagesAfter = document.querySelectorAll('.image-after');
const sliderLines = document.querySelectorAll('.slider-line');
const sliderButtons = document.querySelectorAll('.slider-button');

sliders.forEach((slider, index) => {
  const imageAfter = imagesAfter[index];
  const sliderLine = sliderLines[index];
  const sliderButton = sliderButtons[index];

  // Update slider positie op input
  slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    const percentage = `${sliderValue}%`;

    // Update "after" image clip en slider elementen
    imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
    sliderLine.style.left = percentage;
    sliderButton.style.left = percentage;
  });

  // Laat het slepen van de slider-knop toe
  let isDragging = false;

  sliderButton.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const sliderContainer = slider.closest('.slider-container');
      const containerRect = sliderContainer.getBoundingClientRect();
      const offsetX = e.clientX - containerRect.left;
      const sliderValue = Math.min(Math.max((offsetX / containerRect.width) * 100, 0), 100);

      slider.value = sliderValue;
      const percentage = `${sliderValue}%`;

      // Update "after" image clip en slider elementen
      imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
      sliderLine.style.left = percentage;
      sliderButton.style.left = percentage;
    }
  });
});
