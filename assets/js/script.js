
document.addEventListener('DOMContentLoaded', () => {
    const words = ["Angular", "Python", "AI"];
    const typingWord = document.querySelector('.typing-word');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeAnimation() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingWord.textContent = currentWord.slice(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
        }

        setTimeout(typeAnimation, isDeleting ? 100 : 150); // Typing speed
    }

    // Start the typing animation
    typeAnimation();
});