document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navLinks.classList.toggle('mobile-menu');
    });

    // Smooth scrolling for nav links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking a link
            if (navLinks.classList.contains('mobile-menu')) {
                navLinks.classList.remove('mobile-menu');
            }
        });
    });

    // Ensure menu button is clickable
    menuBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('mobile-menu')) {
            navLinks.classList.remove('mobile-menu');
        }
    });
});