import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../constants/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Skills section with natural, organic styling
 */
const SkillsSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-sand-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle subtitle="Technologies and tools I work with">
                    Skills & Technologies
                </SectionTitle>

                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {skills.map((skillCategory, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Subtle glow on hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-300 to-terra-300 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                            {/* Card */}
                            <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-glass hover:shadow-glass-hover hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-terra-100 text-sage-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <i className={`fas ${skillCategory.icon} text-2xl`}></i>
                                </div>

                                <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                                    {skillCategory.category}
                                </h3>

                                <ul className="space-y-3">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <li
                                            key={skillIndex}
                                            className="text-text-secondary flex items-center gap-3 hover:text-sage-600 transition-colors duration-300"
                                        >
                                            <i className="fas fa-check-circle text-sage-500 text-sm"></i>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
