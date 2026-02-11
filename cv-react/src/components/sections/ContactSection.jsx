import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { contactInfo } from '../../constants/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Contact section with natural styling
 */
const ContactSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-sand-50 to-earth-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle subtitle="Let's connect and build something amazing together">
                    Get In Touch
                </SectionTitle>

                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {contactInfo.map((contact, index) => (
                        <Card
                            key={contact.id}
                            className="text-center group"
                            hoverEffect={!!contact.link}
                            glowEffect={!!contact.link}
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-sage-100 to-terra-100 text-sage-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:from-sage-500 group-hover:to-terra-500 group-hover:text-white transition-all duration-500">
                                <i className={`${contact.icon} text-xl sm:text-2xl`}></i>
                            </div>

                            <h3 className="font-heading text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                                {contact.label}
                            </h3>

                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-sage-600 hover:text-sage-700 transition-colors duration-300 font-medium"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <p className="text-text-muted">
                                    {contact.value}
                                </p>
                            )}
                        </Card>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 pt-10 border-t border-sand-300/50 text-center">
                    <p className="text-text-muted font-body">
                        © {new Date().getFullYear()} Hasnain Gul. Crafted with care.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
