import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section className="mt-16 pt-16 border-t border-border">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-2xl md:text-3xl text-foreground mb-8"
      >
        Você também pode gostar
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={`/produto/${product.id}`}
              className="group block bg-gradient-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-primary text-xs uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="font-serif text-sm text-foreground line-clamp-1 mb-2">
                  {product.name}
                </h3>
                <span className="text-foreground font-bold text-sm">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
