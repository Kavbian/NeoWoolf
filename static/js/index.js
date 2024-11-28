document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working in Django!");

    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.innerHTML = 5 + 6;
    } else {
        console.error("Element with ID 'demo' not found.");
    }

    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

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

    const whoAreWeElement = document.querySelector('.who-text-title');
    const goalsTitle = document.querySelector('.goals-title');
    const teamTitle = document.querySelector('.team-title');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('flicker-effect');
            } else {
                entry.target.classList.remove('flicker-effect');
            }
        });
    }, { threshold: 0.5 });

    const observer_accent = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('flicker-accent-effect');
            } else {
                entry.target.classList.remove('flicker-accent-effect');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(whoAreWeElement);
    observer.observe(goalsTitle);
    observer_accent.observe(teamTitle);
});
