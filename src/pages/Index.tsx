import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ALYA PERFUMES | Perfumes Árabes de Luxo - Lattafa, Armaf, Al Wataniah</title>
        <meta 
          name="description" 
          content="Descubra perfumes árabes de alta fixação e projeção incomparável. Lattafa, Armaf e Al Wataniah com entrega para todo Brasil. O luxo árabe ao seu alcance." 
        />
        <meta name="keywords" content="perfumes árabes, lattafa, armaf, al wataniah, perfumes importados, perfumes de luxo, yara, khamrah, asad" />
        <link rel="canonical" href="https://alyaperfumes.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <ReviewsSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
