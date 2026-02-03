import PropTypes from 'prop-types';

/**
 * Reusable Card component with colorful glassmorphism
 */
const Card = ({ children, className = '', hoverEffect = true, glowEffect = false, colorScheme = 'purple' }) => {
    const baseClasses = 'relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/60 shadow-glass transition-all duration-500';
    const hoverClasses = hoverEffect ? 'hover:shadow-glass-hover hover:-translate-y-2 hover:scale-105' : '';

    const glowColors = {
        purple: 'from-purple-400 to-pink-400',
        blue: 'from-blue-400 to-cyan-400',
        green: 'from-green-400 to-cyan-400',
        orange: 'from-orange-400 to-pink-400',
        rainbow: 'from-purple-400 via-pink-400 to-cyan-400'
    };

    return (
        <div className="group relative">
            {/* Colorful glow effect on hover */}
            {glowEffect && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${glowColors[colorScheme]} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-500 animate-pulse-glow`}></div>
            )}

            {/* Card content */}
            <div className={`${baseClasses} ${hoverClasses} ${className} ${glowEffect ? 'relative' : ''}`}>
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hoverEffect: PropTypes.bool,
    glowEffect: PropTypes.bool,
    colorScheme: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'rainbow'])
};

export default Card;
