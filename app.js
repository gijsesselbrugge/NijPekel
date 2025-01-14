document.querySelectorAll('.slider').forEach(slider => {
  const imageAfter = slider.parentElement.querySelector('.image-after');
  const sliderLine = slider.parentElement.querySelector('.slider-line');
  const sliderButton = slider.parentElement.querySelector('.slider-button');

  slider.addEventListener('input', (event) => {
    const value = event.target.value; // Haal de slider-waarde op (0-100)
    const percentage = `${value}%`;

    // Pas de clip-path van de "after" afbeelding aan
    imageAfter.style.clipPath = `inset(0 ${100 - value}% 0 0)`;

    // Beweeg de slider-lijn en knop
    sliderLine.style.left = percentage;
    sliderButton.style.left = percentage;
  });
});
