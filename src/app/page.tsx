import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GamesSection from "@/components/sections/GamesSection";
import GallerySection from "@/components/sections/GallerySection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <GallerySection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
