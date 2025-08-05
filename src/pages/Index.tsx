import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommunitySpotlight from "@/components/CommunitySpotlight";
import FeaturesSection from "@/components/FeaturesSection";
import InteractiveMap from "@/components/InteractiveMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CommunitySpotlight />
        <FeaturesSection />
        <InteractiveMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
