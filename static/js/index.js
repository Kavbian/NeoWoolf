document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working in Django!");
    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.innerHTML = 5 + 6;
    } else {
        console.error("Element with ID 'demo' not found.");
    }
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    const glitch_moon = document.getElementById('glitch-moon');
    glitch_moon.playbackRate = 0.2;

    const glitch_logo = document.getElementById('glitch-logo');
    glitch_logo.playbackRate = 0.2;
});
