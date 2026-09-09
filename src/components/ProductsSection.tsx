import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import PerfumeConsultSection from "@/components/PerfumeConsultSection";
import { activeProducts, ProductGender } from "@/data/products";

type GenderFilter = "todos" | ProductGender;

const filters: { value: GenderFilter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "feminino", label: "Feminino" },
  { value: "masculino", label: "Masculino" },
  { value: "unissex", label: "Unissex" },
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState<GenderFilter>("todos");

  const visibleProducts =
    activeFilter === "todos"
      ? activeProducts
      : activeProducts.filter((product) => product.gender === activeFilter);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Coleção Exclusiva
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nossa <span className="text-gradient-gold">Vitrine</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selecionamos as melhores fragrâncias árabes para você.
            Qualidade premium a preços acessíveis.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Gender Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary/30 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* "Não encontrou?" - consulta de perfumes fora do catálogo */}
        <PerfumeConsultSection />
      </div>
    </section>
  );
};

export default ProductsSection;
