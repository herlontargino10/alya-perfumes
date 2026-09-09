import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const toggleSearch = () => {
    setSearchOpen((open) => {
      // Ao fechar, limpa a busca (item 11).
      if (open) setQuery("");
      return !open;
    });
  };

  // Busca por nome (e também marca), sem diferenciar maiúsculas/minúsculas,
  // combinada com o filtro de gênero. Só produtos ativos (activeProducts).
  const normalizedQuery = query.trim().toLowerCase();
  const visibleProducts = activeProducts.filter((product) => {
    const matchesGender =
      activeFilter === "todos" || product.gender === activeFilter;
    const matchesQuery =
      normalizedQuery === "" ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery);
    return matchesGender && matchesQuery;
  });

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
            Nossa Seleção
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

        {/* Gender Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
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

            {/* Lupa */}
            <button
              type="button"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Fechar busca" : "Buscar perfume"}
              aria-expanded={searchOpen}
              className={`inline-flex items-center justify-center px-3 py-2 md:px-4 md:py-2.5 rounded-full border transition-all duration-300 ${
                searchOpen
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/30 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Campo de busca */}
          <AnimatePresence initial={false}>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="relative mx-auto mt-4 w-full max-w-sm">
                  <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Procurar perfume..."
                    aria-label="Procurar perfume pelo nome"
                    className="w-full rounded-full border border-border/50 bg-secondary/30 py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/60"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        inputRef.current?.focus();
                      }}
                      aria-label="Limpar busca"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Products Grid */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {visibleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Nenhum perfume encontrado.
          </p>
        )}

        {/* "Não encontrou?" - consulta de perfumes fora do catálogo */}
        <PerfumeConsultSection />
      </div>
    </section>
  );
};

export default ProductsSection;
