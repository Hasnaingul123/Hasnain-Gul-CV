import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { certificates } from '../../constants/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Certificates section with natural styling and glassmorphism
 */
const CertificatesSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="certificates" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle subtitle="Professional certifications and internship experiences">
                    Certificates & Internships
                </SectionTitle>

                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {certificates.map((cert, index) => (
                        <Card
                            key={cert.id}
                            className={`${cert.type === 'internship' ? 'border-l-4 border-terra-400' : 'border-l-4 border-sage-400'}`}
                            glowEffect
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cert.type === 'internship'
                                ? 'bg-terra-100 text-terra-600'
                                : 'bg-sage-100 text-sage-600'
                                }`}>
                                <i className={`fas ${cert.icon} text-3xl`}></i>
                            </div>

                            <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 leading-tight">
                                {cert.title}
                            </h3>

                            <p className={`font-medium mb-2 flex items-center gap-2 ${cert.type === 'internship' ? 'text-terra-600' : 'text-sage-600'
                                }`}>
                                <i className="fas fa-building text-sm"></i>
                                {cert.issuer}
                            </p>

                            <p className="text-text-muted mb-4 flex items-center gap-2">
                                <i className="fas fa-calendar text-sm"></i>
                                {cert.date}
                            </p>

                            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                                {cert.description}
                            </p>

                            <a
                                href={cert.downloadUrl}
                                download
                                className={`inline-flex items-center gap-2 font-medium transition-all duration-300 ${cert.type === 'internship'
                                    ? 'text-terra-600 hover:text-terra-700'
                                    : 'text-sage-600 hover:text-sage-700'
                                    }`}
                            >
                                <i className="fas fa-download"></i>
                                Download Certificate
                            </a>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
