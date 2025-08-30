import MHero from "@/components/MHero";
import MModelsShowcase from "@/components/MModelsShowcase";
import MPerformanceSection from "@/components/MPerformanceSection";
import ImmersiveMediaSection from "@/components/ImmersiveMediaSection";
import LuxuryInteriorsSection from "@/components/LuxuryInteriorsSection";
import MTestDriveSection from "@/components/MTestDriveSection";
import MFooter from "@/components/MFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MHero />
      <MModelsShowcase />
      <MPerformanceSection />
      <ImmersiveMediaSection />
      <LuxuryInteriorsSection />
      <MTestDriveSection />
      <MFooter />
    </div>
  );
};

export default Index;
