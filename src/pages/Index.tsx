import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CycloneTracker from "@/components/CycloneTracker";
import MethodologySection from "@/components/MethodologySection";
import GISMapsGallery from "@/components/GISMapsGallery";
import DataTableSection from "@/components/DataTableSection";
import AnalysisCharts from "@/components/AnalysisCharts";
import ObservationsSection from "@/components/ObservationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="cyclone-tracker">
        <CycloneTracker />
      </div>
      <MethodologySection />
      <GISMapsGallery />
      <DataTableSection />
      <AnalysisCharts />
      <ObservationsSection />
      <Footer />
    </div>
  );
};

export default Index;
