document.querySelectorAll('[data-comparison]').forEach((comparison) => {
  const range = comparison.querySelector('.comparison-range');
  let isDragging = false;

  const updateComparison = (value) => {
    const clampedValue = Math.max(0, Math.min(100, Number(value)));
    comparison.style.setProperty('--comparison', `${clampedValue}%`);
    range.value = clampedValue;
  };

  updateComparison(range.value);

  const updateFromPointer = (clientX) => {
    const bounds = comparison.getBoundingClientRect();
    const value = ((clientX - bounds.left) / bounds.width) * 100;
    updateComparison(value);
  };

  range.addEventListener('input', (event) => {
    updateComparison(event.target.value);
  });

  range.addEventListener('pointerdown', (event) => {
    isDragging = true;
    range.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX);
  });

  range.addEventListener('pointermove', (event) => {
    if (!isDragging) {
      return;
    }

    updateFromPointer(event.clientX);
  });

  const stopDragging = () => {
    isDragging = false;
  };

  range.addEventListener('pointerup', stopDragging);
  range.addEventListener('pointercancel', stopDragging);
  range.addEventListener('lostpointercapture', stopDragging);

  comparison.addEventListener('pointerdown', (event) => {
    if (event.target !== range) {
      updateFromPointer(event.clientX);
    }
  });
});

