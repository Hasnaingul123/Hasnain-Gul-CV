import { useState, useEffect } from 'react';
import { navigationLinks } from '../../constants/portfolioData';

/**
 * Navigation bar with colorful glassmorphism
 */
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-colorful'
                : 'bg-white/80 backdrop-blur-lg'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <div className="nav-logo">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                            Hasnain Gul
                        </h2>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10">
                        {navigationLinks.map((link, index) => (
                            <li
                                key={link.id}
                                className="opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${0.7 + index * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="text-gray-700 font-semibold relative group transition-all duration-300 hover:text-purple-600 inline-block"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-400 group-hover:w-full shadow-colorful"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50 p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-16 sm:top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-colorful transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <ul className="flex flex-col p-6 gap-4">
                    {navigationLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className="text-gray-700 font-semibold block py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-600 transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
