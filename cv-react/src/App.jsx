import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import ParticleBackground from './components/background/ParticleBackground';
import GeometricShapes from './components/background/GeometricShapes';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

/**
 * Main App component - Hasnain Gul's Portfolio
 */
function App() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <ParticleBackground />
      <GeometricShapes />

      {/* Layout Components */}
      <ScrollProgress />
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
