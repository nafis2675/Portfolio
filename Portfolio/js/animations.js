document.addEventListener('DOMContentLoaded', () => {
    // Glitch effect for titles
    const glitchElements = document.querySelectorAll('.glitch-effect');
    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                element.classList.add('glitching');
                setTimeout(() => {
                    element.classList.remove('glitching');
                }, 200);
            }
        }, 3000);
    });

    // Typing animation for hero section
    const initCommand = document.getElementById('init-command');
    const terminalOutput = document.getElementById('terminal-output');
    if (initCommand && terminalOutput) {
        initCommand.classList.add('active'); // Trigger typing animation
        setTimeout(() => {
            Array.from(terminalOutput.children).forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, index * 800); // Staggered reveal
            });
        }, 2000); // Delay before output appears
    }

    // Stat number animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumber = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // milliseconds
        const increment = target / (duration / 16); // ~60 frames per second
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    };

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    statNumbers.forEach(stat => statObserver.observe(stat));

    // Fade-in-up animation for sections/cards
    const animateElements = document.querySelectorAll(
        '.hero-content, .stat-card, .project-card, .profile-card, .skills-card, .timeline-item, .contact-card'
    );

    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                generalObserver.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // Slightly offset to trigger earlier

    animateElements.forEach(el => generalObserver.observe(el));

    // Particle background animation (simplified for CSS-only particles)
    // If using a JS library for particles, this would be where it's initialized.
    // For now, assuming CSS handles the particle movement.
    const particlesBackground = document.getElementById('particles-background');
    if (particlesBackground) {
        // Add particles dynamically if needed, or rely on CSS for static ones
        // Example: create 50 particles
        const starCount = 30; // Fewer, more prominent shooting stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            const duration = 5 + Math.random() * 10; // Random duration for speed

            star.style.setProperty('--star-start-x', `${startX}`);
            star.style.setProperty('--star-start-y', `${startY}`);
            star.style.setProperty('--star-end-x', `${endX}`);
            star.style.setProperty('--star-end-y', `${endY}`);
            star.style.setProperty('--star-duration', `${duration}s`);
            star.style.animationDelay = `${Math.random() * 20}s`; // Longer random delay

            particlesBackground.appendChild(star);
        }
    }
});
