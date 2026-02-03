// Page Loading Animation
window.addEventListener('load', function () {
    // Create loading screen
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <h3>Loading Portfolio...</h3>
        </div>
    `;
    document.body.appendChild(loader);

    // Initialize particle system
    createParticles();
});

// Create Animated Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 3px and 15px
        const size = Math.random() * 12 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';

        // Random delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';

        particlesContainer.appendChild(particle);
    }
}

// Enhanced Smooth Scrolling
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

// Mobile Menu Toggle with Animation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;

    if (navbar) {
        if (scrolled > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Animate children elements with delay
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animated');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections and elements
document.addEventListener('DOMContentLoaded', function () {
    // Add animate-on-scroll class to elements
    document.querySelectorAll('section, .project-card, .skill-category, .contact-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Typing Effect for Hero Title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 2000);
    }

    // Counter Animation for Stats
    animateCounters();

    // Floating Elements Interaction
    setupFloatingElements();

    // Project Cards Hover Effects
    setupProjectCards();

    // Skill Items Interactive Effects
    setupSkillItems();
});

// Typing Effect Function
function typeWriter(element, text, speed = 100) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counterObserver.observe(counter);
    });
}

// Floating Elements Setup
function setupFloatingElements() {
    const floatingItems = document.querySelectorAll('.floating-item');

    floatingItems.forEach((item, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;

            item.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);

        // Hover effects
        item.addEventListener('mouseenter', function () {
            this.style.transform += ' scale(1.2)';
            this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = this.style.transform.replace(' scale(1.2)', '');
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Project Cards Setup
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Animate tech tags
            const techTags = this.querySelectorAll('.project-tech span');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1) translateY(-2px)';
                }, index * 50);
            });
        });

        card.addEventListener('mouseleave', function () {
            const techTags = this.querySelectorAll('.project-tech span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
}

// Skill Items Setup
function setupSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';

            this.style.position = 'relative';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mouse Trail Effect
let mouseTrail = [];
document.addEventListener('mousemove', function (e) {
    mouseTrail.push({ x: e.clientX, y: e.clientY });

    if (mouseTrail.length > 10) {
        mouseTrail.shift();
    }

    // Create trail dots
    if (Math.random() > 0.9) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.background = '#667eea';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.animation = 'trailFade 1s ease-out forwards';

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 1000);
    }
});

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Contact Form Animation (if you add a form later)
function handleContactForm(event) {
    event.preventDefault();

    // Add success animation
    const button = event.target.querySelector('button');
    button.style.background = '#10b981';
    button.textContent = '✓ Message Sent!';

    setTimeout(() => {
        button.style.background = '';
        button.textContent = 'Send Message';
    }, 3000);
}

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0%';
progressBar.style.height = '3px';
progressBar.style.background = 'linear-gradient(90deg, #667eea, #764ba2)';
progressBar.style.zIndex = '10000';
progressBar.style.transition = 'width 0.3s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', function () {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Magnetic Cursor Effect for Buttons
document.addEventListener('DOMContentLoaded', function () {
    const magneticElements = document.querySelectorAll('.btn, .filter-btn, .project-card');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const moveX = x * 0.15;
            const moveY = y * 0.15;

            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
});

// Enhanced Scroll Reveal Animation
const revealElements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Parallax Effect for Sections
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;

    // Parallax for geometric shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });

    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const yPos = scrolled * 0.5;
        hero.style.transform = `translateY(${yPos}px)`;
    }
});

// Project Filter and Search Functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('projectSearch');
    const projectCount = document.getElementById('projectCount');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            let visibleCount = 0;

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'projectCardPop 0.6s ease forwards';
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update project count
            updateProjectCount(visibleCount);
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            let visibleCount = 0;

            projectCards.forEach(card => {
                const projectTitle = card.querySelector('h3').textContent.toLowerCase();
                const projectDescription = card.querySelector('p').textContent.toLowerCase();
                const projectTech = Array.from(card.querySelectorAll('.project-tech span'))
                    .map(span => span.textContent.toLowerCase())
                    .join(' ');

                const matchesSearch = projectTitle.includes(searchTerm) ||
                    projectDescription.includes(searchTerm) ||
                    projectTech.includes(searchTerm);

                // Check if card matches current filter
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                const matchesFilter = activeFilter === 'all' || card.getAttribute('data-category') === activeFilter;

                if (matchesSearch && matchesFilter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'projectCardPop 0.6s ease forwards';
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update project count
            updateProjectCount(visibleCount);
        });
    }

    // Function to update project count with animation
    function updateProjectCount(count) {
        if (projectCount) {
            // Animate the count change
            projectCount.style.transform = 'scale(1.2)';
            projectCount.style.color = 'var(--accent-color)';

            setTimeout(() => {
                projectCount.textContent = count;
                projectCount.style.transform = 'scale(1)';
                projectCount.style.color = 'var(--primary-color)';
            }, 150);
        }
    }

    // Initialize project count
    const initialCount = document.querySelectorAll('.project-card:not(.hidden)').length;
    if (projectCount) {
        projectCount.textContent = initialCount;
    }
});

