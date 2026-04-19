// --- INIT TILT EFFECT (PARA SA ART CARDS) ---
// Ang library na to ang nagbibigay ng swabe na mouse-follow animation
document.addEventListener('DOMContentLoaded', function() {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 8,          // Maximum tilt angle (mababa para maging subtle)
        speed: 800,      // Bilis ng transition
        glare: true,      // May bahagyang liwanag o glare
        "max-glare": 0.1, // Hina ng glare para sa luxury feel
        perspective: 1000 // Depth perspective
    });
});

// --- SMOOTH SCROLL (HCI PARA SA NAVIGATION) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- INTERACTIVE HEADER BACKGROUND ON SCROLL ---
// HCI feedback: Ang header ay nagbabago ng transparency base sa scroll position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(12, 12, 12, 0.9)'; // Mas solid pag nagscroll
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)'; // Mas prominent ang border
    } else {
        header.style.backgroundColor = 'rgba(12, 12, 12, 0.7)'; // Mas transparent sa taas
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
});