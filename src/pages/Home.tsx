
import SEO from '@/components/SEO';
import BackgroundLogos from '@/components/home/BackgroundLogos';
import HeroSection from '@/components/home/HeroSection';
import ValuesSection from '@/components/home/ValuesSection';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-zinc-50 relative">
        <BackgroundLogos />
        <HeroSection />
        <ValuesSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
