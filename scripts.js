// Smooth Scroll on Navbar Clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Show Scroll-to-Top Button
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-to-top');
    scrollTop.style.opacity = window.scrollY > 200 ? 1 : 0;
});

// Scroll-to-Top Button Click
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
