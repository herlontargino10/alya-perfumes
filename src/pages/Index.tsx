import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
// Seção de depoimentos temporariamente oculta — reativar removendo o comentário
// deste import e do <ReviewsSection /> abaixo. Componente e dados preservados.
// import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ALYA PERFUMES | Perfumes Árabes Importados</title>
        <meta
          name="description"
          content="Perfumes árabes importados, com fragrâncias marcantes e opções para cada pessoa e cada momento."
        />
        <meta name="keywords" content="perfumes árabes, lattafa, armaf, al wataniah, perfumes importados, perfumes de luxo, yara, khamrah, asad" />
        <link rel="canonical" href="https://alyaperfumes.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        {/* <ReviewsSection /> — oculta por enquanto; reativar quando houver depoimentos reais */}
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
