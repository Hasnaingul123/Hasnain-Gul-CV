import { useEffect, useRef } from 'react';

/**
 * Particle background component with natural colors
 */
const ParticleBackground = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const particlesContainer = particlesRef.current;
        if (!particlesContainer) return;

        const particleCount = 30;
        const particles = [];
        const colors = ['#a38b6f', '#7a9a7a', '#d97d5a']; // Sand, Sage, Terra

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle absolute rounded-full';

            // Random size between 3px and 12px
            const size = Math.random() * 9 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random color from natural palette
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = `radial-gradient(circle, ${color}40, ${color}20)`;

            // Random starting position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random animation duration
            const duration = Math.random() * 10 + 15;
            particle.style.animationDuration = `${duration}s`;

            // Random delay
            const delay = Math.random() * 5;
            particle.style.animationDelay = `${delay}s`;

            particlesContainer.appendChild(particle);
            particles.push(particle);
        }

        return () => {
            particles.forEach(particle => particle.remove());
        };
    }, []);

    return (
        <div
            ref={particlesRef}
            className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] pointer-events-none"
        />
    );
};

export default ParticleBackground;
