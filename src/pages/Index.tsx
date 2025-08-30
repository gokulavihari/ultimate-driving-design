import Hero from "@/components/Hero";
import ModelsShowcase from "@/components/ModelsShowcase";
import TechnologySection from "@/components/TechnologySection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ModelsShowcase />
      <TechnologySection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
