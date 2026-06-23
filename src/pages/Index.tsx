import { useState, useCallback } from "react";
import LoadingScreen from "components/LoadingScreen";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import StatsSection from "components/StatsSection";
import SkillsSection from "components/SkillsSection";
import CurrentlyLearning from "components/CurrentlyLearning";
import ProjectsSection from "components/ProjectsSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";
import BackgroundParticles from "components/BackgroundParticles";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoaded = useCallback(() => setLoading(false), []);

  if (loading) return <LoadingScreen onComplete={handleLoaded} />;

  return (
    <div className="min-h-screen gradient-bg transition-colors duration-500 relative">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StatsSection /> 
        <CurrentlyLearning />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
