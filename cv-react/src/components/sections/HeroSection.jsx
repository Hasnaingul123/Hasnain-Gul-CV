import Button from '../ui/Button';
import FloatingIcon from '../ui/FloatingIcon';
import { personalInfo, floatingTechIcons } from '../../constants/portfolioData';

/**
 * Hero section with vibrant, colorful design
 */
const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
        >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-orange-500/20 animate-gradient-shift"></div>

            {/* Colorful floating orbs */}
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow"></div>
            <div className="absolute top-40 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 animate-fade-in-blur">
                        {/* Profile Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg animate-pulse-glow"></div>
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-neon group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg text-center sm:text-left">
                                {personalInfo.name}
                            </h1>
                        </div>

                        <h2 className="font-body text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 drop-shadow-md text-center sm:text-left">
                            {personalInfo.title}
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow-md text-center sm:text-left">
                            {personalInfo.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 items-center sm:items-start">
                            <Button variant="primary" href="#projects">
                                View Projects
                            </Button>
                            <Button variant="secondary" href="#contact">
                                Get In Touch
                            </Button>
                            <a
                                href="/HasnainGul-CV.pdf"
                                download="HasnainGul-CV.pdf"
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon-green flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <i className="fas fa-download"></i>
                                    Download CV
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Floating Icons */}
                    <div className="relative h-[500px] hidden md:block">
                        {floatingTechIcons.map((item, index) => (
                            <FloatingIcon
                                key={index}
                                icon={item.icon}
                                techName={item.tech}
                                position={item.position}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
