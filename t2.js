document.addEventListener("DOMContentLoaded", function() {
    const texts = ["ux and ui design", "web development"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBeforeStartTyping = 1000;
    const viewportHeight = window.innerHeight;

    function typeWriter() {
        const currentText = texts[textIndex];
        if (charIndex < currentText.length) {
            document.getElementById("typing-text").innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(eraseText, delayBeforeStartTyping);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            const currentText = texts[textIndex];
            document.getElementById("typing-text").innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    setTimeout(typeWriter, delayBeforeStartTyping);

    function handleScroll() {
        const cardsSection = document.querySelector(".cards-section");
        const sectionPosition = cardsSection.getBoundingClientRect().top;
        
        if (sectionPosition <= viewportHeight * 0.75) {
            cardsSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const body = document.body;

        // Adjust background size based on scroll position
        body.style.backgroundSize = (100 + scrollPosition / 5) + "%";

       
    });

    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    const links = document.querySelectorAll('.nav-item a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Hide all tab contents
            tabContents.forEach(tabContent => {
                tabContent.style.display = 'none';
            });

            // Show the selected tab content
            document.getElementById(targetTab).style.display = 'block';

            // Remove 'active' class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            button.classList.add('active');
        });
    });
});
