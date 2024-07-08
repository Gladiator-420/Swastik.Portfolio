document.addEventListener("DOMContentLoaded", function() {
    const texts = ["ux and ui design", "web development"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBeforeStartTyping = 1000;

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
        const viewportHeight = window.innerHeight;

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
        
        // Roll up the main image
        if (scrollPosition > viewportHeight) {
            body.style.backgroundPositionY = -(scrollPosition - viewportHeight) + "px";
        }
    });
});
document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
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
});

