document.addEventListener('DOMContentLoaded', () => {
    // // Typewriter effect
    // const title = document.querySelector('.typewriter');
    // title.style.width = '0';
    // setTimeout(() => {
    //     title.style.width = '100%';
    // }, 500);

    // Typewriter effect
const title = document.querySelector('.typewriter');
const text = title.textContent.trim(); // Pulling the text from the HTML element
let index = 0;
let isDeleting = false;
let typingInterval;
let deletingInterval;

// Function to type out the text
function typeText() {
    if (!isDeleting) {
        if (index < text.length) {
            title.textContent = text.substring(0, index + 1) + "_";
            index++;
        } else {
            // Stop typing and wait 5 seconds before deleting
            title.textContent = text + "_";
            clearInterval(typingInterval);
            setTimeout(() => {
                isDeleting = true;
                deletingInterval = setInterval(deleteText, 150); // Start deleting after 5 seconds
            }, 5000); // Wait 5 seconds before starting to delete
        }
    }
}

// Function to delete the text
function deleteText() {
    if (isDeleting) {
        if (index > 0) {
            title.textContent = text.substring(0, index - 1) + "_";
            index--;
        } else {
            // Stop deleting and restart typing
            isDeleting = false;
            clearInterval(deletingInterval);
            typingInterval = setInterval(typeText, 150); // Restart typing
        }
    }
}

// Start typing the text
typingInterval = setInterval(typeText, 150);


    // Scroll animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});