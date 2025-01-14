document.addEventListener('DOMContentLoaded', () => {
  // Haal alle sliders en de gerelateerde elementen op
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const sliderContainer = slider.closest('.slider-container');
    const imageAfter = sliderContainer.querySelector('.image-after');
    const sliderLine = sliderContainer.querySelector('.slider-line');
    const sliderButton = sliderContainer.querySelector('.slider-button');

    // Controleer of de elementen correct zijn gekoppeld
    if (!imageAfter || !sliderLine || !sliderButton) {
      console.error('Een van de elementen ontbreekt in de slider-container:', sliderContainer);
      return;
    }

    // Update slider-positie op input
    slider.addEventListener('input', (e) => {
      const sliderValue = e.target.value;
      const percentage = `${sliderValue}%`;

      // Pas de clip-path van de "after" afbeelding aan
      imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

      // Update de positie van de lijn en de knop
      sliderLine.style.left = percentage;
      sliderButton.style.left = percentage;
    });

    // Functionaliteit voor slepen van de slider-knop
    let isDragging = false;

    sliderButton.addEventListener('mousedown', () => {
      isDragging = true;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const containerRect = sliderContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const sliderValue = Math.min(Math.max((offsetX / containerRect.width) * 100, 0), 100);

        slider.value = sliderValue;
        const percentage = `${sliderValue}%`;

        // Update "after" afbeelding, lijn en knop
        imageAfter.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
        sliderLine.style.left = percentage;
        sliderButton.style.left = percentage;
      }
    });
  });
});
