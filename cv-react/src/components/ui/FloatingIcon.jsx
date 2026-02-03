import PropTypes from 'prop-types';

/**
 * Floating icon component with vibrant colors
 */
const FloatingIcon = ({ icon, techName, position }) => {
    const positionStyles = {
        ...(position.top && { top: position.top }),
        ...(position.bottom && { bottom: position.bottom }),
        ...(position.left && { left: position.left }),
        ...(position.right && { right: position.right })
    };

    const colors = [
        'from-purple-400 to-pink-400',
        'from-blue-400 to-cyan-400',
        'from-green-400 to-yellow-400',
        'from-orange-400 to-pink-400',
        'from-cyan-400 to-blue-400'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div
            className={`absolute w-24 h-24 bg-gradient-to-br ${randomColor} backdrop-blur-xl rounded-3xl flex items-center justify-center text-4xl border-2 border-white/40 shadow-neon animate-float hover:scale-125 hover:shadow-colorful transition-all duration-500 cursor-pointer group`}
            style={positionStyles}
            title={techName}
        >
            <i className={`${icon} text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}></i>
        </div>
    );
};

FloatingIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    techName: PropTypes.string.isRequired,
    position: PropTypes.shape({
        top: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string,
        right: PropTypes.string
    }).isRequired
};

export default FloatingIcon;
