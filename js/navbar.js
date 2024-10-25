let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname; // Get the current page path

    navLinks.forEach(link => {
        // Check if the link's href matches the current page path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // Add the active class to the current link
        } else {
            link.classList.remove('active'); // Remove the active class from other links
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active'); // Toggle visibility of nav links
    });
});
