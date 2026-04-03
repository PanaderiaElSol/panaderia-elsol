import HeroSection from "@/components/HeroSection";
import SucursalesSection from "@/components/SucursalesSection";
import TortasSection from "@/components/TortasSection";
import PanaderiaSection from "@/components/PanaderiaSection";
import TradicionalesSection from "@/components/TradicionalesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SucursalesSection />
      <TortasSection />
      <PanaderiaSection />
      <TradicionalesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
