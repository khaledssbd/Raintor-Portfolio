import AboutSection from '@/components/Home/AboutSection';
import ContactSection from '@/components/Home/ContactSection';
import FooterSection from '@/components/Home/FooterSection';
import HeroSection from '@/components/Home/HeroSection';
import SkillsSection from '@/components/Home/SkillsSection';
import WorkProcessSection from '@/components/Home/WorkProcessSection';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <SkillsSection />

      <AboutSection />

      <WorkProcessSection />

      <ContactSection />

      <FooterSection />
    </div>
  );
};

export default Home;
