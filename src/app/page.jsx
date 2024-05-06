import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div className="w-full max-h-screen bg-white h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
