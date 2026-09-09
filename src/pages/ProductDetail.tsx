import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import {
  products,
  activeProducts,
  getActiveProductById,
  generateWhatsAppLink,
} from "@/data/products";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Só produtos ativos são exibidos normalmente
  const product = getActiveProductById(Number(id));
  // Produto existe no cadastro, mas está oculto (active: false)?
  const isHiddenProduct =
    !product && products.some((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">
            {isHiddenProduct
              ? "Produto indisponível no momento"
              : "Produto não encontrado"}
          </h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à loja
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = product.originalPrice > product.price;
  const discount = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const relatedProducts = activeProducts
    .filter((p) => p.id !== product.id && p.brand === product.brand)
    .slice(0, 4);

  // If not enough products from same brand, add more from others
  if (relatedProducts.length < 4) {
    const additionalProducts = activeProducts
      .filter((p) => p.id !== product.id && p.brand !== product.brand)
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additionalProducts);
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - {product.brand} | ALYA PERFUMES</title>
        <meta 
          name="description" 
          content={`${product.name} da ${product.brand}. ${product.description}. Compre agora por R$${product.price.toFixed(2).replace('.', ',')}`} 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Breadcrumb */}
          <Link 
            to="/#produtos" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos produtos
          </Link>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30 border border-border/50">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Discount Badge */}
              {hasDiscount && (
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded">
                    -{discount}%
                  </span>
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Brand */}
              <p className="text-primary text-sm uppercase tracking-wider mb-2">
                {product.brand}
              </p>

              {/* Name */}
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-muted-foreground">Quantidade:</span>
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary/50 transition-colors"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary/50 transition-colors"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={generateWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="buy" size="lg" className="w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5" />
                  Comprar Agora
                </Button>
              </a>

              {/* Description */}
              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="font-serif text-xl text-foreground mb-4">Descrição</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription || `Uma fragrância excepcional da ${product.brand} que combina ${product.description.toLowerCase()}. Este perfume oferece alta fixação e projeção incomparável, garantindo uma presença marcante durante todo o dia. Luxo e sofisticação em um frasco elegante.`}
                </p>
                
                {/* Characteristics */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.description.split(", ").map((char, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/50 text-muted-foreground text-sm rounded-full border border-border/50"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProductDetail;
