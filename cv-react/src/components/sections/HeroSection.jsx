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
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-blur">
                        {/* Profile Section */}
                        <div className="flex items-center gap-8 mb-8">
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg animate-pulse-glow"></div>
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-neon group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h1 className="font-heading text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                                {personalInfo.name}
                            </h1>
                        </div>

                        <h2 className="font-body text-2xl md:text-3xl font-semibold text-yellow-300 drop-shadow-md">
                            {personalInfo.title}
                        </h2>

                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow-md">
                            {personalInfo.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <Button variant="primary" href="#projects">
                                View Projects
                            </Button>
                            <Button variant="secondary" href="#contact">
                                Get In Touch
                            </Button>
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
