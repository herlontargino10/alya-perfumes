import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product, generateWhatsAppLink } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  // Enquadramento da imagem dentro da área do card.
  // Padrão: foto já recortada → object-cover (preenche a área).
  // imageContain: render "justo" da embalagem → object-contain + respiro interno.
  // imageZoom: foto com fundo branco embutido → object-contain + zoom visual
  //   controlado (transform: scale) para o produto ocupar mais o quadro SEM cortar
  //   nenhuma parte. O container mantém overflow-hidden; nada é recortado no arquivo.
  const hasZoom = typeof product.imageZoom === "number";
  const imageWrapClass = `relative aspect-[4/5] overflow-hidden ${
    product.imageContain || hasZoom ? "bg-white" : "bg-secondary/30"
  }`;
  const imageClass = `w-full h-full transition-transform duration-700 ${
    product.imageContain
      ? "object-contain p-[6%] md:p-[8%] group-hover:scale-110"
      : hasZoom
        ? "object-contain"
        : "object-cover group-hover:scale-110"
  }`;
  const imageStyle = hasZoom
    ? { transform: `scale(${product.imageZoom})` }
    : undefined;
  const showGradient = !product.imageContain && !hasZoom;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group relative bg-gradient-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500"
    >

      {/* Image Container - Clickable to product detail */}
{product.inStock !== false ? (
  <Link to={`/produto/${product.id}`}>
    <div className={`${imageWrapClass} cursor-pointer`}>
      <img
        src={product.image}
        alt={`${product.brand} ${product.name}`}
        className={imageClass}
        style={imageStyle}
        loading="lazy"
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </Link>
) : (
  <div className={`${imageWrapClass} opacity-60 cursor-not-allowed`}>
    <img
      src={product.image}
      alt={`${product.brand} ${product.name}`}
      className={imageClass}
      style={imageStyle}
      loading="lazy"
    />
    {showGradient && (
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
    )}
  </div>
)}

      {/* Content */}
      <div className="p-3 md:p-4">
        {/* Brand */}
        <p className="text-primary text-[10px] md:text-xs uppercase tracking-wider mb-1">
          {product.brand}
        </p>

        {/* Name - Clickable */}
        {product.inStock !== false ? (
  <Link to={`/produto/${product.id}`}>
    <h3 className="font-serif text-sm md:text-lg text-foreground mb-1 md:mb-2 line-clamp-1 hover:text-primary transition-colors cursor-pointer">
      {product.name}
    </h3>
  </Link>
) : (
  <h3 className="font-serif text-sm md:text-lg text-muted-foreground mb-1 md:mb-2 line-clamp-1">
    {product.name}
  </h3>
)}

        {/* Description */}
        <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-3 md:mb-4">
          <span className="text-base md:text-xl font-bold text-foreground">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>

        {/* CTA Button */}
        {product.inStock ? (
  <a
    href={generateWhatsAppLink(product)}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Button
      variant="buy"
      size="sm"
      className="w-full gap-1.5 whitespace-nowrap text-[11px] tracking-normal md:text-sm md:tracking-wider"
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      Tenho interesse
    </Button>
  </a>
) : (
  <Button
    variant="buy"
    size="sm"
    disabled
    className="w-full whitespace-nowrap text-[11px] tracking-normal md:text-sm md:tracking-wider opacity-60 cursor-not-allowed"
  >
    Esgotado
  </Button>
)}
      </div>
    </motion.div>
  );
};

export default ProductCard;
