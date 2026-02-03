import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { aboutContent } from '../../constants/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * About section with colorful design
 */
const AboutSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle>About Me</SectionTitle>

                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="space-y-6 mb-12 max-w-4xl mx-auto">
                        {aboutContent.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Education Section */}
                    <Card className="max-w-5xl mx-auto border-l-4 border-purple-500" glowEffect colorScheme="purple">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-colorful">
                                <i className="fas fa-graduation-cap text-3xl text-white"></i>
                            </div>
                            <h3 className="font-heading text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {aboutContent.education.map((edu, index) => (
                                <div key={index} className="border-b border-purple-200 last:border-0 pb-6 last:pb-0">
                                    <h4 className="font-heading text-2xl font-medium text-gray-800 mb-2">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                                        <i className="fas fa-university text-sm"></i>
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-600">
                                        {edu.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
