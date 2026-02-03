import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Reusable Button component with vibrant, colorful styling
 */
const Button = ({
    variant = 'primary',
    children,
    onClick,
    href,
    className = '',
    ...props
}) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now()
        };

        setRipples([...ripples, newRipple]);
        setTimeout(() => {
            setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
        }, 600);
    };

    const handleClick = (e) => {
        createRipple(e);
        if (onClick) onClick(e);
    };

    const baseClasses = 'relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center overflow-hidden group transform hover:scale-105 active:scale-95';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-colorful hover:shadow-neon',
        secondary: 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/50 hover:border-white shadow-lg',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-lg'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    const rippleElements = ripples.map(ripple => (
        <span
            key={ripple.id}
            className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
            style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
            }}
        />
    ));

    if (href) {
        return (
            <a href={href} className={classes} onClick={handleClick} {...props}>
                <span className="relative z-10">{children}</span>
                {rippleElements}
            </a>
        );
    }

    return (
        <button onClick={handleClick} className={classes} {...props}>
            <span className="relative z-10">{children}</span>
            {rippleElements}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string
};

export default Button;
