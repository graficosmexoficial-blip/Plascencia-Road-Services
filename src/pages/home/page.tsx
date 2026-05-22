import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import AboutSection from "./components/AboutSection";
import EstimateCTA from "./components/EstimateCTA";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import ReviewsSection from "./components/ReviewsSection";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <EstimateCTA />
        <ServicesSection />
        <WhyChooseUs />
        <HowItWorks />
        <ReviewsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}