document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const originalText = link.getAttribute('data-original-text');
        const hoverText = link.getAttribute('data-hover-text');

        link.addEventListener('mouseenter', function() {
            link.textContent = hoverText;
        });

        link.addEventListener('mouseleave', function() {
            link.textContent = originalText;
        });
    });

    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});