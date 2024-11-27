document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".color-option");
    const colorText = document.querySelector(".selected-color-text");
  
    options.forEach(option => {
      option.addEventListener("click", () => {
        options.forEach(opt => opt.classList.remove("selected"));
  
        option.classList.add("selected");
  
        const selectedColor = option.dataset.color;
        colorText.textContent = `Color: ${selectedColor}`;
      });
    });
  });