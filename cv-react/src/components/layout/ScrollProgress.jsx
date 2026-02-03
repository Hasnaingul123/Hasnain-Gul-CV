import { useScrollProgress } from '../../hooks/useScrollAnimation';

/**
 * Scroll progress indicator with vibrant gradient
 */
const ScrollProgress = () => {
    const scrollPercentage = useScrollProgress();

    return (
        <div
            className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 z-[10000] transition-all duration-300 shadow-neon"
            style={{ width: `${scrollPercentage}%` }}
        />
    );
};

export default ScrollProgress;
