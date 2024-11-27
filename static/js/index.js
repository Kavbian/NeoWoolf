document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working in Django!");

    // Ваш існуючий код
    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.innerHTML = 5 + 6;
    } else {
        console.error("Element with ID 'demo' not found.");
    }

    const scrollers = document.querySelectorAll(".scroller");

    // Якщо користувач не вибрав режим зменшення руху, то додаємо анімацію
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // Додаємо data-animated="true" до кожного .scroller на сторінці
            scroller.setAttribute("data-animated", true);

            // Створюємо масив з елементів всередині .scroller-inner
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // Для кожного елементу в масиві, клонуємо його
            // додаємо aria-hidden до нього
            // додаємо в .scroller-inner
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

    // Додаємо ефект моргання для елементу Who are we?
    const whoAreWeElement = document.querySelector('.who-text-title');
    const goalsTitle = document.querySelector('.goals-title');
    const teamTitle = document.querySelector('.team-title');

    // Створюємо IntersectionObserver для спостереження за елементом
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Коли елемент входить в область видимості, додаємо ефект моргання
                entry.target.classList.add('flicker-effect');
            } else {
                // Якщо елемент виходить з області видимості, видаляємо ефект
                entry.target.classList.remove('flicker-effect');
            }
        });
    }, { threshold: 0.5 }); // Спрацьовує, коли 50% елемента видно

        // Створюємо IntersectionObserver для спостереження за елементом
    const observer_accent = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Коли елемент входить в область видимості, додаємо ефект моргання
                entry.target.classList.add('flicker-accent-effect');
            } else {
                // Якщо елемент виходить з області видимості, видаляємо ефект
                entry.target.classList.remove('flicker-accent-effect');
            }
        });
    }, { threshold: 0.5 }); // Спрацьовує, коли 50% елемента видно

    // Спостерігаємо за елементом
    observer.observe(whoAreWeElement);
    observer.observe(goalsTitle);
    observer_accent.observe(teamTitle);
});
