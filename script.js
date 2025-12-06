
        // Initialize AOS
AOS.init({
    duration: 800,
    once: true,
});

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // If the link is just "#" (like the logo or Home link), scroll to top
        if (targetId === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            if (menu) menu.classList.add('hidden'); // Close menu if open
            return;
        }

        // Try to find the target element
        try {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (menu) menu.classList.add('hidden'); // Close mobile menu on click
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            // Ignore invalid selectors to prevent crashes
            console.warn('Invalid scroll target:', targetId);
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.add('bg-white/95');
        navbar.classList.add('backdrop-blur-md');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-white/95');
        navbar.classList.remove('backdrop-blur-md');
    }
});
