// TechHub Cuenca - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText && footerText.textContent.includes('2026')) {
        footerText.textContent = footerText.textContent.replace('2026', currentYear);
    }

    // Simple analytics - log page view (can be extended)
    console.log('%c🌐 TechHub Cuenca', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cBienvenido a la comunidad TTN de Cuenca', 'color: #764ba2; font-size: 14px;');
});
