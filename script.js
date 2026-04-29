// ==================== DARK / LIGHT MODE TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ==================== MOBILE HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ==================== TYPING EFFECT IN HERO ====================
const texts = ["Web Developer", "Designer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.getElementById('typed').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1800);   // Pause before changing word
    } else {
        setTimeout(type, 70);     // Typing speed
    }
}

// ==================== CONTACT FORM (Demo) ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("✅ Thank you! Your message has been received. (This is a demo version)");
        this.reset();
    });
}

// ==================== SMOOTH SCROLLING FOR NAV LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== '#' && document.querySelector(targetId)) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== BACK TO TOP BUTTON (Optional but useful) ====================
function createBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'back-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #0066ff;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.4rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything when page loads
window.onload = () => {
    type();                    // Start typing effect
    createBackToTopButton();   // Add back to top button
};

