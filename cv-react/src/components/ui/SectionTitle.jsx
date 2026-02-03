import PropTypes from 'prop-types';

/**
 * Section title component with colorful gradient
 */
const SectionTitle = ({ children, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-6 relative inline-block">
                {children}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mt-3 shadow-colorful"></span>
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string
};

export default SectionTitle;
